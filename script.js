"use strict";

const textarea = document.querySelector('.textarea');
const buttonAnalysis  = document.querySelector('.button-analysis');

function textAnalyzer() { // Аналізатор тексту
    const checkedSymbols    = document.querySelector('.checked-symbols');
    const checkedNoSpaces   = document.querySelector('.checked-no-spaces');
    const checkedStatistics = document.querySelector('.checked-statistics');
    const checkedTranslite  = document.querySelector('.checked-trans');

    const resultLngWords           = document.querySelector('.length-w');
    const resultLngSymbols         = document.querySelector('.length-s');
    const resultLngSymbolsNoSpaces = document.querySelector('.length-n');

    const str = textarea.value;

    function lngWords(str) { // Кількість слів
        resultLngWords.textContent = '';
        const arr = str.split(' ');

        resultLngWords.textContent = 'Кількість слів рівна : ' + arr.length;
    }

    lngWords(str);

    if (checkedSymbols.checked === true) {
        function lngSymbols(str) { // Кількість символів 
            resultLngSymbols.textContent = 'Кількість символів рівна : ' + str.length;
        }

        lngSymbols(str);

    } else {

        resultLngSymbols.textContent = '';
    }

    if (checkedNoSpaces.checked === true) {
        function lngNoSpaces(str) { // Кількість символів без пробілів
            const arr = str.split(' ').join('').trim();

            resultLngSymbolsNoSpaces.textContent = 'Кількість символів без пробілів : ' + arr.length;
        }
        lngNoSpaces(str);
    } else {
        resultLngSymbolsNoSpaces.textContent = '';
    }

    if (checkedStatistics.checked === true) {
        function statistics(str) { // Статистика символів 
            const offerResultAnalyses = document.querySelector('.result-stats');
                  offerResultAnalyses.classList.add('active');

            let ul = document.querySelector('.list');
                ul.innerHTML = '';

            const arr = str.split('');
            const result = {};

            for (let i = 0; i < arr.length; ++i) {
                 let a = arr[i];

                if (result[a] != undefined) {
                    ++result[a];
                } else {
                    result[a] = 1;
                }
            }

            for (const key in result) {
                 const li = document.createElement('li');

                if(key == ' '){
                    li.innerHTML = 'Символ: ' + 'Пробіл' + ' = ' + '<span>' + result[key] + '<span>' + ' раз(ів)';
                }else{
                    li.innerHTML = 'Символ: ' + key + ' = ' + '<span>' + result[key] + '<span>' + ' раз(ів)';
                }

                ul.appendChild(li);
            }

            if (str.length <= 0) {
                offerResultAnalyses.classList.remove('active');
            }
        }
        statistics(str);
    }

    if(checkedTranslite.checked === true){
        function translit() { // Транслітератор
            const offerResultTransliteration = document.querySelector('.translit-offer');
                  offerResultTransliteration.classList.add('active');
        
            const str = textarea.value;
        
            let answer = '';
            const converter = {
                'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g',
                'д': 'd', 'е': 'e', 'є': 'ie', 'ж': 'zh', 'з': 'z',
                'і': 'i', 'ї': 'i', 'й': 'i', 'к': 'k', 'л': 'l',
                'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
                'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh',
                'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'и': 'y',
                'ь': '', 'ю': 'iu', 'я': 'ya',
        
                'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G',
                'Д': 'D', 'Е': 'E', 'Є': 'Ye', 'Ж': 'Zh', 'З': 'Z',
                'І': 'I', 'Ї': 'Yi', 'Й': 'Y', 'К': 'K', 'Л': 'L',
                'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R',
                'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh',
                'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch',
                'Ь': '', 'Ю': 'Yu', 'Я': 'Ya', 'И': 'Y',
            };
        
            for (let i = 0; i < str.length; ++i) {
                if (converter[str[i]] == undefined) {
                    answer += str[i];
                } else {
                    answer += converter[str[i]];
                }
            }
        
            const transliteResult = document.querySelector('.traslit-result');
                  transliteResult.textContent = ''
                  transliteResult.textContent = answer;
        
            if (answer.length <= 0) {
                offerResultTransliteration.classList.remove('active');
            }
        }
        translit();
    }
}

buttonAnalysis.addEventListener('click', textAnalyzer);
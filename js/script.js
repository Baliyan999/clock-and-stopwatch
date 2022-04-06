//1 дз гласные буквы

// function vowels(word = 'привет'){   
//     let alphabet = 'аиоуыэеёюя';
//     let userWord = word.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < userWord.length; i++) {
//         for (let k = 0; k < alphabet.length; k++) {
//            if(userWord[i] == alphabet[k]) count++;
//         }
//     }
//     return `В слове ${word} найдено ${count} гласных букв`
// };
// console.log(vowels('ылвдподлывоаыдвлаодыв'));

//2 дз спрашивать команды
// let names = [];
// while(true){
//     let word = prompt('Введите команды add, del or stop и какое-то слово');
//     if(!word) continue;
//     word = word.toLowerCase();
//     let wordArr = word.split(', ');
//     if(wordArr[0] == 'add') names.push(wordArr[1]);
//     else if(wordArr[0] == 'del') {
//         let id = names.indexOf(wordArr[1]);
//         if(id == -1) continue;
//         names.splice(id, 1);
//     }
//     else if(wordArr[0] == 'stop') break;
//     else continue;
// }
// console.log(names);


//часы
//получаем элементы со страницы
const links = document.querySelectorAll('.tabsItem'),
      content = document.querySelectorAll('.tabsContentItem'),
      secondArrow = document.querySelector('.s'),
      minuteArrow = document.querySelector('.m'),
      hourArrow = document.querySelector('.h'),
      minutesBlock = document.querySelector('.minutes'),
      hoursBlock = document.querySelector('.hours'),
      degree = 6;
//табы
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', function(e){
       e.preventDefault();//отменяет действие элемента по умолчанию
       for (let k = 0; k < links.length; k++) {
        //   links[i].classList.add(); //добвляет класс или классы
          links[k].classList.remove('active');//удаляет класс
          content[k].classList.remove('active');
        //   links[i].classList.toggle();//если класс  есть - удалит, если нет - добавит
        //   links[i].classList.contains(); //проверяет есть ли такой класс у элемента  
       }
       this.classList.add('active');
       content[i].classList.add('active');
   });
}

function clock(){
    let date = new Date();
    let s = date.getSeconds(); // ()+2  для точности мирового времени
    let m = date.getMinutes();
    let h = date.getHours(); 

    minutesBlock.textContent = m < 10 ? `0${m}` : m; 
    hoursBlock.textContent = h < 10 ? `0${h}` : h; 
    setTimeout(clock, 1000);
    console.log(`Сейчас ${h}:${m}:${s} время`);

    hourArrow.style.transform = `rotateZ(${h * 30 + (m * degree / 12)}deg)`
    minuteArrow.style.transform = `rotateZ(${m * degree}deg)`
    secondArrow.style.transform = `rotateZ(${s * degree}deg)`
  }
clock();



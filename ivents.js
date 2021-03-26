// - Создать произвольный елемент с id = text. 
//  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let element = document.getElementById('text')
// element.onclick = ()=>{
//     let height = + getComputedStyle(text).height.replaceAll('px','')
//     element.style.height = 0 + 'px'
//   }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let but = document.getElementById('btn')
// btn.onclick = ()=>{
//   btn.style.display = 'none'
// }
// console.log(but)

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let btn = document.getElementById('submit')
// btn.onclick = ()=>{
// let inp = document.getElementById('age')
// let back = inp.value
// if(back >=18){
//             confirm('enter')
//         }
// if(back <18){
//             confirm('go away')
//         }
//     }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.


// let comments = [
//     {title : 'ira', body:'hello, my name'},
//     {title : 'dima', body:'hello'},
//     {title : 'karina', body:'what are you doing?'},
//     {title : 'me', body:'why are you?'},
// ]


// let content = document.getElementById('content');
// comments.forEach(tite =>{
//     let div = document.createElement('div')
//     let h1 = document.createElement('h1')
//     let p = document.createElement('p')
//     let but = document.createElement('button')
//     but.innerText = 'click'
//     p.innerText = (`${tite.body}`)
//     h1.innerText = (`${tite.title}`)
//     but.onclick = ()=>{
//     p.style.display = 'none'
//     }
//     div.appendChild(h1)
//     div.appendChild(p)
//     div.appendChild(but)
//     content.appendChild(div)
// })

// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let forma1 = document.forms.form1
// let forma2 = document.forms.form2
// let btn = document.getElementById('button')
// btn.onclick = ()=>{
// console.log(forma1.name.value)
// console.log(forma2.name2.value)
// console.log(forma1.age.value)
// console.log(forma2.age2.value)
// }


// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let main = document.getElementById('main')
// function tabl(a,b,el){
//     let table = document.createElement('table');
//     for(let r=0; r < a ; r++){
//         let numb = document.createElement('a')
//       for (let i = 0; i< b; i++){
//             let numb2 = document.createElement('b')
//             numb2.innerText = i+r
//         numb.appendChild(numb2)
//       }
//       table.appendChild(numb)
//     }
//    el.appendChild(table)
// }
//  tabl(1,3,main)



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let div = document.getElementById('table')
// let inp1 = document.getElementById('rows')
// let inp2 = document.getElementById('column')
// let inp3 = document.getElementById('type') 
// let back = document.getElementById('back')
// back.onclick = ()=>{
// let divAnswers = document.createElement('div')
// for (let i = 0; i < rows.value; i++) {
//     let td = document.createElement('td');

//     for (let j = 0; j < column.value; j++) {
//         let tr = document.createElement('tr');
//         tr.innerHTML = type.value + ' ' + j;
//         td.appendChild(tr);
//     }
//     divAnswers.appendChild(td);
// }
// div.appendChild(divAnswers);
// }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let arrayImage = [
// { id : 1 , img_url : 'https://trinixy.ru/pics5/20180420/thousand_words_01.jpg' },
// { id : 2 , img_url : 'https://zefirka.net/wp-content/uploads/2020/05/belogolovyj-orlan-na-rybalke-1.jpg'},
// { id : 3 , img_url : 'https://zooclub.ru/attach/2508.jpg'},
// { id : 4 , img_url : 'https://simple-fauna.ru/wp-content/uploads/2017/02/pitanie-belogolovogo-orlana-1.jpg'},
// { id : 5 , img_url : 'https://www.nexplorer.ru/load/Image/0614/orlan_1_600.jpg'},
// { id : 6 , img_url : 'https://i.pinimg.com/originals/62/9f/6f/629f6f2f033acf04c145f61e13450864.jpg'},
// ];

// let content = document.getElementById('content')
// let img =  document.createElement('img')
// let btn1 = document.createElement('button')
// let btn2 = document.createElement('button')
// btn1.innerText = 'Left'
// btn2.innerText = 'Right'
// let index = 0
// img.width = 300
// img.src = arrayImage[index].img_url
// content.appendChild(img)
// content.appendChild(btn1)
// content.appendChild(btn2)
// btn1.onclick = ()=>{
//     index-1<0
//     ?index = arrayImage.length - 1
//     :index = index - 1
//     img.src = arrayImage[index].img_url
// }
// btn2.onclick = ()=>{
//     index + 1 > arrayImage.length - 1
//     ? index = 0
//     : index = index + 1
//     img.src = arrayImage[index].img_url
// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


// let arrH = document.getElementsByTagName('h2')
// let menu = document.getElementById ('menu')
// let div = document.createElement('div')
// for ( let i of arrH){
//     i.id = 'n'+ i
//  let ul = document.createElement('ul')
//     let li = document.createElement('li')
//        let a = document.createElement('a');
//        a.innerHTML = i.innerText;
//        a.href = '#n' + i; 
//     li.appendChild(a)
//        ul.appendChild(li)
//        div.appendChild(ul) 
//     }
//    menu.appendChild(div)

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let back = document.getElementById('status')
// back.onclick = function (){
//     let div = document.createElement('div')
//     div.innerText = 'Пользователи со статусом false'
// for ( let stat of usersWithAddress){
//     if(stat.status === false){
//     let ul = document.createElement('ul')
//     let li = document.createElement('li')
//         li.innerText = (`${stat.name} - ${stat.age} - ${stat.status}`)
//            ul.appendChild(li)
//            div.appendChild(ul)
//     }
//     document.body.appendChild(div)
// }
// }

// let back2 = document.getElementById('userAge')
// back2.onclick = function (){
//     let div = document.createElement('div')
//     div.innerText = 'Пользователи старше 29 лет'
// for ( let numb of usersWithAddress){
//     if(numb.age >= 29){
//         let ul = document.createElement('ul')
//         let li = document.createElement('li')
//         li.innerText = (`${numb.name} - ${numb.age}`)
//         ul.appendChild(li)
//         div.appendChild(ul)
//     }
//     document.body.appendChild(div)
// }
// }

 
// let back3 = document.getElementById('city')
// back3.onclick = function(){
//     let div = document.createElement('div')
//     div.innerText = 'Пользователи города Киев'
// for (let value of usersWithAddress){
//     if(value.address.city ==='Kyiv'){
// let ul = document.createElement('ul')
// let li = document.createElement('li')
//   li.innerText = `${value.address.city} - ${value.name}`
//      ul.appendChild(li)
//      div.appendChild(ul)
// }
// document.body.appendChild(div)
// }
// }



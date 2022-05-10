
var elHeader = document.querySelector(`.heading`);

var usdToUzs = 9433.34;
var euroToUzs = 10354.03;

var planedUsd = 500; 
var hotelUsd = 250;  
var museumEuro = 120; 

var firstname = prompt("Ismingizni kiriting")

alert(`Assalomu alaykum bizning safar xizmatimizga xush kelibsiz.`)
alert(`Borish-kelish samolyot bileti: 500$.`);
alert(`Mehmonxona to'lovi: 250$.`);
alert(`Muzey va ko'ngilochar joylar uchun: 120 E.`);
alert(`Minimal mablag': 8.317.500`)

var totalExpance = usdToUzs * (planedUsd + hotelUsd) + museumEuro * euroToUzs

var userBudget = Number(prompt(`Mablag'ingizni kiriting:`, 0));

if(totalExpance < userBudget && userBudget <= 10000000) {
    elHeader.textContent = `Mablag'ingiz yetarli Oq yo'l!`;
}else if(userBudget > 10000000) {
    elHeader.textContent = `Mablag'ingiz yetarli Oq yo'l!`;
}
else {
    elHeader.textContent = `Alisher, ozgina sabr qilish kerak bo'lar ekan.`;
}


//Minimum cost: 8.317.500

console.log(userBudget);






// var age = prompt("Yoshingizni kiriting:") - 0
// if (age <= 7) {
//     alert("Bemalol uxlayver, Bog'chaga bormasang agarda")
// } else if (age <= 18) {
//     alert(`Maktabga borish kerak, Siz ${age - 7} sinfda o'qiysiz`)
// }
// else {
//     alert('Universitetga borish kerak')
// }

// var age = prompt("Yoshingizni kiriting") - 0

// if (age <= 6) {
//     alert("Uhla")
// } else if (age >=18) {
//     alert (`Yo'qol`)
// }
// else if (age <=18) {
//      alert ("Hayr")   
// }



Math

// var a = prompt()

// ildiz ostida chiqadi

// var result = Math.sqrt(a)

// alert(result) 



// var a = 22.133


// var result = Math.floor(a)

// console.log(result)



// var a = 22.423 
// // 23 chiqadi

// var result = Math.ceil(a)

// console.log(result)



// var a = prompt()
// 0.5 dan ko'p bo'lsa 23 chiqadi kam bo'lsa o'zi chiqadi

// var result = Math.round(a)

// alert(result)


// var a = 22
// ixtiyoriy sonlar chiqadi

// var result = Math.random(a)

// console.log(result)


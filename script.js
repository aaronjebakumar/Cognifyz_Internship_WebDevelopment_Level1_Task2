const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=> {
    btn.style.background = "rgb(54, 84, 134)";
    btn.style.boxShadow = '0 0 40px rgb(54, 84, 134)';
    btn.style.transition = '.5s ease';
});

const per = document.getElementById('name');
const btn1 = document.getElementById('btn1');
const greetings=["Good Morning","Good Afternoon","Good Evening"];
const currentHour = new Date().getHours();
 
let index= currentHour >= 12 && currentHour < 17 ? 1 : currentHour >= 17 ? 2 : 0 ;

function fun1(){
    alert(greetings[index]+", " + per.value);
}
btn1.addEventListener('click',fun1);


var out1 = document.getElementById('output');
// out1 = num1+num2;
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click',() => {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    out1.innerHTML= "Output : "+Number(num1+num2);
    console.log
});

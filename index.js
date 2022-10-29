
const h1=document.querySelector('h1');
const p=document.querySelectorAll('p');
const parrafo=document.querySelector('.parrafo');
const pid=document.querySelector('#pid');
const input=document.querySelector('input');


console.log(h1);
console.log(input.value);

console.log({
    p,
    h1,
    parrafo,
    pid,
    input
})
//modificar el texto html
h1.innerHTML='Cuervito <br> Negro';

//leer los atributos
console.log(h1.getAttribute('marca'));
console.log(h1.getAttribute('class'))

//modificar la clase
h1.setAttribute('class', 'rojo');

//agregar y eliminar clase

h1.classList.add('azul');
h1.classList.remove('rojo');

//agregar elementos al input

input.value="Hola mundo";


//agregar un elemento html

const img=document.createElement('img');

//agregar a la imagen valor
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Pedro_Castillo_portrait.png');
console.log(img);
pid.appendChild(img);
pid.innerHTML="";

//para borrar podemos usar pid.innerHTML="";

//========================== NUEVO INTERACCIÓN
const input1=document.querySelector('#num1');
const input2=document.querySelector('#num2');
const btn=document.querySelector('#btnCalcular');
const presult=document.querySelector('#resultado')

h1.innerHTML="Calculadora";

input1.value=0;
input2.value=0;
//si es con formulario tenemos que agregar un event como parametro para que no refresque la pagina.
const suma=(event)=>{
  //  event.preventDefault();
    let resultado=parseInt(input1.value)+parseInt(input2.value);
           // alert(`El resultado es ${resultado}`);
        presult.innerHTML="Result: "+resultado;
}

//btn.addEventListener('click', suma);


//para formularios es asi

const form=document.querySelector('#formulario');

//form.addEventListener('submit', suma);



//otra forma de hacer es especificar en el formulario que el boton es de type=button y podemos ejecutar

btn.addEventListener('click', suma);


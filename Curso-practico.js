/*
let respuesta = prompt("cuanto es 2+2?")

while(respuesta != 4){
    if(respuesta === 4){
        alert("Correcto!!!")
        break
    } else {
        alert("Respuesta incorrecta, intente nuevamente")
        respuesta = prompt("cuanto es 2+2?")
    }
}

*/
let Array = [1, 2, 4, 5, 78,8, , 8,8,8,8,]

function mostrarElemento(Array){
    console.log( "El primer elemento es: ", Array[0])
}

function mostrarTodosLosElementos(arreglo){
    for(i = 0; i < arreglo.length; i++){
        console.log(Array[i])
    }
}

var obj = {
    nombre: "facundo",
    apellido: "melgarejo",
    edad: 23
}

function mostrarTodosLosElementosObj(obj){
    var arreglo = Object.values(obj)
    for(i = 0; i < arreglo.length; i++){
        console.log(arreglo[i])
    }
}

//Teoria 
/*
let h1 = document.querySelector('h1');
const parrafo = document.getElementById('pid')
console.log(h1)

h1.innerHTML = "Hola <br> mundo" //Ingresa como codigo html, por lo tanto hace el salto
h1.innerText = "Curso JS" //Solo ingresa como texto, muestra: Hola <br> mundo

h1.classList.add('rojo') //Agrega
h1.classList.remove('rojo')//Saca

h1.classList.toggle('rojo')//Dependiendo si ya tiene la clase o no, se la pone o se la saca

h1.classList.contains('rojo') //Devuelve un true o false, dependiendo si nuestro elemento tiene o no la clase que le preguntamos 

const img = document.createElement('img');

img.setAttribute('src', 'https://i.pinimg.com/originals/f0/01/cc/f001cc0a0ebc16aa418d9b133582566e.jpg'); //Con este setAttribute, le digo que ponga src y el valor ./rick

img.setAttribute('width', '300px')

console.log(img);

parrafo.append(img) 

*/ 

//calcular suma

const num1 = document.querySelector('#numero1')
const num2 = document.querySelector('#numero2')
const btncalcular = document.querySelector('#btncalcular')
const resultado = document.querySelector('.resultado')
const limpiar = document.querySelector('#btnlimpiar')


btncalcular.addEventListener('click', function(){
    console.log(parseFloat(num1.value) + parseFloat(num2.value))
    resultado.innerText = parseFloat(num1.value) + parseFloat(num2.value)
})

limpiar.addEventListener('click', function(){
    resultado.innerHTML = ' '
    num1.setAttribute('placeholder', 'Escribe el primer numero aqui')
    num2.innerHTML = ' '
})
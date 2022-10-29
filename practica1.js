

let  Nombre="Cristian",
 Apellido="Arellano", 
 NombreUserPlatzi="Cristianxds",
correo="cristianxds14@gmail.com",
 edad=20,
 mayoredad="SI",
 dineroahorrado=6421.20,
 deudas=20.30, NombreCompleto=Nombre+" "+Apellido, 
 DineroReal=dineroahorrado-deudas;

 console.log(NombreCompleto+"\n"+DineroReal);

 console.log(Nombre,Apellido,NombreUserPlatzi,correo,edad,mayoredad,dineroahorrado,deudas);



let obj={
    Nombre:'Cristian',
 Apellido:'Arellano', 
 NombreUserPlatzi:'Cristianxds',
 Correo:'cristianxds14@gmail.com',
 edad:20,
 mayoredad:'SI',
 dineroahorrado:6421.20,
 deudas:20.30
}

let dinerR=obj.dineroahorrado-obj.deudas;
let nomC=obj.Nombre+" "+obj.Apellido;

console.log(nomC+"\n"+dinerR);

console.log(obj);


//============00FUNCIONES

function Datos(name,lastname,nomcomplet,nickname){
    
    console.log(`Mi nombre es ${name} \n Apellido: ${lastname} \n NombComplet: ${nomcomplet} \n nickname ${nickname}`);
}

Datos('Cristian','Arellano','Cristian Arellano', 'cristianxds');


const Datoos= (nombre,apellido,nomcompleto,nickname)=>{
    console.log(`Mi nombre es ${nombre} \n Apellido: ${apellido} \n NombComplet: ${nomcompleto} \n nickname ${nickname}`);
}
Datoos('Cristian','Arellano','Cristian Arellano', 'cristianxds');


const Datos3 =function(nombre,apellido,nomcompleto,nickname){
    console.log(`Mi nombre es ${nombre} \n Apellido: ${apellido} \n NombComplet: ${nomcompleto} \n nickname ${nickname}`);
}

Datos3('Cristian','Arellano','Cristian Arellano', 'cristianxds');

//CONDICIONALES


const tipoSuscripcion="basic";

if(tipoSuscripcion=="free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoSuscripcion=="basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoSuscripcion=="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoSuscripcion=="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

const tipoSuscripcion2="basic";

if(tipoSuscripcion2=="free"){
    console.log("Solo puedes tomar los cursos gratis");}
if(tipoSuscripcion2=="basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");}
if(tipoSuscripcion2=="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");}
if(tipoSuscripcion2=="ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");}

//CICLOS REPETITIVOS
i=0;
while(i<5){
i++;
console.log("Numero: "+i);
}

y=10;
while(y>=2){
    y--;
    console.log("Numero es:"+y);
}


let result=4;
i=0;
while(i<1){

if(result==4){
    console.log("Felicitaciones haz logrado el reto");
    i++;
}else{
    console.log("Vuelve a repetir")
}
}


//LISTAS



const recibir =(array1)=>{
    for(i=0;i<array1.length;i++){
        console.log(array1[i]);
    }
}

recibir(['Cristian','Arellano',20]);

let obj2={
    nombre:'Cristian',
    Apellido:'Arellano',
    edad:20
}

const recibir2=(obj1)=>{
   console.log(obj1.nombre);
   console.log(obj1.Apellido);
   console.log(obj1.edad);

}

recibir2(obj2);


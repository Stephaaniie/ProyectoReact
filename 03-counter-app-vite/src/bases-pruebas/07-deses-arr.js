const retornaArreglo = () =>{
    return ['ABC', 123];
}

module.exports = {
    retornaArreglo
}
/*
const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );
const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);

const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = usState( 'Goku' );

console.log( nombre );
setNombre();
*/
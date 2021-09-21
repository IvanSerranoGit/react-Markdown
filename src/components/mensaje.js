//La funcion debe tener nombre con mayuscula al inicio
// accedemos a nuestros props, desde la funcion llamamos el objeto
// export default function Mensaje(props){
//     return(
//         <h1>{props.texto}</h1>
//     );
// }



export default function Mensaje({texto}){

    return (
        <h1>{texto}</h1>
    )
}
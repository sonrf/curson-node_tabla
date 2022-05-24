

const fs = require('fs');
// const crearArchivo = (base = 5) => {


//     return new Promise ( ( resolve, reject ) => {

//         let salida = '';
//         for (let i = 0; i <= 10; i++){
    
//             salida +=`${base} x ${ i } = ${ base * i} \n`;
//             // console.log(`${base} x ${ i } = ${ base * i}`);
//         }
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`, salida);

//        resolve(`tabla-${base}.txt`);

//     });

// }

const crearArchivo = async(base = 5, listar, hasta) => {

 try{
    let salida = '';
    for (let i = 0; i <= hasta; i++){

        salida +=`${base} ${'x'.blue} ${ i } = ${ base * i} \n`;
        // console.log(`${base} x ${ i } = ${ base * i}`);
    }
    if(listar) {
    console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

   return(`tabla-${base}.txt`);


 } catch (error){
    throw error;
 }


        
  

}

module.exports = {
    crearArchivo
}
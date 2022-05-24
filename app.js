

// const { argv, option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const color = require('colors');


console.clear();



// const[ ,,arg3 = 'base=5'] = process.argv;
// const[, base ] = arg3.split('=');

// console.log(process.argv);
// console.log(argv);
// console.log('base:yargs', argv.base);

//option('l')
// listar
// boolean
//opcional
// false




// const base = 5;

crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch( err => console.log(err));

// fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
//     if(err) throw err;
//     console.log('hola');
// })
// console.log(salida);
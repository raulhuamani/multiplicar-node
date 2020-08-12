//const multiplicar = require('./multiplicar/multiplicar');
// Destructuramos los metodos en variables
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

//console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comnando no reconocido');
        break;
}

// Reemplazamox esta funcionalidad y aplicacamos yargs

// //let base = '5';
// let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1];
// //console.log(argv);
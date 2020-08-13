const { argv } = require("./config/yargs");
const { crear,getListado,actualizar,borrar} = require("./por-hacer/por-hacer");
var colors = require('colors');

let comando =argv._[0];

switch (comando) {
    case 'crear':
        let tarea=crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let lista=getListado();
        lista.forEach(tarea => {
            console.log('====================='.green);
            console.log(tarea.descripcion);
            console.log('Completada',tarea.completada);
            console.log('====================='.green);
        });
        break;
    case 'actualizar':
        let actulizado=actualizar(argv.descripcion,argv.completada);
        break;
    case 'borrar':
        let borrado=borrar(argv.descripcion);
        break;

    default:
        console.log(`Comando ${comando} no existe`);
        break;
}

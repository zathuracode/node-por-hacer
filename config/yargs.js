const argv  = require("yargs")
    .command('crear',   'Crea un elementoi por hacer',{
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripcion de la tarera que desea crear'
        }
    })
    .command('actualizar',   'Actualziar un elemento por hacer',{
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripcion de la tarera que desea Actualziar'
        },
        completada:{
            default:true,
            alias:'c',
            desc:'Marca como completada o pendiente la tarea'
        }
    })
    .command('listar',   'Listar las tareas',{})
    .command('borrar',   'Borra las tareas',{
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripcion de la tarera que desea Borrar'
        },
    })
    .help()
    .argv;


module.exports={
    argv
}
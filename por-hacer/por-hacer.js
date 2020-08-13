const fs=require('fs');

let listadoPorHacer=[];

const guardarDB=()=>{

    let data=JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err){listadoPorHacer=require('../db/data.json');
           throw new Error('No se pudo grabar',err);
        }        listadoPorHacer=[];
    });
}

const cargarDB=()=>{
    try {
        listadoPorHacer=require('../db/data.json');
    } catch (error) {
        listadoPorHacer=[];
    }
}

const crear=(descripcion)=>{
    cargarDB();

    let porHacer={
        descripcion:descripcion,
        completada:false
    }

    listadoPorHacer.push(porHacer);

    guardarDB(listadoPorHacer);

    return porHacer;
}

const getListado=()=>{
    cargarDB();

    return listadoPorHacer;
}

const actualizar=(descripcion,completada=true)=>{
    cargarDB();
    let index=listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion=descripcion;
    });

    if(index>=0){
        listadoPorHacer[index].completada=completada;
        guardarDB();
        return true;
    }else{
        return false;
    }
    
}

const borrar=(descripcion)=>{
    cargarDB();
    console.log(descripcion);
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports={
    crear,getListado,actualizar,borrar
}
const cu = require ('./cursos');
const fs = require ('fs');

const opciones = {
    id_curso: {
        demand: true,
        alias: 'id'
    },
    nombre_interesado: {
        demand: true,
        alias: 'nombre'
    },
    numero_documento: {
        demand: true,
        alias: 'cedula'
    }
}

const argv = require('yargs')
            .command('','', opciones)
            .argv

console.log('Para inscribirse en el curso, debe ingresar los siguientes datos:');
console.log('-id, -nombre, --cedula o --id_curso, --nombre_interesado, numero_documento');

if(argv.id_curso != null && argv.nombre_interesado != null && argv.numero_documento != null){
    let ident = argv.id_curso;

    let curso = cu.cursos.find(dato =>  dato.id == ident);

    if(curso != undefined){
        const nombreArchivo = 'inscripcion_' + argv.numero_documento + '.txt';
        const texto = 'ID Curso: ' + curso.id + ' || ' + 'Nombre: ' + curso.nombre + ' || ' + 'Duración: ' + curso.duracion + ' || ' + 'Valor: ' + curso.valor + ' || ' + 'Nombre estudiante: ' + argv.nombre_interesado + ' || ' + 'Cédula:' + argv.numero_documento;
        fs.writeFile(nombreArchivo, texto, (err) => {
            if(err) throw (err);
            console.log('Se ha creado el archivo');
        })
    }else{
        console.log('El curso no existe');
    }
}else{
    console.log('Debe ingresar todos los datos requeridos');
}


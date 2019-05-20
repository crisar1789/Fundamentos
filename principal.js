const argv = require('yargs')
            .command('inscribir')
            .argv

//console.log(argv._[0]);
            
if(argv._[0] != 'inscribir'){
    const info = require ('./informacion_cursos');
}else{
    const inscribir = require ('./inscripcion');
}


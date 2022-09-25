const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!');
    
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!');

    return cb()
}

const copiar = cb => {
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))

    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!');
    
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)
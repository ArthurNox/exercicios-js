console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // mesma coisa que a superior
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}
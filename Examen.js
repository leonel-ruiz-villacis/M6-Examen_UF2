//Ejercicio 1 ,Aqui 2 soluciones 

function calculaPuntuacio(board) 
{
    const values = Object.values(board)
    let total = 0;

    values.forEach(score => {
        total += score
    })

    return total / (values.length)
}

function calculaPuntuacio(scoreBoard) {
    let total = 0;
    let numScores = 0;
    for (let score of Object.values(scoreBoard)) {
        total += score;
        numScores++;
    }
    return total / numScores;
}

//ejercicio 2

function sense(board, valor){
    return Object.fromEntries(
        Object.entries(board).filter(([key]) => key != valor)
    )
}

//ejercicio 3


function Matriu(widht, height) {
    this.widht = widht
    this.height = height

    this.matrix = Array(height).fill().map(() => Array(widht).fill(0))
}

Matriu.prototype.getHeight = function() {
    return this.height
}

Matriu.prototype.getWidth = function() {
    return this.widht
}

Matriu.prototype.print = function() {
    let output = ''

    this.matrix.forEach((element, i) => {
        output += element.join(' ') + ((i < element.length) ? '\n' : '')
    })

    console.log(output)
}

Matriu.prototype.fromArray = function(widht, height, values) {
    this.widht = widht
    this.height = height
    this.matrix = Array(height).fill().map(() => Array(widht).fill(0))

    this.matrix.forEach((element, i) => {
        element.forEach((value, j) => {
            this.matrix[i][j] = values[((i * widht) + j)]
        })
    })

    return this
}


//ejercicio 4
class MatriuBinaria extends Matriu
{
    fromArray(widht, height, values, condition) {
        this.widht = widht
        this.height = height
        this.matrix = Array(height).fill().map(() => Array(widht).fill(0))

        this.matrix.forEach((element, i) => {
            element.forEach((value, j) => {
                this.matrix[i][j] = condition(values[((i * widht) + j)]) ? 1 : 0
            })
        })

        return this
    }
}
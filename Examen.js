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


function Matrix(width, height) {
    this.width = width;
    this.height = height;
    this.matrix = new Array(height).fill(0).map(() => new Array(width).fill(0));
}

Matrix.prototype.getHeight = function() {
    return this.height;
}

Matrix.prototype.getWidth = function() {
    return this.width;
}

Matrix.prototype.print = function() {
    for (let i = 0; i < this.height; i++) {
        console.log(this.matrix[i].join(" "));
    }
}

Matrix.fromArray = function(width, height, list) {
    let matrix = new Matrix(width, height);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            matrix.matrix[i][j] = list[i * width + j];
        }
    }
    return matrix;
}


//ejercicio 4
//Function accepts a single kebab-cased string argument and returns the snake_cased version

function kebabToSnake(input){
    var snakeCase = input.replace("-", "_");
    return snakeCase;
}
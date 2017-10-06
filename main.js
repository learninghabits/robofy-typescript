let Controller = require('./controller');
let input = process.argv.slice(2)[0] || 'N4,E2,S2,W4';
let instructions = input.split(',').filter(element => {
    return element;
});
let controller = new Controller(instructions);
let uniqueSqaures = controller.uniqueSqauresVisited;
console.log(`no of unique squares = ${uniqueSqaures.length}`);
let totalSquares = controller.allSquaresVisited;
console.log(`total number of squares visited = ${totalSquares.length}`);
//# sourceMappingURL=main.js.map
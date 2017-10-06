module.exports = class Controller {
    constructor(instructions) {
        this.instructions = instructions;
    }
    getTurn(previousDirection, currentDirection) {
        if (previousDirection === currentDirection) {
            return 'straight';
        }
        switch (previousDirection) {
            case 'N':
                {
                    return currentDirection === 'W' ? 'left' : 'right';
                }
            case 'W':
                {
                    return currentDirection === 'S' ? 'left' : 'right';
                }
            case 'E':
                {
                    return currentDirection === 'N' ? 'left' : 'right';
                }
            case 'S':
                {
                    return currentDirection === 'E' ? 'left' : 'right';
                }
        }
    }
    getVisitedSquares() {
        let squares = [];
        var me = this;
        let processInstruction = function (instruction) {
            let parts = instruction.split("");
            let direction = parts[0];
            let steps = Number(parts[1]);
            for (let index = 0; index < steps; index++) {
                if (squares.length === 0) {
                    squares.push({
                        x: 0,
                        y: 0,
                        turn: 'straight',
                        direction: direction
                    });
                }
                else {
                    let previousSquare = squares[squares.length - 1];
                    let x = previousSquare.x;
                    let y = previousSquare.y;
                    let turn = me.getTurn(previousSquare.direction, direction);
                    switch (direction) {
                        case 'N':
                            {
                                y += 1;
                                break;
                            }
                        case 'W':
                            {
                                x += 1;
                                break;
                            }
                        case 'E':
                            {
                                x -= 1;
                                break;
                            }
                        case 'S':
                            {
                                y -= 1;
                                break;
                            }
                    }
                    squares.push({
                        x: x,
                        y: y,
                        turn: turn,
                        direction: direction
                    });
                }
            }
        };
        this.instructions.forEach(instruction => {
            processInstruction(instruction);
        });
        return squares;
    }
    get uniqueSqauresVisited() {
        let uniqueSqaures = [];
        this.allSquaresVisited.forEach(squares => {
            let i = uniqueSqaures.filter(ub => {
                return ub.x === squares.x && ub.y === squares.y;
            });
            if (i.length === 0) {
                uniqueSqaures.push(squares);
            }
        });
        return uniqueSqaures;
    }
    get allSquaresVisited() {
        return this._visitedSquares || (this._visitedSquares = this.getVisitedSquares());
    }
};
//# sourceMappingURL=controller.js.map
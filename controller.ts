interface ISquare
{
    x: number,
    y: number,
    turn: string,
    direction: string
}

module.exports = class Controller {   
    private _visitedSquares: ISquare[];
    constructor(private instructions: string[]) {       
    }

    getTurn(previousDirection: string, currentDirection: string) {

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
        let squares: ISquare[] = [];
        var me = this;
         let processInstruction: (instruction: string) => void
        = function (instruction) {
            let parts: string[] = instruction.split("");
            let direction: string = parts[0];
            let steps: number = Number(parts[1]);
            for (let index: number = 0; index < steps; index++) {
                if (squares.length === 0) {
                    squares.push({
                        x: 0,
                        y: 0,
                        turn: 'straight',
                        direction: direction
                    });
                }
                else {
                    let previousSquare: ISquare = squares[squares.length - 1];
                    let x: number = previousSquare.x;
                    let y: number = previousSquare.y;
                    let turn: string = me.getTurn(previousSquare.direction, direction);
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
        }

        this.instructions.forEach(instruction => {
            processInstruction(instruction);
        });
        return squares;
    }

    get uniqueSqauresVisited(): ISquare[] {
        let uniqueSqaures: ISquare[] = [];
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

    get allSquaresVisited():  ISquare[] {
        return this._visitedSquares || (this._visitedSquares = this.getVisitedSquares());
    }
}
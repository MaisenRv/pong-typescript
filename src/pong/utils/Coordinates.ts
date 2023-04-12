import { position } from "../interfaces/position.js";

export class Coordinates{
    private position:position;
    constructor(coordX:number,coordY:number,width:number,height:number){
        this.position = {
            x:coordX,
            y:coordY,
            w:width,
            h:height
        }
    }

    getPosition():position{
        return this.position;
    }

    updatePosition(position:position){
        this.position = position;
    }

    movePosiotionX(moveNumber:number){
        this.position.x += moveNumber;
    }
    movePositionY(moveNumber:number){
        this.position.y += moveNumber;
    }
}
import { Ball } from "../elements/Ball.js";
import { hitBox } from "../interfaces/hitBox.js";
import { position } from "../interfaces/position.js";
import { Collisions } from "../utils/Collisions.js";
import { Coordinates } from "../utils/Coordinates.js";

export class Player{
    protected position:Coordinates;
    protected collision:Collisions = new Collisions();

    readonly speedMove: number = 4;

    protected hitBox:hitBox;

    constructor(coordX:number,coordY:number,width:number,height:number){
        this.position = new Coordinates(coordX,coordY,width,height)
        this.hitBox = {
            top:false,
            bottom:false,
            left:false,
            right:false
        }
    }

    getPosition():Coordinates{
        return this.position;
    }

    positionMove(newPosition:position){
        this.position.updatePosition(newPosition);
    }

    draw(ctx:CanvasRenderingContext2D|null){
        ctx!.beginPath();
        ctx!.rect(this.position.getPosition().x,
            this.position.getPosition().y,
            this.position.getPosition().w,
            this.position.getPosition().h);
        ctx!.fillStyle = "white";
        ctx!.fill();
        ctx!.closePath();
    }
    
}
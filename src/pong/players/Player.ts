import { hitBox } from "../interfaces/hitBox.js";
import { position } from "../interfaces/position.js";
import { Collisions } from "../utils/Collisions.js";
import { Coordinates } from "../utils/Coordinates.js";

export class Player{
    protected position:Coordinates;
    protected collision:Collisions = new Collisions();

    readonly speedMove: number = 5;

    private hitBox:hitBox;

    constructor(coordX:number,coordY:number,width:number,height:number){
        this.position = new Coordinates(coordX,coordY,width,height)
        this.hitBox = {
            top:false,
            bottom:false,
            left:false,
            right:false
        }
    }

    protected collisions(canvas:HTMLCanvasElement){
        this.hitBox = this.collision.calculateCollision(canvas,this.position);

        if (this.hitBox.top) {
            this.position.updatePosition({
                x:this.position.getPosition().x,
                y:1,
                w:this.position.getPosition().w,
                h:this.position.getPosition().h
            })
        }

        if (this.hitBox.bottom) {
            this.position.updatePosition({
                x:this.position.getPosition().x,
                y:canvas.height - this.position.getPosition().h,
                w:this.position.getPosition().w,
                h:this.position.getPosition().h
            })
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
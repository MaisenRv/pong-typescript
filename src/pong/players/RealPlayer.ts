import { GameElement } from "../abstractClass/abstractGameElement.js";
import { Controls } from "../utils/Controls.js";
import { Player } from "./Player.js";

export class RealPlayer extends Player implements GameElement{
    private controls:Controls = new Controls();

    constructor(coordX:number,coordY:number,width:number,height:number) {
        super(coordX,coordY,width,height);
    }

    private startConstrols(){
        if (this.controls.up) {
            this.position.movePositionY(-this.speedMove);
        }
        if (this.controls.down) {
            this.position.movePositionY(this.speedMove);
        }
        
    }

    private collisions(canvas:HTMLCanvasElement):void{
        if (this.position.getPosition().y < 20) {
            this.hitBox = this.collision.calculateCollision(canvas,this.position);
            if (this.hitBox.top) {
                this.position.updatePosition({
                    x:this.position.getPosition().x,
                    y:1,
                    w:this.position.getPosition().w,
                    h:this.position.getPosition().h
                })
            }
            return
        }
        if (this.position.getPosition().y + this.position.getPosition().h > canvas.height - 20) {
            this.hitBox = this.collision.calculateCollision(canvas,this.position);
            if (this.hitBox.bottom) {
                this.position.updatePosition({
                    x:this.position.getPosition().x,
                    y:canvas.height - this.position.getPosition().h,
                    w:this.position.getPosition().w,
                    h:this.position.getPosition().h
                })
            }
            return
        }

    }

    update(ctx:CanvasRenderingContext2D|null,canvas:HTMLCanvasElement):void{
        this.draw(ctx);
        this.collisions(canvas);
        this.startConstrols();
    }
}
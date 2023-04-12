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


    update(ctx:CanvasRenderingContext2D|null,canvas:HTMLCanvasElement):void{
        this.draw(ctx);
        this.collisions(canvas);
        this.startConstrols();
    }
}
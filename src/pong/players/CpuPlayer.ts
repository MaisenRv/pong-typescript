import { GameElement } from "../abstractClass/abstractGameElement.js";
import { Player } from "./Player.js";

export class CpuPlayer extends Player implements GameElement{

    constructor(coordX:number,coordY:number,width:number,height:number) {
        super(coordX,coordY,width,height);
    }
    update(ctx:CanvasRenderingContext2D|null):void{
        this.draw(ctx);
    }

    playerIA(){
        
    }
}
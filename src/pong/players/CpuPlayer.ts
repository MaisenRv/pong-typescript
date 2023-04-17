import { GameElement } from "../abstractClass/abstractGameElement.js";
import { Coordinates } from "../utils/Coordinates.js";
import { Player } from "./Player.js";

export class CpuPlayer extends Player implements GameElement{

    constructor(coordX:number,coordY:number,width:number,height:number) {
        super(coordX,coordY,width,height);
    }
    update(ctx:CanvasRenderingContext2D|null,positionBall:Coordinates, ballDirectioX:number):void{
        if (ballDirectioX > 0) {
            this.playerIA(positionBall, 2);
        }else{
            this.playerIA(positionBall, this.speedMove);
        }
        this.draw(ctx);
    }

    private playerIA(positionBall:Coordinates, speedPlayer:number):void{
        if (this.position.getPosition().y > positionBall.getPosition().y) {
            this.positionMove({
                x:this.position.getPosition().x,
                y:this.position.getPosition().y - speedPlayer,
                h:this.position.getPosition().h,
                w:this.position.getPosition().w
            })
            return
        }

        if (this.position.getPosition().y + this.position.getPosition().h  < positionBall.getPosition().y + positionBall.getPosition().h){
            this.positionMove({
                x:this.position.getPosition().x,
                y:this.position.getPosition().y + speedPlayer,
                h:this.position.getPosition().h,
                w:this.position.getPosition().w
            })
            return
        }

    }
}
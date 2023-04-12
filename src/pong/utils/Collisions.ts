import { hitBox } from "../interfaces/hitBox.js";
import { position } from "../interfaces/position.js";
import { Coordinates } from "./Coordinates.js";

export class Collisions {
    private hitBox: hitBox;
    constructor() {
        this.hitBox = {
            top: false,
            bottom: false,
            left: false,
            right: false
        }
    }

    calculateCollision(canvas: HTMLCanvasElement, position: Coordinates): hitBox {

        if (position.getPosition().y < 1) {
            this.hitBox.top = true;
        } else {
            this.hitBox.top = false;
        }

        if (position.getPosition().y + position.getPosition().h > canvas.height - 1) {
            this.hitBox.bottom = true;
        } else {
            this.hitBox.bottom = false;
        }
        return this.hitBox;        
    }
    
    calculateCollisionBall(positionBall: Coordinates,positionPlayer: Coordinates):hitBox{
        
        if(positionBall.getPosition().x  + positionBall.getPosition().w > positionPlayer.getPosition().x &&
            positionBall.getPosition().x < positionPlayer.getPosition().x + positionPlayer.getPosition().w &&
            positionBall.getPosition().y + positionBall.getPosition().h > positionPlayer.getPosition().y &&
            positionBall.getPosition().y < positionPlayer.getPosition().y + positionPlayer.getPosition().h){

                if (positionBall.getPosition().x  + positionBall.getPosition().w > positionPlayer.getPosition().x) {
                    this.hitBox.right = true;
                }
                if (positionBall.getPosition().x < positionPlayer.getPosition().x + positionPlayer.getPosition().w) {
                    this.hitBox.left = true;
                }
                return this.hitBox;
        }else{
            this.hitBox.right = false;
            this.hitBox.left = false;
        }

        return this.hitBox;
    }
}

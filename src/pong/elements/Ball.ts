import { GameElement } from "../abstractClass/abstractGameElement.js";
import { hitBox } from "../interfaces/hitBox.js";
import { position } from "../interfaces/position.js";
import { Collisions } from "../utils/Collisions.js";
import { Coordinates } from "../utils/Coordinates.js";

export class Ball implements GameElement{
    private collision:Collisions = new Collisions();
    private position:Coordinates;

    private directionX:number = 0;
    private directionY:number = 1;

    constructor(coordX:number,coordY:number,width:number,height:number) {
        this.position = new Coordinates(coordX,coordY,width,height)
    }

    draw(ctx: CanvasRenderingContext2D | null): void {
        ctx!.beginPath();
        ctx!.rect(this.position.getPosition().x,
            this.position.getPosition().y,
            this.position.getPosition().w,
            this.position.getPosition().h);
        ctx!.fillStyle = "white";
        ctx!.fill();
        ctx!.closePath();
    }

    collitions(playersPositions:Coordinates[],canvas:HTMLCanvasElement){
        
        // Calculando colisiones en el eje Y
        // Optimizando calculos de colisiones eje Y 
        if (this.position.getPosition().y < 100 && this.directionY < 0) {
            const hitBoxBall:hitBox = this.collision.calculateCollision(canvas,this.position)
            if (hitBoxBall.top) {
                this.directionY = -this.directionY;
            }
        }
        if (this.position.getPosition().y + this.position.getPosition().h > canvas.height - 100 && this.directionY > 0) {
            const hitBoxBall:hitBox = this.collision.calculateCollision(canvas,this.position)
            if (hitBoxBall.bottom) {
                this.directionY = -this.directionY;
            }
        }

        // Calculando colisiones en el eje X
        // Optimizando calculos de colisiones eje X 
        if (this.position.getPosition().x + this.position.getPosition().w > canvas.width - 100 && this.directionX > 0) {
            const collisionWithPlayer:hitBox = this.collision.calculateCollisionBall(this.position,playersPositions[0]);
            if (collisionWithPlayer.right) {
                this.directionX = -this.directionX;
            }
        }
        if(this.position.getPosition().x < 100 && this.directionX < 0){
            const collisionWithPlayer:hitBox =this.collision.calculateCollisionBall(this.position,playersPositions[1]);
            if (collisionWithPlayer.left) {
                this.directionX = -this.directionX;   
            }
        }

        // Actualizando posicion
        this.position.updatePosition({
            x:this.position.getPosition().x + this.directionX,
            y:this.position.getPosition().y + this.directionY,
            w:this.position.getPosition().w,
            h:this.position.getPosition().h
        })
    }

    update(ctx: CanvasRenderingContext2D | null,canvas:HTMLCanvasElement,playersPositions:Coordinates[]): void {
        this.collitions(playersPositions,canvas);
        this.draw(ctx);
        
    }
    positionMove(position:position){
        this.position.updatePosition(position)
    }

    getPosition():Coordinates{
        return this.position;
    }
    
    getDirectionX():number{
        return this.directionX;
    }
}
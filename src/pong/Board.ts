import { CpuPlayer } from "./players/CpuPlayer.js";
import { RealPlayer } from "./players/RealPlayer.js";
import { Ball } from "./elements/Ball.js";
import { position } from "./interfaces/position.js";

export class Board {
    private playerOne:RealPlayer;
    private playerTwo:CpuPlayer;
    private ball:Ball;
    private canvas:HTMLCanvasElement
    private ctx:CanvasRenderingContext2D | null;

    constructor(canvas:HTMLCanvasElement) {

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")
        
        this.ball = new Ball(
            (this.canvas.width / 2) - (10 / 2),
            (this.canvas.height / 2) - (10 / 2),
            10,10);

        this.playerOne = new RealPlayer(
            this.canvas.width - 20,
            (this.canvas.height/2) - 25,
            10,60);

        this.playerTwo = new CpuPlayer(10,
            (this.canvas.height/2) - 25,
            10,60);
        
    }

    draw(){
       
    }

    update(){
        this.clearBoard()
        this.playerOne.update(this.ctx,this.canvas)
        this.playerTwo.update(this.ctx)
        this.ball.update(this.ctx,this.canvas,[this.playerOne.getPosition(),this.playerTwo.getPosition()])
    }

    private clearBoard(){
        this.ctx!.clearRect(0,0,this.canvas.width,this.canvas.height)
    }

    resizeBoard(){
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;

        const newPositionPlayerOne:position ={
            x:this.canvas.width - 20,
            y:(this.canvas.height/2) - 25,
            w:10,
            h:60
        }
        this.playerOne.positionMove(newPositionPlayerOne);

        const newPositionPlayerTwo:position = {
            x:10,
            y:(this.canvas.height/2) - 25,
            w:10,
            h:60
        }
        this.playerTwo.positionMove(newPositionPlayerTwo);

        const newPositionBall:position = {
            x:(this.canvas.width / 2) - (10 / 2),
            y:(this.canvas.height / 2) - (10 / 2),
            w:10,
            h:10 
        }
        this.ball.positionMove(newPositionBall);
    }
}
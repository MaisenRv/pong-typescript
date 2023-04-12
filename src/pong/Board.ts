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

    private scorePlayerLeft:number = 0;
    private scorePlayerRight:number = 0;

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
        let centerX:number = (this.canvas.width / 2)
        this.drawDotLine(this.ctx,centerX);
        this.drawScoreBoard(this.ctx,centerX);  
    }

    update(){
        this.clearBoard()
        this.playerOne.update(this.ctx,this.canvas)
        this.playerTwo.update(this.ctx, this.ball.getPosition(), this.ball.getDirectionX());
        this.ball.update(this.ctx,this.canvas,[this.playerOne.getPosition(),this.playerTwo.getPosition()])
        this.draw();
    }

    private clearBoard(){
        this.ctx!.clearRect(0,0,this.canvas.width,this.canvas.height)
    }

    private drawDotLine(ctx:CanvasRenderingContext2D|null, centerX:number){
        let line:number = (this.canvas.height / 20)
        for (let i = 0; i < 20 ; i++) {
            ctx!.strokeStyle = "white"
            ctx!.moveTo(centerX, ((line * i) + 5))
            ctx!.lineTo(centerX, (line * (i + 1)) - 5)
            ctx!.stroke()   
        }
    }

    private drawScoreBoard(ctx:CanvasRenderingContext2D|null,centerX:number){
        
        let textScorePlayerLeft:number = centerX - (50 / 2) - (50 * 2)  
        let textScorePlayerRight:number = centerX - (50 / 2) + (50 * 2)

        ctx!.font = 50 + "pt consolas"
        ctx!.fillStyle = "white"
        ctx!.fillText(this.scorePlayerLeft.toString() ,textScorePlayerLeft,100)
        ctx!.fillText(this.scorePlayerRight.toString(),textScorePlayerRight,100)
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
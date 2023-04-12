import { Board } from "./pong/Board.js";

const canvas = document.getElementById("pong-board") as HTMLCanvasElement;
canvas.width = innerWidth;
canvas.height = innerHeight;
const pong = new Board(canvas);


function animate() {
    pong.update()
    requestAnimationFrame(animate);
}

animate()

window.addEventListener("resize",()=>{
    pong.resizeBoard()
})
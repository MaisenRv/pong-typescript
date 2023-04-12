export class Controls {
    up:boolean;
    down:boolean;
    constructor() {
        this.up = false;
        this.down = false;
        
        this.events();
    }

    private events(){

        document.onkeydown = e =>{
            switch (e.key){
                case "ArrowUp":this.up = true;
                    break;
                case "ArrowDown":this.down = true;
                    break;
            }
            
        }

        document.onkeyup = e =>{
            switch (e.key){
                case "ArrowUp":this.up = false;
                    break;
                case "ArrowDown":this.down = false;
                    break;
            }
        }
    }
}
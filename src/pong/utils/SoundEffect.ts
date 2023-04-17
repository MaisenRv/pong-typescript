export class SoundEffect{
    private audioContext:AudioContext;

    constructor(){
        this.audioContext = new AudioContext();
    }

    ring(){
        const osc = this.audioContext.createOscillator();
        osc.frequency.value = 600;
        osc.connect(this.audioContext.destination);
        osc.start(0);
        osc.stop(0.1);
    }
}
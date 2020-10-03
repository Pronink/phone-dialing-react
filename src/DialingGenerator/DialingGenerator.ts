import {PhoneNumber} from "../Interfaces/PhoneNumber";

export default abstract class DialingGenerator {
    protected context: AudioContext = new AudioContext();

    protected async pause(milliseconds: number) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), milliseconds);
        });
    }

    protected async reproduceBip() {
        let osc = this.context.createOscillator(); // instantiate an oscillator
        osc.type = 'triangle'; // this is the default - also square, sawtooth, triangle
        osc.frequency.value = 1; // Hz
        osc.connect(this.context.destination); // connect it to the destination
        osc.start(); // start the oscillator
        osc.stop(this.context.currentTime + 0.09); // stop 2 seconds after the current time
        return this.pause(105);
    }

    protected async reproduceMultiTone(tone1: number, tone2: number) {
        let osc1 = this.context.createOscillator(); // instantiate an oscillator
        let osc2 = this.context.createOscillator(); // instantiate an oscillator

        osc1.type = 'sine'; // this is the default - also square, sawtooth, triangle
        osc2.type = 'sine'; // this is the default - also square, sawtooth, triangle

        osc1.frequency.value = tone1; // Hz
        osc2.frequency.value = tone2; // Hz

        osc1.connect(this.context.destination); // connect it to the destination
        osc2.connect(this.context.destination); // connect it to the destination

        osc1.start(); // start the oscillator
        osc2.start(); // start the oscillator

        osc1.stop(this.context.currentTime + 0.5); // stop 2 seconds after the current time
        osc2.stop(this.context.currentTime + 0.5); // stop 2 seconds after the current time
        return this.pause(510);
    }

    public abstract async reproduceNumber(number: PhoneNumber): Promise<void>

    public abstract async reproduceNumberArray(fullNumber: PhoneNumber[] | string): Promise<void>
}

import DialingGenerator from "./DialingGenerator";
import {PhoneNumber} from "../Interfaces/PhoneNumber";

export default class PulseDialingGenerator extends DialingGenerator{

    public async reproduceNumber(number: PhoneNumber) {
        if (number === 0) {
            await this.reproduceMultiTone(941, 1336);
        } else if (number === 1) {
            await this.reproduceMultiTone(697, 1209);
        } else if (number === 2) {
            await this.reproduceMultiTone(697, 1336);
        } else if (number === 3) {
            await this.reproduceMultiTone(697, 1477);
        } else if (number === 4) {
            await this.reproduceMultiTone(770, 1209);
        } else if (number === 5) {
            await this.reproduceMultiTone(770, 1336);
        } else if (number === 6) {
            await this.reproduceMultiTone(770, 1477);
        } else if (number === 7) {
            await this.reproduceMultiTone(852, 1209);
        } else if (number === 8) {
            await this.reproduceMultiTone(852, 1336);
        } else if (number === 9) {
            await this.reproduceMultiTone(852, 1477);
        }
    }

    public async reproduceNumberArray(fullNumber: PhoneNumber[] | string) {
        await this.pause(250);
        if (typeof fullNumber === 'string') {
            fullNumber = fullNumber.split('').map(n => {
                if (n !== '#' && n !== '*')
                    return parseInt(n);
                else
                    return n;
            });
        }
        for (const number of fullNumber) {
            console.log(number)
            await this.reproduceNumber(number);
            await this.pause(100);
        }
    }
}

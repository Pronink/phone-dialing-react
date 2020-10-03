import DialingGenerator from "./DialingGenerator";
import {PhoneNumber} from "../Interfaces/PhoneNumber";

export default class PulseDialingGenerator extends DialingGenerator{

    public async reproduceNumber(number: PhoneNumber) {
        if (number !== '*' && number !== '#') {
            if (number === 0) {
                number = 10;
            }
            while (number > 0) {
                await this.reproduceBip();
                number--;
            }
        }
        return;
    }

    public async reproduceNumberArray(fullNumber: PhoneNumber[] | string) {
        await this.reproduceNumber(1);
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
            await this.pause(200);
        }
    }

}

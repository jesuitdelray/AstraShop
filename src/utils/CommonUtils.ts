import { v4 as uuidv4 } from 'uuid';

export class CommonUtils {
    static get getId(): string {
        return uuidv4();
    }
}
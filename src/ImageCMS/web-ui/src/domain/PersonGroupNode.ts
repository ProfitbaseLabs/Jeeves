import { PersonGroupPersonNode } from './PersonGroupPersonNode';

export class PersonGroupNode {
    toggled : boolean = false;
    children?: PersonGroupPersonNode[];

    constructor(public id: string, public name: string) {
        this.children = [];
    }
}
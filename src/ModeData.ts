import * as Decorations from  './Deco'
export interface BaseD {
    name: string;
    clase(presio:number):Decorations.Pizza;
    presio: number;
}
export interface Decoracion {
    name: string;
    clase(before: Decorations.Pizza,presio:number):Decorations.Pizza;
    presio: number;
}
export interface Partes {
    bases: BaseD[];
    decoraciones: Decoracion[];
}


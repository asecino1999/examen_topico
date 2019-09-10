
export abstract   class Pizza {
    abstract presio: number;

}
export  class Base extends Pizza {
    presio: number;
    constructor(presio: number) {
        super();
        this.presio = presio;
    }
    getPresio(): number {
        return (this.presio);
    }
}

export  class Queso extends Base {
    
}
export  class Vegana extends Base {
    
}

export  class Pina extends Base {
    
}

export abstract class Decoracion extends Pizza {
    abstract component: Pizza;
    getPresio(): number {
        return (this.presio);
    }
}

export class Anchoa extends Decoracion {
    component: Pizza;
    presio: number;
    constructor(before: Pizza, presio: number) {
        super();
        this.component = before;
        this.presio = presio;
    }
}
export class Peperoni extends Decoracion {
    component: Pizza;
    presio: number;
    constructor(before: Pizza, presio: number) {
        super();
        this.component = before;
        this.presio = presio;
    }
}
export class Jamon extends Decoracion {
    component: Pizza;
    presio: number;
    constructor(before: Pizza, presio: number) {
        super();
        this.component = before;
        this.presio = presio;
    }
}

export class Matriz {
    matriz:number[][];
    constructor(x:number, y:number ){
        this.matriz=[];
        for(var i: number = 0; i < x; i++) {
            this.matriz[i] = [];
            for(var j: number = 0; j< y; j++) {
                this.matriz[i][j] = i+j;
            }
        }
    }
    getElement(x:number,y:number):number{
        try {
            return this.matriz[x][y];    
        } catch (error) {
            return -Infinity;
        }
        
    }
    setElement(x:number,y:number,value:number):number{
        try {
            this.matriz[x][y]=value;
            return value;
        } catch (error) {
            return -Infinity;
        }
    }
}






export class  Vector {
    vector:Array<number>;
    constructor(y:number){
        this.vector=[];
        for(var j: number = 0; j< y; j++) {
            this.vector[j] = j;
        }
    }
    getElement(y:number):number{
        try {
            return this.vector[y];    
        } catch (error) {
            return -Infinity;
        }
        
    }
    setElement(y:number,value:number):number{
        try {
            this.vector[y]=value;
            return value;
        } catch (error) {
            return -Infinity;
        }
    }
    length():number{
        return this.vector.length;
    }
}
abstract class AbstractAdapter{
    abstract filas:number;
    abstract columnas:number;
    abstract getElement(x:number,y:number):number;
    abstract setElement(x:number,y:number,value:number):number;

}
export class Adapter extends AbstractAdapter{
    vector:Vector;
    filas:number;
    columnas:number;
    constructor(filas:number,columnas:number,vector?:Vector){
        super();
        if(typeof(vector)!=="undefined")
            this.vector=vector;
        else
            this.vector=new Vector(filas*columnas);
        
        this.filas=filas;
        this.columnas=columnas;

        if(filas*columnas>this.vector.length()){
            console.log("error logitud ");
            this.filas=this.vector.length();
            this.columnas=1;
        }
    }
    
    getElement(x:number,y:number):number{
        if(this.columnas>y && this.filas>x  ){
            return this.vector.getElement(x*this.columnas+y);
        } else {
            console.log("error de posicoin");
            return -Infinity;
        }
    };
    setElement(x:number,y:number,value:number):number{
        if(this.columnas>y && this.filas>x  ){
            return this.vector.setElement(x*this.columnas+y,value);
        } else {
            console.log("error de posicoin");
            return -Infinity;
        }
    };
}



//console.log((new Matriz(5,5)).getElement(6,6));
//console.log((new Matriz(5,5)).setElement(4,4,7));
//var adapter:Adapter=new Adapter(3,4,new Vector(12));
//console.log(adapter.setElement(3,2,80));
//console.log(adapter.vector);
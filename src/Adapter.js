"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Matriz = /** @class */ (function () {
    function Matriz(x, y) {
        this.matriz = [];
        for (var i = 0; i < x; i++) {
            this.matriz[i] = [];
            for (var j = 0; j < y; j++) {
                this.matriz[i][j] = i + j;
            }
        }
    }
    Matriz.prototype.getElement = function (x, y) {
        try {
            return this.matriz[x][y];
        }
        catch (error) {
            return -Infinity;
        }
    };
    Matriz.prototype.setElement = function (x, y, value) {
        try {
            this.matriz[x][y] = value;
            return value;
        }
        catch (error) {
            return -Infinity;
        }
    };
    return Matriz;
}());
exports.Matriz = Matriz;
var Vector = /** @class */ (function () {
    function Vector(y) {
        this.vector = [];
        for (var j = 0; j < y; j++) {
            this.vector[j] = j;
        }
    }
    Vector.prototype.getElement = function (y) {
        try {
            return this.vector[y];
        }
        catch (error) {
            return -Infinity;
        }
    };
    Vector.prototype.setElement = function (y, value) {
        try {
            this.vector[y] = value;
            return value;
        }
        catch (error) {
            return -Infinity;
        }
    };
    Vector.prototype.length = function () {
        return this.vector.length;
    };
    return Vector;
}());
exports.Vector = Vector;
var AbstractAdapter = /** @class */ (function () {
    function AbstractAdapter() {
    }
    return AbstractAdapter;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(filas, columnas, vector) {
        var _this = _super.call(this) || this;
        if (typeof (vector) !== "undefined")
            _this.vector = vector;
        else
            _this.vector = new Vector(filas * columnas);
        _this.filas = filas;
        _this.columnas = columnas;
        if (filas * columnas > _this.vector.length()) {
            console.log("error logitud ");
            _this.filas = _this.vector.length();
            _this.columnas = 1;
        }
        return _this;
    }
    Adapter.prototype.getElement = function (x, y) {
        if (this.columnas > y && this.filas > x) {
            return this.vector.getElement(x * this.columnas + y);
        }
        else {
            console.log("error de posicoin");
            return -Infinity;
        }
    };
    ;
    Adapter.prototype.setElement = function (x, y, value) {
        if (this.columnas > y && this.filas > x) {
            return this.vector.setElement(x * this.columnas + y, value);
        }
        else {
            console.log("error de posicoin");
            return -Infinity;
        }
    };
    ;
    return Adapter;
}(AbstractAdapter));
exports.Adapter = Adapter;
//console.log((new Matriz(5,5)).getElement(6,6));
//console.log((new Matriz(5,5)).setElement(4,4,7));
//var adapter:Adapter=new Adapter(3,4,new Vector(12));
//console.log(adapter.setElement(3,2,80));
//console.log(adapter.vector);

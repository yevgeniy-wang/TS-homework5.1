abstract class Figure {
  protected abstract _name: string;
  protected abstract _color: string;

  public abstract get name(): string;
  public abstract get color(): string;

  public abstract calculateArea(): number;
}

abstract class FigureWithPrint extends Figure {
  public abstract print(): string;
}

abstract class AbstractSquare extends FigureWithPrint {
  protected abstract _a: number; // сторона квадрата

  public abstract get a(): number;
}

abstract class AbstractRectangle extends FigureWithPrint {
  protected abstract _a: number; // сторона пр-ка
  protected abstract _b: number; // сторона пр-ка

  public abstract get a(): number;
  public abstract get b(): number;
}

abstract class AbstractCircle extends Figure {
  protected abstract _radius: number;

  public abstract get radius(): number;
}

abstract class AbstractTriangle extends Figure {
  protected abstract _a: number; //основание
  protected abstract _h: number; //высота

  public abstract get a(): number;
  public abstract get h(): number;
}

class Circle extends AbstractCircle implements AbstractCircle {
  public constructor (
    protected _name: string,
    protected _color: string,
    protected _radius: number,
  ) { super() }
      
  public get name(): string {
    return this._name
  }
  public get color(): string {
    return this._color
  }
  public get radius(): number {
    return this._radius
  }
  
  public calculateArea(): number {
    return (this._radius ** 2) * 3.14;
  }
}

class Triangle extends AbstractTriangle implements AbstractTriangle {
  public constructor (
    protected _name: string,
    protected _color: string,
    protected _a: number,
    protected _h: number,
  ) { super() }
      
  public get name(): string {
    return this._name
  }
  public get color(): string {
    return this._color
  }
  public get a(): number {
    return this._a
  }
  public get h(): number {
    return this._h
  }
  
  public calculateArea(): number {
    return (this._a * this._h) / 2;
  }
}

class Square extends AbstractSquare implements AbstractSquare {
  public constructor (
    protected _name: string,
    protected _color: string,
    protected _a: number,
  ) { super() }
      
  public get name(): string {
    return this._name
  }
  public get color(): string {
    return this._color
  }
  public get a(): number {
    return this._a
  }
  
  public calculateArea(): number {
    return this._a ** 2;
  }

  public print(): string {
    return 'a ^ 2';
  }
}

class Rectangle extends AbstractRectangle  implements AbstractRectangle {
  public constructor (
    protected _name: string,
    protected _color: string,
    protected _a: number,
    protected _b: number,
  ) { super() }
      
  public get name(): string {
    return this._name
  }
  public get color(): string {
    return this._color
  }
  public get a(): number {
    return this._a
  }
  public get b(): number {
    return this._b
  }
  
  public calculateArea(): number {
    return this._a * this._b;
  }

  public print(): string {
    return 'a ^ b';
  }
}
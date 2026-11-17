export class Accommodation {
  _name : string;
  _cost : number;

  constructor(aName : string, aCost : number){
    this._name = aName;
    this._cost = aCost;
  }

  get name() : string{
    return this._name;
  }

  set name(aName: string){
    const nameNew = aName.trim();

    if(nameNew === ""){
      throw new Error("El nombre es obligatorio");
    }
    this._name = aName;
  }

  get cost() : number {
    return this._cost;
  }

  set cost(aCost: number){
    if(isFinite(aCost) && aCost >= 0){
      this._cost = aCost;
    }
    else {
      throw new Error("El costo debe ser un numero mayor o igual a 0");
    }
  }

}
export default Accommodation;
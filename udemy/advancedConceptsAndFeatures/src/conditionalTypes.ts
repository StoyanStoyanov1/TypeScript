interface AnimalT {
    live: () => void;
  }
  
  interface DogT extends AnimalT {
    woof: () => void;
  }
  
  type Example = Dog extends Animal ? string : number;
  
  // SomeType extends OtherType ? TrueType : FalseType;
  type isString<T> = T extends string ? true : false;
  
  type A = isString<string>;
  type B = isString<number>;
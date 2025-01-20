interface Person {
    name: string;
    age: number;
    address: string;
  }
  
  type NameAndAge = Pick<Person, "name" | "age">;
  
  const person: NameAndAge = {
    name: "John",
    age: 32,
  };
  
  person.name = "Else";
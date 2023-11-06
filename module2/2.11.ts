{
  // 2-11 Utility types

  // Pick Utility type
  type Person = {
    name: string;
    age: number;
    email?: string;
    mobile: number;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  // Omit Utility type
  type contactInfo = Omit<Person, "name" | "age">;

  // Required Utility type
  type PersonRequired = Required<Person>;

  // Partial Utility type
  type PersonPartial = Partial<Person>;

  // ReadOnly Utility type
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Arif",
    age: 200,
    mobile: 1928370918,
  };
  //   person1.name = "MD"

  // ReadOnly Utility type
  type OBJ = Record<string, string>;

  const newObj: OBJ = {
    a1: "aa",
    b1: "bb",
    c1: "cc",
    d1: "dd",
  };
  // Defining object with Record utility which has key type assigned but value types unknown
  const emptyObj: Record<string, unknown> = {};

  // End of code and scope
}

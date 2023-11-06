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
  const person1: Person = {
    name: "Arif",
    age: 200,
    mobile: 1928370918,
  };

  // End of code and scope
}

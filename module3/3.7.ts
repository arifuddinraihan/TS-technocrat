{
  // OOP --> Static Method

  class Counter {
    // if I use [STATIC], I must call the property with Its Class name
    static count: number = 0;

    // increment() {
    //   return (Counter.count = Counter.count + 1);
    // }
    // decrement() {
    //   return (Counter.count = Counter.count - 1);
    // }

    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const instance1 = new Counter();
  //   console.log(instance1.increment());

  console.log(Counter.increment());

  //   const instance2 = new Counter();
  //   console.log(instance2.increment());

  console.log(Counter.increment());

  //   const instance3 = new Counter();
  //   console.log(instance3.increment());

  console.log(Counter.increment());

  // End of code and scope
}

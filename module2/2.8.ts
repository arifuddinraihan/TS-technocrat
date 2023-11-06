{
  // Promise Asynchronous

  // Simulate
  //   const createPromise = () => {
  //     return new Promise((resolve, reject) => {
  //       const data: string = "something";
  //       if (data) {
  //         resolve(data);
  //       } else {
  //         reject("failed to load data");
  //       }
  //     });
  //   };

  //   // Calling Created Promise Function

  //   const showData = async () => {
  //     const data = await createPromise();
  //     console.log(data);
  //   };

  //   showData()

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // Calling Created Promise Function

  const showData = async (): Promise<string> => {
    const data = await createPromise();
    return data;
  };

  //   showData();

  // Calling data from Latest Node server
  // Using JSON placeholder

  interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const getToDo = async (): Promise<ToDo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return data;
  };

  getToDo()
    .then((data: ToDo) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  // End of code and scope
}

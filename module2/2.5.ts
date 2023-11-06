{
    // 2-5 Functions with Generic

    const createArray = (param: string): string[] => {
        return [param];

    }

    const res1 = createArray("Bangla")

    // Generic Function
    // Creating Array using Dynamic Generic Function
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const resGenericBoolean = createArrayWithGeneric<boolean>(true)
    // console.log(resGenericBoolean)
    const resGenericString = createArrayWithGeneric<String>("Math")
    // console.log(resGenericString)

    interface ArrayObject {
        name: string;
        age: number;
        isMarried: boolean;
    }
    const resGenericObject = createArrayWithGeneric<ArrayObject>({
        name: "Arif",
        age: 29,
        isMarried: true,
    })
    // console.log(resGenericObject)

    // Creating Tuple using Dynamic Generic Function
    const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }

    const resGenericBoolean10 = createTupleWithGeneric<string, boolean>("Arif", true)
    // console.log(resGenericBoolean10)
    const resGenericString10 = createTupleWithGeneric<String, { name: string }>("Math", { name: "Algebra" })
    // console.log(resGenericString10)

    // Generic Function
    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development"

        return {
            ...student,
            course
        }
    };

    interface Student {
        name: string;
        email: string;
        devType: string;
        hasWatch?: boolean;
    }
    const student1 = addCourseToStudent<Student>({
        name: "Arif",
        email: 'a@gmail.com',
        devType: "NLWD",
    })

    const student2 = addCourseToStudent<Student>({
        name: "Arif",
        email: 'a@gmail.com',
        devType: "NLWD",
        hasWatch: true
    })

    // console.log(student1)
    // console.log(student2)

    // End of code and scope
}
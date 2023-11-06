{
    // Constraints in TS
    interface StudentMustHave {
        id: number;
        name: string;
        email: string;
    }
    // Constraints is must checking the properties inside from <T> types
    const addCourseToStudent = <T extends StudentMustHave>(student: T) => {
        const course = "Next Level Web Development"

        return {
            ...student,
            course
        }
    };

    interface Student {
        id: number;
        name: string;
        email: string;
        devType: string;
        hasWatch?: boolean;
    }
    const student1 = addCourseToStudent<Student>({
        id: 222,
        name: "Arif",
        email: 'a@gmail.com',
        devType: "NLWD",
    })

    const student2 = addCourseToStudent<Student>({
        id: 240,
        name: "Arif",
        email: 'a@gmail.com',
        devType: "NLWD",
        hasWatch: true
    })

    const student3 = addCourseToStudent<Student>({
        id: 999,
        name: "Murad",
        email: 'murad@gmail.com',
        devType: "NLWD",
        hasWatch: false
    })

    // console.log(student1)
    // console.log(student2)
    // console.log(student3)

    // End of code and scope
}
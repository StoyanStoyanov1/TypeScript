function SoftUniStudents (input: string[]) : string {
    const courses: SoftUni[] = [];
    const result: string[] = [];

    class SoftUni {
        name: string;
        capacity: number;
        students: Student[]

        constructor (name: string, capacity: number) {
            this.name = name;
            this.capacity = capacity;
            this.students = [];
        };

        addCapacity(capacity: number): void {
            this.capacity += capacity;
        }
        
        addNewStudent(student: Student): boolean {
            if (this.capacity > 0) {
                this.students.push(student);
                this.capacity -= 1;
                return true;
            }
            return false;
        }

        sortedStudentsByCredits(): void {
            this.students.sort((a, b) => b.credits - a.credits);
        }

    };

    class Student {
        username: string;
        credits: number;
        email: string;

        constructor (username: string, credits: number, email: string) {
            this.username = username;
            this.credits = credits;
            this.email = email;
        }
    };

    for (const info of input) {
        if (info.includes(': ')) {
            const [courseName, capacity] = info.split(': ');
            const foundCourse = courses.find(course => course.name === courseName);

            if (!foundCourse) {
                const newCourse: SoftUni = new SoftUni(courseName, Number(capacity));
                courses.push(newCourse);
            } else {
                foundCourse.addCapacity(Number(capacity));
            }

        } else {
            const user = info.substring(0, info.indexOf('['));
            const credits = info.substring(info.indexOf('[') + 1, info.indexOf(']'));
            const email = info.substring(info.indexOf('email ') + 6, info.indexOf(' join'));
            const courseName = info.substring(info.indexOf('joins ') + 6);

            const foundCourse = courses.find(course => course.name === courseName);

            if (foundCourse) {
                const newStudent = new Student(user, Number(credits), email);
                foundCourse.addNewStudent(newStudent);
            }
        }
    };

    courses.sort((a, b) => b.students.length - a.students.length);

    for (const course of courses) {
        result.push(`${course.name}: ${course.capacity} places left`);
        course.sortedStudentsByCredits();

        course.students.forEach(student => {
                result.push(`--- ${student.credits}: ${student.username}, ${student.email}`);
            });
    }

    return result.join('\n');
}

console.log(SoftUniStudents(['ads dsada sdsadsadas das', ' saddas das da das ']))
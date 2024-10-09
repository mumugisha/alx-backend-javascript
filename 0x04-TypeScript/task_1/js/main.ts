interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: string | number | boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunc {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunc = (firstName: string, lastName: string): string => 
  `${firstName.charAt(0)}.${lastName}`;

interface ClassWork {
  printHomework(): string;
  displayName(): string;
}

class StudentClass implements ClassWork {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  printHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

interface StudentEngineer {
  (firstName: string, lastName: string): ClassWork;
}

// Test instance of StudentClass
const student = new StudentClass("Emeria", "Emeria");
console.log(student.displayName());
console.log(student.printHomework());

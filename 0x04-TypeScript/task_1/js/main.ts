interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
  
    [key: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Example usage:
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  const director1: Directors = {
    firstName: 'Alice',
    fullTimeEmployee: true,
    lastName: 'Johnson',
    location: 'New York',
    yearsOfExperience: 10,
    numberOfReports: 5,
  };

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName.charAt(0).toUpperCase();

    return `${firstLetter}. ${lastName}`;
  }
  

  // 4. Writing a class
  interface StudentConstructorArgs {
    firstName: string;
    lastName: string;
  }

  interface StudentClassInterface {
    new (args: StudentConstructorArgs): StudentClass; 
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(args: StudentConstructorArgs) {
      this.firstName = args.firstName;
      this.lastName = args.lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }

  
  console.log(teacher3);
  console.log(director1);
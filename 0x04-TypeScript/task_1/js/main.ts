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

  
  console.log(teacher3);
  console.log(director1);
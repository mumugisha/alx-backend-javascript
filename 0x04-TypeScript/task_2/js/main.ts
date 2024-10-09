export interface DirectorInterface {
  workingFromHome(): string;
  gettingCoffeeBreak(): string;
  workingDirectorTasks(): string;
}

export interface TeacherInterface {
  workingFromHome(): string;
  gettingCoffeeBreak(): string;
  workingTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workingFromHome(): string {
    return 'Working from home';
  }

  gettingCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workingDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workingFromHome(): string {
    return 'Working from home';
  }

  gettingCoffeeBreak(): string {
    return 'I want to have a break';
  }

  workingTeacherTasks(): string {
    return 'Getting to work from home';
  }
}

export function createEmployee(salary: number): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workingDirectorTasks();
  }
  return employee.workingTeacherTasks();
}

export type Subjects = 'Math' | 'History';

export function teachClass(Classtoday: Subjects): string {
  if (Classtoday === 'Math') {
    return 'Teaching Math';
  } else if (Classtoday === 'History') {
    return 'Teaching History';
  }
  return 'Subject not found';
}

import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}
  private students = new BehaviorSubject<Student[]>([
    {
      id: 1,
      age: 33,
      email: 'test@test.com',
      gender: 'male',
      name: 'Ahmed',
      dateOfBirth: new Date(),
    },
    {
      id: 2,
      age: 33,
      email: 'test@test.com',
      gender: 'male',
      name: 'Ali',
      dateOfBirth: new Date(),
    },
    {
      id: 3,
      age: 33,
      email: 'test@test.com',
      gender: 'male',
      name: 'Micheal',
      dateOfBirth: new Date(),
    },
  ]);
  students$ = this.students.asObservable();
  addStudent(student: Student) {
    student.id = this.students.value.length
      ? this.students.getValue().length + 1
      : 1;
    const currentStudents = this.students.value;
    debugger;
    this.students.next([...currentStudents, student]);
  }

  updateStudent(updatedStudent: Student) {
    const currentStudents = this.students.value.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    this.students.next(currentStudents);
  }

  deleteStudents(ids: number[]) {
    const currentStudents = this.students.value.filter(
      (student) => !ids.includes(student.id)
    );
    this.students.next(currentStudents);
  }
}

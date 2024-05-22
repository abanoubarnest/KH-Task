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
      id: Math.floor(Math.random() * 100),
      age: 30,
      email: 'ahmed@test.com',
      gender: 'male',
      name: 'Ahmed',
      dateOfBirth: new Date(),
    },
    {
      id: Math.floor(Math.random() * 100),
      age: 31,
      email: 'ali@test.com',
      gender: 'male',
      name: 'Ali',
      dateOfBirth: new Date(),
    },
    {
      id: Math.floor(Math.random() * 100),
      age: 32,
      email: 'micheal@test.com',
      gender: 'male',
      name: 'Micheal',
      dateOfBirth: new Date(),
    },
    {
      id: Math.floor(Math.random() * 100),
      age: 24,
      email: 'mja@mja.com',
      gender: 'female',
      name: 'Mja',
      dateOfBirth: new Date(),
    },
  ]);
  students$ = this.students.asObservable();
  addStudent(student: Student): void {
    student.id = Math.floor(Math.random() * 100);
    const currentStudents = this.students.value;
    this.students.next([...currentStudents, student]);
  }

  updateStudent(updatedStudent: Student): void {
    const currentStudents = this.students.value.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    this.students.next(currentStudents);
  }

  deleteStudents(ids: number[]): void {
    const currentStudents = this.students.value.filter(
      (student) => !ids.includes(student.id)
    );
    this.students.next(currentStudents);
  }
}

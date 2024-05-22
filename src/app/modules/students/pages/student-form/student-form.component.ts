import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent {
  @Input() student?: Student;
  studentForm: FormGroup;
  genders = ['Male', 'Female'];
  today = new Date();

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private studentService: StudentService
  ) {
    this.studentForm = this.initialForm();
  }

  ngOnInit(): void {
    if (this.student) {
      this.studentForm.patchValue(this.student);
    }
  }

  save() {
    if (this.studentForm.valid) {
      const formValues = this.studentForm.value;
      const studentData: Student = {
        ...this.student,
        ...formValues,
        dateOfBirth: new Date(formValues.dateOfBirth),
      };
      if (this.student) {
        this.studentService.updateStudent(studentData);
      } else {
        this.studentService.addStudent(studentData);
      }
      this.activeModal.close();
    }
  }
  get formCtrl() {
    return this.studentForm.controls;
  }
  initialForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(1)]],
      dateOfBirth: ['', Validators.required],
      gender: [null, Validators.required],
    });
  }
}

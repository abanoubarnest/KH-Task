import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentFormComponent } from '../student-form/student-form.component';
import { UnsubscribingComponent } from 'src/app/shared/components/unsubscribing-component/unsubscribing-component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent extends UnsubscribingComponent {
  students: Student[] = [];
  selectedStudentIds: Set<number> = new Set<number>();
  isSelected = false;
  constructor(
    private studentService: StudentService,
    private modalService: NgbModal
  ) {
    super();
  }

  ngOnInit(): void {
    this.studentService.students$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((students) => {
        this.students = students;
      });
  }

  openStudentForm(student?: Student): void {
    const modalRef = this.modalService.open(StudentFormComponent);
    modalRef.componentInstance.student = student;
  }

  toggleStudentSelection(id: number): void {
    if (this.selectedStudentIds.has(id)) {
      this.selectedStudentIds.delete(id);
    } else {
      this.selectedStudentIds.add(id);
    }
    if (!this.selectedStudentIds.size) {
      this.isSelected = false;
    }
  }

  deleteSelectedStudents(): void {
    this.studentService.deleteStudents(Array.from(this.selectedStudentIds));
    this.selectedStudentIds.clear();
    this.isSelected = false;
  }
  selectAllStudents(): void {
    this.students.forEach((std: Student) => {
      if (std?.id) this.selectedStudentIds.add(std?.id);
    });
  }
}

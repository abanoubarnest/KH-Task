import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { StudentFormComponent } from './pages/student-form/student-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudentListComponent, StudentFormComponent],
  imports: [CommonModule, RouterModule, StudentsRoutingModule, SharedModule],
})
export class StudentsModule {}

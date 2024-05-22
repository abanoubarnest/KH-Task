import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribingComponent } from './components/unsubscribing-component/unsubscribing-component';
import { CalendarModule } from 'primeng/calendar';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FieldErrorComponent } from './components/field-error/field-error.component';

@NgModule({
  declarations: [UnsubscribingComponent, FieldErrorComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    NgSelectModule,
    UnsubscribingComponent,
    FieldErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    NgSelectModule,
  ],
})
export class SharedModule {}

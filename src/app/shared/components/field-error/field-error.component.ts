import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
})
export class FieldErrorComponent {
  @Input() control: FormControl | AbstractControl | undefined;
  @Input() submitted = false;
  constructor() {}
  get error(): null | {
    message: string;
    error: string | null | { [key: string]: any } | any;
  } {
    for (const propertyName in this?.control?.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        (this.control.dirty ||
          (this.control.touched && this.control.invalid) ||
          this.submitted)
      ) {
        if (this.control && this.control.invalid) {
          this.control.markAsTouched();
        }
        return {
          message: propertyName,
          error: this.control.errors[propertyName],
        };
      }
    }
    return null;
  }
}

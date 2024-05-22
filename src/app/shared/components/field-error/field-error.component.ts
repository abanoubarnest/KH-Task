import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
})
export class FieldErrorComponent implements OnInit {
  @Input() control: FormControl | AbstractControl | undefined;
  @Input() submitted = false;
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
  get error(): any {
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

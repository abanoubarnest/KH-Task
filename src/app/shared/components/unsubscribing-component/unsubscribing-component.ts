import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({ template: '' })
export class UnsubscribingComponent implements OnDestroy {
    protected onDestroy$: Subject<void> = new Subject();
    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

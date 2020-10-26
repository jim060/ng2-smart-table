import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DefaultFilterTypeComponent } from './default-filter-type.component';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'lib-checkbox-filter',
  template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive"
                (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `,
})
export class CheckboxFilterComponent extends DefaultFilterTypeComponent implements OnInit {

  filterActive = false;
  inputControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.changesSubscription = this.inputControl.valueChanges
      .pipe(debounceTime(this.delay))
      .subscribe((checked: boolean) => {
        this.filterActive = true;
        const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
        const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
        this.query = checked ? trueVal : falseVal;
        this.setFilter();
      });
  }

  resetFilter(event: any) {
    event.preventDefault();
    this.query = '';
    this.inputControl.setValue(false, { emitEvent: false });
    this.filterActive = false;
    this.setFilter();
  }
}
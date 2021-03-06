import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {CustomColumnService} from './custom-column.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-custom-column',
  template: `
    <span>{{this.value}}</span>
  `
})
export class CustomColumnComponent implements ViewCell, OnInit {
  renderValue: string | any;
  @Input()
  value: string | any;
  @Input()
  rowData: any;
  @Output()
  view: EventEmitter<any> = new EventEmitter();

  constructor(public customColumnService: CustomColumnService) {
  }

  ngOnInit(): void {
    this.testBackEndResponse();
    this.renderValue = this.value.toString().toUpperCase();
  }
  testBackEndResponse(): void {
    this.customColumnService.getWorkflowByAgg().subscribe(
      (response: HttpResponse<any>) => {
        setTimeout(() => {
          this.value = 50;
        }, 5000);

        setTimeout(() => {
          this.value = 70;
        }, 10000);
        setTimeout(() => {
          this.value = 100;
        }, (15000));
      },
      (errorResponse: HttpErrorResponse) => {
        console.warn('ERROR : ', errorResponse);
      }
    );
  }

  onClick(): void {
    this.view.emit(this.rowData);
  }
}

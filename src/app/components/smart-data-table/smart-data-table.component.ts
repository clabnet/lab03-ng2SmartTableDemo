import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from './smart-data-table';

@Component({
  selector: 'app-smart-data-table',
  templateUrl: './smart-data-table.component.html',
  styleUrls: ['./smart-data-table.component.scss']
})
export class SmartDataTableComponent implements OnInit {

  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(tableData.data); // create the source                                       
  }

  settings = tableData.settings;

  ngOnInit() {
    this.hideColumnForUser();
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }


  hideColumnForUser() {
    if (1 === 1) {
      // delete this.settings.columns.job;
      // delete this.settings.columns.trigger;
    }
  }

}


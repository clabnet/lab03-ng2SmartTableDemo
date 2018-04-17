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
  
  }

}


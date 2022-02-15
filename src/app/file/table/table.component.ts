import { Component, OnInit} from '@angular/core';
import { FileService } from '../file.service';
import {  File} from "../file";
import {  BrowserDataFilter } from '../browser';
import { BrowserDataPage } from '../browser-data-page';


@Component({
  selector: 'app-file-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = 'Liste de fichiers';


 totalPage = 0;
 pageSizes = [5, 10, 20,40];

  filter: BrowserDataFilter = {
    pageSize: 5,
    page: 0
  }
  items: File[] = [] ; 
  
 
  
  constructor(public fileService: FileService) { }

  ngOnInit() {
    this.fetchDataPage();
  }

  fetchDataPage(){
    this.fileService.fetchPage(this.filter)
            .subscribe(data => {
              this.items = data.items;
              this.totalPage = data.totalItems / data.pageSize;
              console.log(data);
            }); 
  }

  handlePageChange(event: number): void {
    this.filter.page = event;
    this.fetchDataPage();
  }

  handlePageSizeChange(event: any): void {
    this.filter.pageSize = event;
    this.fetchDataPage();
  }

}



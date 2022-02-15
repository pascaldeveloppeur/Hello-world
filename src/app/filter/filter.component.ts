
import { Component, OnInit } from '@angular/core';


import { FileService } from '../file/file.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  browsers:any;
 
  constructor(public fileService: FileService) { }

  ngOnInit() {
   

  }

   
  
 
    
  
}


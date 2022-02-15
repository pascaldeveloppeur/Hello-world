import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileRoutingModule } from './file-routing.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    TableComponent

  ],
  imports: [
    CommonModule,
    FileRoutingModule
  ]
})
export class FileModule { }

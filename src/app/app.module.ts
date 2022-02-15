import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  TableComponent} from "./file/table/table.component";
import {  NgxPaginationModule} from "ngx-pagination";
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FilterComponent } from './filter/filter.component';
import { FileService } from "./file/file.service"; 

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

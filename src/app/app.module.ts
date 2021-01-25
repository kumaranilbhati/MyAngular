import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingComponent } from './parent/child/sibling.component';
import { DataProjectionService } from './parent/data-projection.service';

@NgModule({
  declarations: [
    AppComponent, ParentComponent, ChildComponent,SiblingComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [DataProjectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdRadioModule, MdInputModule, MdMenuModule, MdCheckboxModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule
  ],
  declarations: []
})
export class SharedModule { }

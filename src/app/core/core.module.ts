import { NgModule,SkipSelf,Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [
  ],
  exports: [
    SharedModule  
  ]
})

export class CoreModule { 
  constructor( @Optional() @SkipSelf() parent: CoreModule){
    if(parent){
      throw new Error("模块已存在，不能再次加载");
    }
  }
}

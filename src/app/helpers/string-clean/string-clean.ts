import { NgModule } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [    
  ]
})
export class StringClean {  
  separator(value: any ){ return parseInt(value.toString().replace(/$.d/, ''))}
}
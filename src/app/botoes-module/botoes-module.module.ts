import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoGrandeComponentComponent } from './botao-grande-component/botao-grande-component.component';



@NgModule({
  declarations: [
    BotaoGrandeComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotaoGrandeComponentComponent
  ]
})
export class BotoesModuleModule { }

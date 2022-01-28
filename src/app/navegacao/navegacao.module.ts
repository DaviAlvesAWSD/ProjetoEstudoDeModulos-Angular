import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { BotoesModuleModule } from '../botoes-module/botoes-module.module';
import { LinhaComponentComponent } from './linha-component/linha-component.component';



@NgModule({
  declarations: [
    MenuComponentComponent,
    LinhaComponentComponent
  ],
  imports: [
    CommonModule,
    BotoesModuleModule

  ],
  exports: [
    MenuComponentComponent,
    BotoesModuleModule
  ]
})
export class NavegacaoModule { }

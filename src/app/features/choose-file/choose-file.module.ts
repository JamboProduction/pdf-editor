import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChooseFileComponent} from './choose-file.component';
import {ChooseFileRoutingModule} from './choose-file-routing.module';
import {DndDirectiveModule} from '@shared/directives/dnd/dnd-directive.module';

@NgModule({
  declarations: [
    ChooseFileComponent
  ],
  imports: [
    CommonModule,
    ChooseFileRoutingModule,
    DndDirectiveModule,
  ],
})
export class ChooseFileModule {
}

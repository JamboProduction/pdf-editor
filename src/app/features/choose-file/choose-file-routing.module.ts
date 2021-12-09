import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChooseFileComponent} from './choose-file.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseFileRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileCheckGuard} from '@core/guards/file-check.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/choose-file/choose-file.module').then(m => m.ChooseFileModule),
  },
  {
    path: 'editor',
    loadChildren: () => import('./features/editor/editor.module').then(m => m.EditorModule),
    canActivate: [FileCheckGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

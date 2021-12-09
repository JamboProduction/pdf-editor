import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

import {EditorState} from '@core/states/editor/editor.state';
import {FileCheckGuard} from '@core/guards/file-check.guard';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([EditorState]),
    NgxsStoragePluginModule.forRoot({key: ['editor']}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [FileCheckGuard]
    };
  }
}

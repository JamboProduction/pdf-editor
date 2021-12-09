import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {EditorComponent} from './editor.component';
import {EditorHeaderComponent} from './header/editor-header.component';
import {EditorToolbarComponent} from './toolbar/editor-toolbar.component';
import {EditorBodyComponent} from './body/editor-body.component';
import {EditorSidebarPreviewComponent} from './sidebar-preview/editor-sidebar-preview.component';
import {EditorSidebarSettingsComponent} from './sidebar-settings/editor-sidebar-settings.component';
import {EditorRoutingModule} from './editor-routing.module';

@NgModule({
  declarations: [
    EditorComponent,
    EditorHeaderComponent,
    EditorToolbarComponent,
    EditorBodyComponent,
    EditorSidebarPreviewComponent,
    EditorSidebarSettingsComponent,
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule,
  ],
})
export class EditorModule {
}

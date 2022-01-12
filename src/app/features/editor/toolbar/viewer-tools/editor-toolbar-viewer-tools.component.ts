import {Component} from '@angular/core';

@Component({
  selector: 'app-editor-toolbar-viewer-tools',
  templateUrl: './editor-toolbar-viewer-tools.component.html',
  styleUrls: ['./editor-toolbar-viewer-tools.component.scss']
})
export class EditorToolbarViewerToolsComponent {

  currentPage = 1;
  totalPages = 5;

  currentZoom = '100%';
}

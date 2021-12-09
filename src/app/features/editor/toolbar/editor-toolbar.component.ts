import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngxs/store';
import {Subscription} from 'rxjs';

import {ToolType} from '@core/types/tool.type';
import {EditorState} from '@core/states/editor/editor.state';
import {SelectTool} from '@core/states/editor/editor.actions';

@Component({
  selector: 'app-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss']
})
export class EditorToolbarComponent implements OnDestroy {

  activeTool: ToolType;
  activeToolSubs: Subscription;

  currentPage = 1;
  totalPages = 5;

  constructor(
    private store: Store
  ) {
    this.store.select(EditorState.activeTool).subscribe(activeTool => {
      this.activeTool = activeTool;
    });
  }

  ngOnDestroy(): void {
    if (this.activeToolSubs) {
      this.activeToolSubs.unsubscribe();
    }
  }

  navigatePage(delta: 1 | -1): void {
    const nextPage = Number(this.currentPage) + delta;
    if (nextPage >= 1 && nextPage <= this.totalPages) {
      this.currentPage = nextPage;
    }
  }

  selectTool(tool: ToolType): void {
    this.store.dispatch(new SelectTool(tool));
  }
}

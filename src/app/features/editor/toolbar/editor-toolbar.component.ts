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

  selectTool(tool: ToolType): void {
    this.store.dispatch(new SelectTool(tool));
  }
}

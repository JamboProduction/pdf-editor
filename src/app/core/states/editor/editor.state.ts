import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SelectTool, SetFile} from '@core/states/editor/editor.actions';
import {ToolType} from '@core/types/tool.type';

interface EditorStateModel {
  file: string;
  activeTool: ToolType;
}

const defaults: EditorStateModel = {
  file: null,
  activeTool: null,
};

@State<EditorStateModel>({
  name: 'editor',
  defaults
})
@Injectable()
export class EditorState {

  @Selector()
  static file(state: EditorStateModel): string {
    return state.file;
  }

  @Selector()
  static activeTool(state: EditorStateModel): ToolType {
    return state.activeTool;
  }

  @Action(SetFile)
  SetFile({getState, patchState}: StateContext<EditorStateModel>, {file}: SetFile): void {
    patchState({file});
  }

  @Action(SelectTool)
  SelectTool({getState, patchState}: StateContext<EditorStateModel>, {tool}: SelectTool): void {
    patchState({activeTool: tool});
  }
}

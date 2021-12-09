import {ToolType} from '@core/types/tool.type';

export class SetFile {
  static readonly type = '[Editor] SetFile';

  constructor(public file: string) {
  }
}

export class SelectTool {
  static readonly type = '[Editor] SelectTool';

  constructor(public tool: ToolType) {
  }
}

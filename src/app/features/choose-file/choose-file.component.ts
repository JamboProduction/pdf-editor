import {Component} from '@angular/core';
import {Store} from '@ngxs/store';
import {SetFile} from '@core/states/editor/editor.actions';
import {Router} from '@angular/router';

@Component({
  templateUrl: './choose-file.component.html',
  styleUrls: ['./choose-file.component.scss']
})
export class ChooseFileComponent {

  constructor(
    private store: Store,
    private router: Router,
  ) {
  }

  onFileDropped(files: FileList): void {
    const file = files[0];
    this.setFile(file);
  }

  onChangeFileInput(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.setFile(file);
  }

  setFile(file: File): void {
    this.store.dispatch(new SetFile(file.name))
      .toPromise()
      .then(() => {
        this.router.navigate(['/editor'])
      });
  }
}

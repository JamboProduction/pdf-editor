import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngxs/store';
import {EditorState} from '@core/states/editor/editor.state';

@Injectable()
export class FileCheckGuard implements CanActivate {

  constructor(
    private store: Store,
    private router: Router,
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.store.selectSnapshot(EditorState.file)) {
      console.log('[FileCheckGuard] Has file, launching editor.');
      return true;
    }

    console.log('[FileCheckGuard] No file, redirecting main page.');
    this.router.navigate(['/']);
    return false;
  }
}

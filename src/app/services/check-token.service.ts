import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root',
})
export class CheckTokenService implements CanActivate {
  constructor(
    private appStateService: AppStateService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
      return this.appStateService.userToken$.pipe(
        take(1),
        map(user => {
          const isAuth = !!user;
          if (isAuth) {
            return true;
          }
          return this.router.createUrlTree(['/user/login']);
        })
        // tap(isAuth => {
        //   if (!isAuth) {
        //     this.router.navigate(['/auth']);
        //   }
        // })
      );
  }
}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, pairwise, shareReplay } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isXL$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XLarge)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  isHomePage = false;
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((evt) => evt instanceof NavigationEnd),
        pairwise(),
        map((v) => ({
          previous: (v[0] as NavigationEnd).url,
          current: (v[1] as NavigationEnd).url,
        }))
      )
      .subscribe((routeInfo) => {
        if (routeInfo.current.includes('home')) {
          this.isHomePage = true;
        } else {
          this.isHomePage = false;
        }
      });
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
}

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay,map } from 'rxjs/operators';
import { AppStateService } from 'src/app/services/app-state.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public desktopSlides = [
    { src: "https://firebasestorage.googleapis.com/v0/b/bazaa-9913b.appspot.com/o/bazaarBanner2.jpg?alt=media&token=c9eaa8a1-a62b-45fb-bbe7-7757d2c3c778" },
    { src: "https://firebasestorage.googleapis.com/v0/b/bazaa-9913b.appspot.com/o/bazaarBanner3.jpg?alt=media&token=404364e2-3e76-4f63-83c8-2fc6c6a842cd" },
  ];
  public mobileSlides = [
    { src: "https://firebasestorage.googleapis.com/v0/b/bazaa-9913b.appspot.com/o/mobileBanner.jpg?alt=media&token=42deb52d-84f0-4e09-b18e-89eff83b598b" },
    { src: "https://firebasestorage.googleapis.com/v0/b/bazaa-9913b.appspot.com/o/mobileBanner2.jpg?alt=media&token=175f0f20-eb4e-4897-8660-e7c3d5e3e950" },
    { src: "https://firebasestorage.googleapis.com/v0/b/bazaa-9913b.appspot.com/o/mobileBanner3.jpg?alt=media&token=b29678b6-a86f-44a6-8246-28445d18f96d" },
  ];
  constructor(
    public appStateService: AppStateService,
    private breakpointObserver: BreakpointObserver
  ) {}
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  ngOnInit(): void {}
}

import { Component, DestroyRef, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet, RouterLink, NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';

import { MATERIAL_IMPORTS } from '../../shared/material';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, ...MATERIAL_IMPORTS],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss'],
})
export class MainLayout {
  private breakpoints = inject(BreakpointObserver);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
 private cart = inject(CartService);
  readonly cartCount = this.cart.totalItems;

  isSidenavOpen = false;
  isMobile = true;          // will be updated by BreakpointObserver
  sidenavOpened = false;    // controls sidenav open/close

  constructor() {
    // Switch behavior by breakpoint
    const sub1 = this.breakpoints
      .observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;

        // On desktop keep sidenav open; on mobile keep it closed by default
        this.sidenavOpened = this.isMobile ? false : true;
      });

    // Close sidenav after navigation on mobile
    const sub2 = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        if (this.isMobile) this.sidenavOpened = false;
      });

    // Cleanup
    this.destroyRef.onDestroy(() => {
      sub1.unsubscribe();
      sub2.unsubscribe();
    });
  }

  toggleMenu() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  closeMenu() {
    if (this.isMobile) this.sidenavOpened = false;
  }
}

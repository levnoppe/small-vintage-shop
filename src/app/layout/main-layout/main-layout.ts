// src/app/layout/main-layout/main-layout.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

import { MATERIAL_IMPORTS } from '../../shared/material';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ...MATERIAL_IMPORTS
  ],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss']
})
export class MainLayout {
  isSidenavOpen = false;
}

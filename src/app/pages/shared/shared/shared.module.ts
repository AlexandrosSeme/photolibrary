import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmptyStateComponent,
    PhotoCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    PhotoCardComponent,
    RouterModule
  ]
})
export class SharedModule { }

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class PhotoCardComponent {
  @Input() photo: any;
  @Input() showDelete = false;
  @Input() showFavorite = false;
  @Input() enableRouting = false;  
  @Output() favoriteToggled = new EventEmitter<any>();

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.favoriteToggled.emit(this.photo);
  }
}

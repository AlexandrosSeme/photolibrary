import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  photos: any[] = [];

  constructor(private favoriteService: FavoriteService, private notify: NotificationsService) { }

  ngOnInit(): void {
    this.renderFavorites();
  }

  renderFavorites(): void {
    this.photos = this.favoriteService.getFavorites();
  }

  toggleFavorite(photo: any): void {
    const isNowFavorite = this.favoriteService.toggleFavorite(photo);
    if (!isNowFavorite) {
      this.photos = this.photos.filter(p => p.id !== photo.id);
      this.notify.showSuccess('Removed from favorites');
    }
  }

  trackByPhotoId(_: number, photo: any): number {
    return photo.id;
  }
}

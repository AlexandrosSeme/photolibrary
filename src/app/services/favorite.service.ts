import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private storageKey = 'favorites';

  constructor() { }

  getFavorites(): any[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  saveFavorites(favorites: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(photo: any): boolean {
    const favorites = this.getFavorites();
    return favorites.some(fav => fav.id === photo.id);
  }

  toggleFavorite(photo: any): boolean {
    const favorites = this.getFavorites();
    const index = favorites.findIndex(fav => fav.id === photo.id);

    let isNowFavorite = false;

    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(photo);
      isNowFavorite = true;
    }

    this.saveFavorites(favorites);
    return isNowFavorite;
  }
}

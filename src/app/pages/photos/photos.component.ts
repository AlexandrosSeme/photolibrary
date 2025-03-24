import { Component, HostListener, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  currentPage = 1;
  photos: any[] = [];
  hasMore = true;

  isInitialLoading = true;
  isLoading = false;

  constructor(
    private req: RequestsService,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.loadNext();
  }

  loadNext(): void {
    if (this.isLoading || !this.hasMore) return;
    this.isLoading = true;
    this.req.getPhotos(this.currentPage, 6).subscribe({
      next: (data) => {
        if (!data || data.length === 0) {
          this.hasMore = false;
          this.isLoading = false;
          return;
        }
        const favorites = this.favoriteService.getFavorites();
        const updatedPhotos = data.map(photo => ({
          ...photo,
          isFavorite: favorites.some(f => f.id === photo.id)
        }));
        const delay = Math.floor(Math.random() * 100) + 200;
        setTimeout(() => {
          this.photos.push(...updatedPhotos);
          this.currentPage++;
          this.isLoading = false;
          if (this.isInitialLoading) {
            this.isInitialLoading = false;
          }
        }, delay);
      },
      error: (error) => {
        console.error('Error fetching photos:', error);
        this.isLoading = false;
        this.isInitialLoading = false;
      }
    });
  }

  toggleFavorite(photo: any) {
    photo.isFavorite = this.favoriteService.toggleFavorite(photo);
  }

  trackByPhotoId(photo: any): number {
    return photo.id;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const nearBottom = scrollPosition >= documentHeight - 1;
    if (nearBottom && !this.isLoading && this.hasMore && !this.isInitialLoading) {
      this.loadNext();
    }
  }
}

import { Component, OnInit } from '@angular/core';
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

  constructor(
    private req: RequestsService,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.loadNext();
  }

  loadNext() {
    this.req.getPhotos(this.currentPage).subscribe((data) => {
      data.forEach(photo => {
        photo.isFavorite = this.favoriteService.isFavorite(photo);
      });

      this.photos.push(...data);
      this.currentPage++;
    });
  }

  toggleFavorite(photo: any) {
    photo.isFavorite = this.favoriteService.toggleFavorite(photo);
  }

  trackByPhotoId(photo: any): number {
    return photo.id;
  }
}

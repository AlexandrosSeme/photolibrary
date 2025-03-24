import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent {
  photo: any;
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,  
    private favoriteService: FavoriteService
  ) { }


  ngOnInit(): void {
    const photoId = this.route.snapshot.paramMap.get('id');
    console.log(photoId)
    if (photoId) {
      const allPhotos = this.favoriteService.getFavorites().concat();
      console.log(allPhotos)
      this.photo = allPhotos.find(p => p.id == photoId);
    }
  }

  toggleFavorite(photo: any): void {
    console.log(photo)
    const isNowFavorite = this.favoriteService.toggleFavorite(photo);
    if (!isNowFavorite) {
      this.photos = this.photos.filter(p => p.id !== photo.id);
      this.router.navigate(['/favorites']);
    }
  }

}

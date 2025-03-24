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
    if (photoId) {
      const allPhotos = this.favoriteService.getFavorites().concat();
      this.photo = allPhotos.find(p => p.id == photoId);
    }
  }

  toggleFavorite(photo: any): void {
    const isStillFavorite = this.favoriteService.toggleFavorite(photo);
    if (!isStillFavorite) {
      this.router.navigate(['/favorites']);
    }
  }

}

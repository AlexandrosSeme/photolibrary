import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    children: [
      { path: '', component: PhotosComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'photos/:id', component: PhotoDetailComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

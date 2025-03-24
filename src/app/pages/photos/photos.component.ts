import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  currentPage = 1;
  photos: any[] = [];

  constructor(private req: RequestsService) { }

  ngOnInit(): void {
    this.req.getPhotos().subscribe(res => {
      console.log(res)
    })
  }

  loadNext() {
    this.req.getPhotos(this.currentPage).subscribe((data) => {
      this.photos.push(...data);
      this.currentPage++;
    });
  }

}

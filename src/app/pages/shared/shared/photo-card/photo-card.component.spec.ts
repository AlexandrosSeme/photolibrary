import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoCardComponent } from './photo-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoCardComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        RouterTestingModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        NoopAnimationsModule
      ]
    }).compileComponents();;

    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
    component.photo = {
      id: 1,
      download_url: 'https://example.com/photo.jpg',
      author: 'Test Author',
      isFavorite: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

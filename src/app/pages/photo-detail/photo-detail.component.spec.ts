import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoDetailComponent } from './photo-detail.component';
import { ActivatedRoute } from '@angular/router';

describe('PhotoDetailComponent', () => {
  let component: PhotoDetailComponent;
  let fixture: ComponentFixture<PhotoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1',
              },
            },
          },
        }
      ]
    });
    fixture = TestBed.createComponent(PhotoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

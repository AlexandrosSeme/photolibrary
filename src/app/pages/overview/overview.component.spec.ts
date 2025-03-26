import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewComponent } from './overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ''
})
class MockHeaderComponent {}

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewComponent, MockHeaderComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

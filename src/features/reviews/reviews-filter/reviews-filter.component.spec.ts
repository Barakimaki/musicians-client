import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsFilterComponent } from './reviews-filter.component';

describe('ReviewsFilterComponent', () => {
  let component: ReviewsFilterComponent;
  let fixture: ComponentFixture<ReviewsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

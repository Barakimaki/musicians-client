import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewActionsComponent } from './review-actions.component';

describe('ReviewActionsComponent', () => {
  let component: ReviewActionsComponent;
  let fixture: ComponentFixture<ReviewActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

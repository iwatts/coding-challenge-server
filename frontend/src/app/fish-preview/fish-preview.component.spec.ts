import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishPreviewComponent } from './fish-preview.component';

describe('FishThumbnailComponent', () => {
  let component: FishPreviewComponent;
  let fixture: ComponentFixture<FishPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishPreviewComponent]
    });
    fixture = TestBed.createComponent(FishPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

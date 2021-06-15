import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickerTagsComponent } from './flicker-tags.component';

describe('FlickerTagsComponent', () => {
  let component: FlickerTagsComponent;
  let fixture: ComponentFixture<FlickerTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickerTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickerTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

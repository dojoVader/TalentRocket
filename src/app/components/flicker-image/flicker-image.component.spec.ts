import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickerImageComponent } from './flicker-image.component';

describe('FlickerImageComponent', () => {
  let component: FlickerImageComponent;
  let fixture: ComponentFixture<FlickerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickerImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmNewComponent } from './atm-new.component';

describe('AtmNewComponent', () => {
  let component: AtmNewComponent;
  let fixture: ComponentFixture<AtmNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmUserComponent } from './atm-user.component';

describe('AtmUserComponent', () => {
  let component: AtmUserComponent;
  let fixture: ComponentFixture<AtmUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

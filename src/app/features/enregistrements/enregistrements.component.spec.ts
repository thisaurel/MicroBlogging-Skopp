import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementsComponent } from './enregistrements.component';

describe('EnregistrementsComponent', () => {
  let component: EnregistrementsComponent;
  let fixture: ComponentFixture<EnregistrementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistrementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

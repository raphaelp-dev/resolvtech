import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsComponent } from './equipments.component';

describe('EquipmentsComponent', () => {
  let component: EquipmentsComponent;
  let fixture: ComponentFixture<EquipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EquipmentsComponent]
    });
    fixture = TestBed.createComponent(EquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

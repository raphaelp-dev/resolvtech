import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOffcanvasComponent } from './sidebar-offcanvas.component';

describe('SidebarOffcanvasComponent', () => {
  let component: SidebarOffcanvasComponent;
  let fixture: ComponentFixture<SidebarOffcanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidebarOffcanvasComponent]
    });
    fixture = TestBed.createComponent(SidebarOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

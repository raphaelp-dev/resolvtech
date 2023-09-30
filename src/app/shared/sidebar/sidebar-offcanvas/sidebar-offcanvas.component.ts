import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-offcanvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-offcanvas.component.html',
  styleUrls: ['./sidebar-offcanvas.component.scss']
})
export class SidebarOffcanvasComponent {
  offCanvas = inject(NgbOffcanvas)
  private router = inject(Router)
  close(route : string){
    this.router.navigateByUrl(route)
    return this.offCanvas.dismiss()
  }
}

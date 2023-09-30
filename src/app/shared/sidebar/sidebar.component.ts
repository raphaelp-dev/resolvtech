import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbActiveOffcanvas, NgbCollapse, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SidebarOffcanvasComponent } from './sidebar-offcanvas/sidebar-offcanvas.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [RouterLink, NgbCollapse, RouterLinkActive],
  providers: [NgbOffcanvas, NgbActiveOffcanvas]
})
export class SidebarComponent {
  offCanvas = inject(NgbOffcanvas)
  private router = inject(Router)
  activeOffCanvas = inject(NgbActiveOffcanvas)
  openOffCanvas(){
    const offCanvasRef = this.offCanvas.open(SidebarOffcanvasComponent)
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/sign-in'])
  }
}
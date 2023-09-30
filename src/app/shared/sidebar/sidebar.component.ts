import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbActiveOffcanvas, NgbCollapse, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SidebarOffcanvasComponent } from './sidebar-offcanvas/sidebar-offcanvas.component';
import { UserStateService } from 'src/app/state/user-state.service';

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
  private userStateService = inject(UserStateService)
  openOffCanvas(){
    const offCanvasRef = this.offCanvas.open(SidebarOffcanvasComponent)
  }
  logout(){
    this.userStateService.logout()
  }
}
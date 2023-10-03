import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CalendarService } from "../services/calendar.service";

@Injectable({ providedIn: 'root' })
export class CalendarResolver implements Resolve<any> {
  constructor(private calendarsSrvice: CalendarService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.calendarsSrvice.schedules$
  }
}
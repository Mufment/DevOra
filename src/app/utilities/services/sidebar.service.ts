import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarVisible = new BehaviorSubject<boolean>(false);
  sidebarVisible$ = this.sidebarVisible.asObservable();

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  setSidebarVisibility(isVisible: boolean) {
    this.sidebarVisible.next(isVisible);
  }
}

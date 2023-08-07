import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _isVisible: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get isVisible() {
    return this._isVisible.asObservable();
  }

  show() {
    this._isVisible.next(true);
  }

  hide() {
    this._isVisible.next(false);
  }
}

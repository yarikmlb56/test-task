import { Injectable } from '@angular/core';


@Injectable()
export class WindowService {

  public openNewTab(url: string): void {
    window.open(url);
  }
}

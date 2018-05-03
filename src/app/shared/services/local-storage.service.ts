import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

  public setToStorage(item: IMovie): void {
    localStorage.setItem(item.idIMDB, JSON.stringify(item));
  }

  public getFromStorage(itemId: string): void {
    JSON.parse(localStorage.getItem(itemId));
  }

  public isExist(itemId: string): boolean {
    return Boolean(localStorage.getItem(itemId));
  }

  public removeFromStorage(itemId: string): void {
    localStorage.removeItem(itemId);
  }

  public getItems(): IMovie[] {
    const movies: IMovie[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      movies.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return movies;
  }
}

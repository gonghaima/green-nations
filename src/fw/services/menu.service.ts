import { Injectable } from '@angular/core';

export interface MenuItems{}

@Injectable()
export class MenuService {
    items:Array<MenuItems>;

}
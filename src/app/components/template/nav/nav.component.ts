import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { ItemCrudComponent } from "../../../views/item-crud/item-crud.component";
import { HomeComponent } from "../../../views/home/home.component";
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [CommonModule, MatSidenavModule, MatListModule, ItemCrudComponent, HomeComponent,RouterOutlet,RouterLink]
})
export class NavComponent {

}

import { Routes } from '@angular/router';
import { ItemCrudComponent } from './views/item-crud/item-crud.component'
import { HomeComponent } from './views/home/home.component'
import { ItemCreateComponent } from './components/item/item-create/item-create.component';


export const routes: Routes = [{
    path: "",
    component: HomeComponent
}, {
    path: "itens",
    component: ItemCrudComponent
}, {
    path: "item/create",
    component: ItemCreateComponent
}];

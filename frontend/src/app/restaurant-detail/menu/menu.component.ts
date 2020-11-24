import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
    selector: 'mt-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit
{
    public menu: Observable<MenuItem[]>;

    constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

    ngOnInit(): void
    {
        const id = this.route.parent.snapshot.params['id'];

        this.menu = this.restaurantsService.menuOfRestaurant(id);
    }

    public addMenuItem(item: MenuItem): void
    {
        console.log(item);
    }

}

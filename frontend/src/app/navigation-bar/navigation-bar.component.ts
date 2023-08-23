import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
	speciesNameList: string[] = []

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getGoFish().subscribe((fishes: any[]) => {
			console.log('FISH DATA: ', fishes)
			fishes.forEach((fish: any) => {
				if (fish.SpeciesName) {
					this.speciesNameList.push(fish.SpeciesName)
				}
			});
		})
	}
}

import { Component,Input } from '@angular/core';

@Component({
	selector: 'app-fish-preview',
	templateUrl: './fish-preview.component.html',
	styleUrls: ['./fish-preview.component.css']
})
export class FishPreviewComponent {
	@Input() item:any = {};
}

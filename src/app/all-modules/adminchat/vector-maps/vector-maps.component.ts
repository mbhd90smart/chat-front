import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-vector-maps',
  templateUrl: './vector-maps.component.html',
  styleUrls: ['./vector-maps.component.css'],
})
export class VectorMapsComponent implements OnInit {

  constructor() { }

   ngOnInit() {
 
 if ($('#vmap').length > 0) {
		$('#vmap').vectorMap({
	      map: 'world_en',
	      backgroundColor: '#333333',
	      color: '#ffffff',
	      hoverOpacity: 0.7,
	      selectedColor: '#666666',
	      enableZoom: true,
	      showTooltip: true,
	      scaleColors: ['#C8EEFF', '#006491'],
	      normalizeFunction: 'polynomial'
	    });
	}
	if ($('#vmap').length > 0) {
	    $('#vmapusa').vectorMap({
	      map: 'usa_en',
	      enableZoom: true,
	      showTooltip: true,
	      selectedColor: null,
	      hoverColor: null,
	      colors: {
	        mo: '#C9DFAF',
	        fl: '#C9DFAF',
	        or: '#C9DFAF'
	      },
	      onRegionClick: function(event, code, region){
	        event.preventDefault();
	      }
	    });
	}
 
  }

}
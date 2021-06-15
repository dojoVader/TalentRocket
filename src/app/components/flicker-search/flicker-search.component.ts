import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flicker-search',
  templateUrl: './flicker-search.component.html',
  styleUrls: ['./flicker-search.component.scss']
})
export class FlickerSearchComponent implements OnInit {

  public searchTag: string = 'Please Enter a Search tag'
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
})
export class Search implements OnInit {
  search;

  @Output() searchString: EventEmitter<String> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  onSubmit() {
    this.searchString.emit(this.search);
  }
}

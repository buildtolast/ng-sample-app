import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  private name : String = '';

  constructor() { }

  ngOnInit() {
  }

  whenClicked() : void {
    alert(`${this.name} is the value`)
  }

}

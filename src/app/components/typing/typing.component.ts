import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getKeyPressed(event:KeyboardEvent)
  {
    var outputParagraph = <HTMLElement>document.querySelector("#output");

    // it seems like enter is they only special key that keypress catches, so that's all i have to handle
    if (event.key != "Enter")
    {
      outputParagraph.append(event.key);
    }
  }

}

import { keyframes } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { sample } from 'rxjs';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit 
{

  // this will eventually pull a random sample from the db
  sampleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  textHTMLContainer = "";
  inputText = "";
  indexPointer = 0;
  textStyleClass = 'correct';
  wpm = 0;
  mistypeCounter = 0;

  time = 5;
  timerDisplay = true;

  constructor() { }

  ngOnInit(): void 
  {
    for(let i = 0; i < this.sampleText.length; i++)
    {
      this.textHTMLContainer += "<span class=" + "character" + i + ">" + this.sampleText[i] + "</span>";    // super messy, but it'll have to do for now
    }

    setInterval(() => {
      this.time--;
    }, 1000)

    // call the timeUp function after the timer has reached 0
    setInterval(() => {
      this.timeUp()
    }, this.time * 1000)
  }



  @HostListener('window:keyup', ['$event'])
  getKeyPressed(event:KeyboardEvent)
  {
    // only allow key pressed within the time limit
    if (this.timerDisplay == true)
    {
      // var outputParagraph = <HTMLElement>document.querySelector("#output");
      // var children = outputParagraph.children;
      // console.log(children[this.indexPointer]);

      // prevent special keys (shift, enter, alt, etc) from doing anything
      if (event.key != "Enter" && event.key != "Backspace" && event.key != "Shift" && event.key != "CapsLock" && event.key != "Alt" && event.key != "Escape" && event.key != "Control"
          && event.key != "OS" && event.key != "Tab")
      {
        this.checkKey(event, this.indexPointer)
        //children[this.indexPointer].className = this.textStyleClass;
        this.inputText += event.key;
        this.indexPointer++;   // move the pointer for every key pressed
      }
      if (event.key == "Backspace")
      {
        // remove last character
        this.inputText = this.inputText.slice(0,-1);

        // move pointer back when backspace is pressed, but make sure not to go negative
        if (this.indexPointer > 0)
        {
          this.indexPointer --;
        }
      }
    }
  }

  // change style based on whether the key pressed was correct or not
  checkKey(event:KeyboardEvent, index:number)
  {
    if (event.key.toString() == this.sampleText[index])
    {
      this.textStyleClass = 'correct';
    }
    else
    {
      this.textStyleClass = 'incorrect';
      this.mistypeCounter++;
    }
  }

  // do things here that need to happen after the timer runs out
  // like calculating wpm, mistypes, score, etc
  timeUp()
  {
    this.timerDisplay = false;
    this.wpm = this.inputText.split(" ").length;
    console.log("wpm is: " + this.wpm);
    console.log("mistypes: " + this.mistypeCounter);
  }
    

    
}

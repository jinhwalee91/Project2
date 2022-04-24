import { keyframes } from '@angular/animations';
import { NONE_TYPE, ViewEncapsulation } from '@angular/compiler';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { sample } from 'rxjs';
import { GettextService } from 'src/app/services/gettext.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css'],
})

export class TypingComponent implements OnInit 
{

  // this will eventually pull a random sample from the db
  sampleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  textHTMLContainer = "";
  inputText = "";   // basically only used to calculate wpm
  indexPointer = 0;
  currentStyle = "correct";
  wpm = 0;
  mistypeCounter = 0;

  time = 30;
  timerDisplay = true;

  outputParagraph!: HTMLElement;
  children!: HTMLCollection;
  private _textService : GettextService;
  private _auth : AuthGuardService;

  constructor(private _textServ : GettextService, private _authServ : AuthGuardService) 
  {
    this._textService = _textServ;
    this._auth = _authServ;

    // this works surprisingly. it gets the logged in user's details
    // so now all i need to do is change the api to send user id (and whatever else) so i can save that here
    console.log("detail: " + this._auth.userDetail);
  }

  ngOnInit(): void
  {
    this.getTextFromApi();
    //this.textSetup();

    setInterval(() => {
      this.time--;
    }, 1000)

    // call the timeUp function after the timer has reached 0
    setInterval(() => {
      if (this.timerDisplay == true)
      {
        this.timeUp()
      }
    }, (this.time + 1) * 1000)
  }

  getTextFromApi()
  {
    this._textService.getSentences().subscribe((data) => {
      this.sampleText = data
      //console.log(this.sampleText);
    }, (err) => {
      console.log(err);
    }, () => {
      this.textSetup()
    });
    //this._textService.getSentences().subscribe({complete: (data) => {this.sampleText = data}})
  }

  textSetup()
  {
    for(let i = 0; i < this.sampleText.length; i++)
    {
      // give the first character the underline "pointer" to start
      if (i == 0)
      {
        this.textHTMLContainer += "<span class='currentLetter' [ngClass]=" + this.currentStyle + ">" + this.sampleText[i] + "</span>";
      }
      else
      {
        this.textHTMLContainer += "<span [ngClass]=" + this.currentStyle + ">" + this.sampleText[i] + "</span>";
      }
    }

    // get the container for all the text
    this.outputParagraph = <HTMLElement>document.querySelector("#output");

    // and then get its children (every letter separated in their own tags)
    this.children = this.outputParagraph.children;
  }

  @HostListener('window:keyup', ['$event'])
  getKeyPressed(event:KeyboardEvent)
  {
    // only allow key presses within the time limit
    if (this.timerDisplay == true)
    {      
      // prevent special keys (shift, enter, alt, etc) from doing anything
      if (event.key != "Enter" && event.key != "Backspace" && event.key != "Shift" && event.key != "CapsLock" && event.key != "Alt" && event.key != "Escape" && event.key != "Control"
          && event.key != "OS" && event.key != "Tab")
      {
        this.checkKey(event, this.indexPointer);

        this.children[this.indexPointer].className = this.currentStyle;
        this.children[this.indexPointer + 1].className = 'currentLetter';
        
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
          this.children[this.indexPointer].className = 'currentLetter';
          this.children[this.indexPointer + 1].className = '';
        }
      }
    }
  }

  // change style based on whether the key pressed was correct or not
  checkKey(event:KeyboardEvent, index:number)
  {
    if (event.key.toString() == this.sampleText[index])
    {
      this.currentStyle = 'correct';
    }
    else
    {
      this.currentStyle = 'incorrect';
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

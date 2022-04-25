import { keyframes } from '@angular/animations';
import { NONE_TYPE, ViewEncapsulation } from '@angular/compiler';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { sample } from 'rxjs';
import { GettextService } from 'src/app/services/gettext.service';
import { LoginComponent } from '../login/login.component';
import { UpdatescoreService } from 'src/app/services/updatescore.service';
import { HashTable } from 'angular-hashtable';

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
  letterScores = new HashTable<string, number>();

  time = 30;
  timerDisplay = true;

  outputParagraph!: HTMLElement;
  children!: HTMLCollection;
  private _textService : GettextService;
  private _updateService : UpdatescoreService;

  constructor(private _textServ : GettextService, private _update : UpdatescoreService) 
  {
    this._textService = _textServ;
    this._updateService = _update;

    this.letterScores.put('a', 0)
    this.letterScores.put('b', 0)
    this.letterScores.put('c', 0)
    this.letterScores.put('d', 0)
    this.letterScores.put('e', 0)
    this.letterScores.put('f', 0)
    this.letterScores.put('g', 0)
    this.letterScores.put('h', 0)
    this.letterScores.put('i', 0)
    this.letterScores.put('j', 0)
    this.letterScores.put('k', 0)
    this.letterScores.put('l', 0)
    this.letterScores.put('m', 0)
    this.letterScores.put('n', 0)
    this.letterScores.put('o', 0)
    this.letterScores.put('p', 0)
    this.letterScores.put('q', 0)
    this.letterScores.put('r', 0)
    this.letterScores.put('s', 0)
    this.letterScores.put('t', 0)
    this.letterScores.put('u', 0)
    this.letterScores.put('v', 0)
    this.letterScores.put('w', 0)
    this.letterScores.put('x', 0)
    this.letterScores.put('y', 0)
    this.letterScores.put('z', 0)
  }

  ngOnInit(): void
  {
    this.getTextFromApi();
    
    //console.log("asdfsadf " + typeof(this.letterScores))

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
    var curLetterScore = this.letterScores.get(event.key.toString());

    // +1 to letter score when correct, -1 when incorrect
    if (event.key.toString() == this.sampleText[index])
    {
      this.currentStyle = 'correct';

      if (curLetterScore < 100)
      {
        this.letterScores.put(event.key.toString(), (curLetterScore + 1))
      }
    }
    else
    {
      this.currentStyle = 'incorrect';
      this.mistypeCounter++;

      if (curLetterScore > 0)
      {
        this.letterScores.put(event.key.toString(), (curLetterScore - 1))
      }
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

    var fakeElo = (this.wpm / (this.mistypeCounter + 1)) * 1000;

    // +1 to letter score when correct, -1 when incorrect

    this._updateService.updateScore(LoginComponent.userDetails.accountId, this.wpm, fakeElo, this.letterScores).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    })
  }
    

    
}

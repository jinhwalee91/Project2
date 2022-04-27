import { keyframes } from '@angular/animations';
import { NONE_TYPE, ViewEncapsulation } from '@angular/compiler';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { sample } from 'rxjs';
import { GettextService } from 'src/app/services/gettext.service';
import { LoginComponent } from '../login/login.component';
import { UpdatescoreService } from 'src/app/services/updatescore.service';
//import { HashTable } from 'angular-hashtable';

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
  fakeElo = 0;
  textLoaded = false;
  //letterScores = new HashTable<string, number>();
  letterScores : number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // letterScores = {
  //   'a': 0,
  //   'b': 0,
  //   'c': 0,
  //   'd': 0,
  //   'e': 0,
  //   'f': 0,
  //   'g': 0,
  //   'h': 0,
  //   'i': 0,
  //   'j': 0,
  //   'k': 0,
  //   'l': 0,
  //   'm': 0,
  //   'n': 0,
  //   'o': 0,
  //   'p': 0,
  //   'q': 0,
  //   'r': 0,
  //   's': 0,
  //   't': 0,
  //   'u': 0,
  //   'v': 0,
  //   'w': 0,
  //   'x': 0,
  //   'y': 0,
  //   'z': 0
  // }

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
  }

  ngOnInit(): void
  {
    this.getTextFromApi();
    
    setInterval(() => {
      if (this.textLoaded == true)
      {
        this.time--;
      }
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

    this.textLoaded = true;
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
    var letterCode = this.covertLetterToNumber(event.key.toString());

    // +1 to letter score when correct, -1 when incorrect
    if (event.key.toString() == this.sampleText[index])
    {
      this.currentStyle = 'correct';
      if (letterCode >= 0)
      {
        this.letterScores[letterCode] += 1
      }
    }
    else
    {
      this.currentStyle = 'incorrect';
      this.mistypeCounter++;
      if (letterCode >= 0)
      {
        this.letterScores[letterCode] -= 1
      }
    }
    //this.covertLetterToNumber(event.key.toString(), score);
  }

  // do things here that need to happen after the timer runs out
  // like calculating wpm, mistypes, score, etc
  timeUp()
  {
    this.timerDisplay = false;
    this.wpm = this.inputText.split(" ").length;
    console.log("wpm is: " + this.wpm);
    console.log("mistypes: " + this.mistypeCounter);
    console.log(this.letterScores);

    this.fakeElo = Math.floor(((this.wpm * 2) / (this.mistypeCounter + 1)) * 1000);

    this._updateService.updateScore(LoginComponent.userDetails[0].accountId, this.wpm*2, this.fakeElo, this.letterScores).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    })
  }
    
  covertLetterToNumber(letter : any)
  {
    letter = letter.toLowerCase();
    switch(letter)
    {
      case 'a':
        //this.letterScores['a'] += score;
        return 0;
      case 'b':
        //this.letterScores['b'] += score;
        return 1;
      case 'c':
        //this.letterScores['c'] += score;
        return 2;
      case 'd':
        //this.letterScores['d'] += score;
        return 3;
      case 'e':
        //this.letterScores['e'] += score;
        return 4;
      case 'f':
        //this.letterScores['f'] += score;
        return 5;
      case 'g':
        //this.letterScores['g'] += score;
        return 6;
      case 'h':
        //this.letterScores['h'] += score;
        return 7;
      case 'i':
        //this.letterScores['i'] += score;
        return 6;
      case 'j':
        //this.letterScores['j'] += score;
        return 9;
      case 'k':
        //this.letterScores['k'] += score;
        return 10;
      case 'l':
        //this.letterScores['l'] += score;
        return 11;
      case 'm':
        //this.letterScores['m'] += score;
        return 12;
      case 'n':
        //this.letterScores['n'] += score;
        return 13;
      case 'o':
        //this.letterScores['o'] += score;
        return 14;
      case 'p':
        //this.letterScores['p'] += score;
        return 15;
      case 'q':
        //this.letterScores['q'] += score;
        return 16;
      case 'r':
        //this.letterScores['r'] += score;
        return 17;
      case 's':
        //this.letterScores['s'] += score;
        return 18;
      case 't':
        //this.letterScores['t'] += score;
        return 19;
      case 'u':
        //this.letterScores['u'] += score;
        return 20;
      case 'v':
        //this.letterScores['v'] += score;
        return 21;
      case 'w':
        //this.letterScores['w'] += score;
        return 22;
      case 'x':
        //this.letterScores['x'] += score;
        return 23;
      case 'y':
        //this.letterScores['y'] += score;
        return 24;
      case 'z':
        //this.letterScores['z'] += score;
        return 25;
      default:
        return -1;    
    }
  }
    
}

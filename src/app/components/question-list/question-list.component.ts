import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Object[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Brad'
      },
      {
        text: 'What is your favourite colour?',
        answer: 'My favourite colour is red'
      },
      {
        text: 'What is your favourite language?',
        answer: 'My name favourite language is JavaScript'
      },
    ];
   }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Brad',
        hide: true
      },
      {
        text: 'What is your favourite colour?',
        answer: 'My favourite colour is red',
        hide: true
      },
      {
        text: 'What is your favourite language?',
        answer: 'My name favourite language is JavaScript',
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
  }

}

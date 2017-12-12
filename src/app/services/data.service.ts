import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    // this.questions = [
    //   {
    //     text: 'What is your name?',
    //     answer: 'My name is Brad',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favourite colour?',
    //     answer: 'My favourite colour is red',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favourite language?',
    //     answer: 'My name favourite language is JavaScript',
    //     hide: true
    //   }
    // ];
  }

  // Get Questions from local Storage
  getQuestions() {
    if (localStorage.getItem('questions') === null ) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  // Add Questions to Local Storage
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // Init local var
    let questions;

    if (localStorage.getItem('questions') === null ) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question
      questions.unshift(question);
      // Reset local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove Questions from Local Storage
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i , 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}

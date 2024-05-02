import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private generativeAI:GoogleGenerativeAI;
  private messageHistory:BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { 
    this.generativeAI = new GoogleGenerativeAI('AIzaSyDOsJ5rR1OaSO8a8qVHgsPJ-Ht66pSjJSs');
  }
   async generateText(prompt: string){
    const model = this.generativeAI.getGenerativeModel({model:'gemini-pro'});
    this.messageHistory.next({
      from: 'user' ,
      message: prompt
    });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    this.messageHistory.next({
      from: 'bot' , 
      message: text
    })
   }
   public getMessageHistory() : Observable<any> {
    return this.messageHistory.asObservable();
   }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: String[] = [];

  add = (msg: String) => {
    this.messages.push(msg);
  }

  clear = () => {
    this.messages = [];
  }
}
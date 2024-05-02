import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any[] = [];
  newMessageContent: string = '';
  utilisateur_id: number = 1; // Exemple d'ID utilisateur
  conversation_id: number = 1; 
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    // Chargez les messages initiaux depuis le backend lorsque le composant est initialisé
    this.loadMessages();
  }

  loadMessages() {
    this.chatService.getAllMessages().subscribe(messages => {
      this.messages = messages;
    });
  }
  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    // Faites quelque chose avec le fichier, par exemple, téléchargez-le ou affichez son nom
    console.log('File selected:', file.name);
  }
  
  sendMessage() {
    if (this.newMessageContent.trim() !== '') {
      const utilisateur_id = this.utilisateur_id;
      const conversation_id = this.conversation_id;
      
      this.chatService.sendMessage(this.newMessageContent, utilisateur_id, conversation_id).subscribe(response => {
        // Ajoutez le nouveau message à la liste des messages affichés
        this.messages.push(response);
        // Réinitialisez la zone de saisie de message
        this.newMessageContent = '';
      });
    }
  }
  
}
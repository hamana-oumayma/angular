import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-wholepage',
  templateUrl: './wholepage.component.html',
  styleUrls: ['./wholepage.component.css']
})
export class WholepageComponent implements OnInit {

  searchValue: string = '';
  messages: any[] = [];
  newMessageContent: string = '';
  utilisateur_id: number = 1; // Exemple d'ID utilisateur
  conversation_id: number = 1;

  users = [
    { id: 1, name: 'Faika', image: '/assets/images/img1.png', status: 'active now' },
    
    { id: 2, name: 'Bilel', image: '/assets/images/img5.png', status: 'active now' },
    { id: 3, name: 'khaled', image: '/assets/images/img6.png', status: 'active now' },
    { id: 5, name: 'eya', image: './assets/images/eyaa.jpg', status: 'active now' },
    { id: 6, name: 'walid', image: './assets/images/img5.png', status: 'active now' },
  ];

  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit(): void {
    // Chargez les messages initiaux depuis le backend lorsque le composant est initialisé
    this.loadMessages();
  }

  loadMessages() {
    this.chatService.getAllMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage() {
    if (this.newMessageContent.trim() !== '') {
      // Récupérez userId et conversationId depuis votre application
      // Assurez-vous qu'ils sont définis correctement avant d'appeler sendMessage
      const utilisateur_id = this.utilisateur_id; // Récupérez l'ID de l'utilisateur à partir de votre application
      const conversation_id = this.conversation_id; // Récupérez l'ID de la conversation à partir de votre application

      this.chatService.sendMessage(this.newMessageContent, utilisateur_id, conversation_id).subscribe(response => {
        // Rechargez les messages après avoir envoyé un nouveau message
        this.loadMessages();
        // Ajouter le nouveau message à la liste des messages affichés
        this.messages.push(response);
        // Réinitialiser la zone de saisie de message
        this.newMessageContent = '';
      });
    }
  }

  navigateToMessages(userId: number): void {
    this.router.navigate(['/messages', userId]);
  }
  filterUsers(): any[] {
    return this.users.filter(user => {
      // Filtrer les utilisateurs dont le nom correspond à la valeur de recherche (insensible à la casse)
      return user.name.toLowerCase().includes(this.searchValue.toLowerCase());
    });
}
}
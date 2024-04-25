import { Component, OnInit } from '@angular/core';
import { Conversation } from '../../models/conversation';
import { ConversationService } from '../../services/conversation.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent implements OnInit {
  usersChat: Utilisateur[] = [];
  activeChatUserId: number | null = null;
  chats: any[] = [];
  newMessage: string = '';

  constructor(
    private utilisateurService: UtilisateurService,
    private conversationService: ConversationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.utilisateurService.getAllUsers().subscribe(users => {
      this.usersChat = users;
    });
  }

  viewChat(user: Utilisateur) {
    this.activeChatUserId = user.id;
    this.loadChat(user.id);
  }

  loadChat(userId: number) {
    this.messageService.getMessageasByConversationId(userId).subscribe(messages => {
      this.chats = messages;
    });
  }
  onAddMessage() {
    if (this.newMessage.trim() !== '') {
      this.messageService.sendMessage(this.newMessage).subscribe((newMessage) => {
        this.newMessage = ''; // Effacer le champ de saisie
        this.chats.push(newMessage); // Ajouter le nouveau message à la liste des messages
      });
    }
  }
  
}
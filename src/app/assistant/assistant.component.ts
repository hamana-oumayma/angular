import { Component, OnInit } from '@angular/core';
import { GeminiService } from '../services/gemini.service';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent implements OnInit {
  chatbotOpen: boolean = false;
  prompt: string = '';
  loading: boolean = false;
  chatHistory: any[] = [];

  constructor(private geminiService: GeminiService) {
    this.geminiService.getMessageHistory().subscribe((res) => {
      if (res) {
        this.chatHistory.push(res);
      }
    });
  }

  async sendData() {
    if (this.prompt) {
      this.loading = true;
      const data = this.prompt;

      // Supprimer le message de bienvenue s'il est présent dans l'historique du chat
      if (this.chatHistory.length > 0 && this.chatHistory[0].from === 'bot') {
        this.chatHistory.shift(); // Supprimer le premier élément de l'historique du chat
      }

      await this.geminiService.generateText(data);

      this.loading = false;
      this.prompt = ''; // Effacer le champ de saisie après l'envoi
    }
  }

  formatText(text: string) {
    return text.replace(/\*/g, '');
  }

  toggleChat() {
    // Si le chatbot est fermé et que l'historique du chat est vide, afficher le message de bienvenue
    if (!this.chatbotOpen && this.chatHistory.length === 0) {
      this.chatHistory.push({ from: 'bot', message: "Bienvenue ! Comment puis-je vous aider aujourd'hui ?" });
    }
    this.chatbotOpen = !this.chatbotOpen;
  }
  
  closeChat() {
    console.log("closeChat() called");
    this.chatbotOpen = false;
  }
  copyMessage(message: string) {
    // Créer un élément textarea temporaire
    const textarea = document.createElement('textarea');
    textarea.value = message;
    document.body.appendChild(textarea);
    // Sélectionner le contenu du textarea
    textarea.select();
    // Copier le texte sélectionné dans le presse-papiers
    document.execCommand('copy');
    // Supprimer le textarea temporaire
    document.body.removeChild(textarea);
}

  ngOnInit(): void {
  }

}
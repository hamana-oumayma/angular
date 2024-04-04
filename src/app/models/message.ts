export interface Message {
    id: number;
    conversationId: number;
    utilisateurId: number;
    contenu: string;
    dateEnvoi: Date;
  }
export interface Conversation {
    id: number;
    name: string;
  }
  
  export interface Message {
    id: number;
    content: string;
    sender: string; // Assuming sender is the user's name
    timestamp: string; // You can use Date object or string representation
  }
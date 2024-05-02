export interface Task {
  id: number; // L'identifiant peut être présent ou non lors de la création
  title: string;
  description: string;
  createdBy: string;
  datecreation: Date;
 
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonUtilsService {

  constructor() { }

  supprimerContenuHTML(jsonAvecHTML: string): string {
    const indexPremierChevron = jsonAvecHTML.indexOf('<');
    if (indexPremierChevron !== -1) {
      return jsonAvecHTML.substring(0, indexPremierChevron);
    } else {
      return jsonAvecHTML;
    }
  }
}
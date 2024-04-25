import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.applyStylesToZones();
    const provincesMap = document.getElementById("provinces-map");
    const provinces = document.querySelectorAll<SVGElement>("#provinces-map path");
    const provinceName = document.getElementById("province-name") as HTMLElement;
    const provinceLabel = document.createElement("div");
    provinceLabel.id = "province-label";
    provinceLabel.style.position = "absolute";
    provinceLabel.style.backgroundColor = "#ffffff";
    provinceLabel.style.padding = "5px";
    provinceLabel.style.border = "1px solid #000000";
    provinceLabel.style.display = "none";
    document.body.appendChild(provinceLabel);

    const provinceNames: { [key: string]: string } = {
      "TN.BJ": "Béja",
      "TN.BA": "Ben Arous",
      "TN.BZ": "Bizerte",
      "TN.JE": "Jendouba",
      "TN.NB": "Nabeul",
      "TN.TU": "Tunis",
      "TN.KF": "Le Kef",
      "TN.KS": "Kasserine",
      "TN.GB": "Gabès",
      "TN.GF": "Gafsa",
      "TN.SZ": "Sidi Bouzid",
      "TN.SF": "Sfax",
      "TN.SL": "Siliana",
      "TN.MH": "Mahdia",
      "TN.MS": "Monastir",
      "TN.KR": "Kairouan",
      "TN.SS": "Sousse",
      "TN.ZA": "Zaghouan",
      "TN.ME": "Médenine",
      "TN.KB": "Kébili",
      "TN.TA": "Tataouine",
    };
    const provinceRoutes: { [key: string]: string } = {
      "TN.BA": "/Rades/tg1",        // Ben Arous
      "TN.SS": "/Sousse/tg1",       // Sousse
      "TN.SF": "/Feriana/tg1",        // Sfax
      "TN.TU": "/Goulette/tg1",     // Tunis
      "TN.ZA": "/Birmchergua/tg1", // Zaghouan
      "TN.GB": "/Bouchemma/tg3"     // Gabès
    };

    const navigateToRoute = (event: MouseEvent) => {
      for (const id in provinceRoutes) {
        const provinceElement = document.getElementById(id);
        if (provinceElement && provinceElement.contains(event.target as Node)) {
          const route = provinceRoutes[id];
          this.router.navigate([route]);
          break;
        }
      }
    };

    const showProvinceName = (event: MouseEvent) => {
      for (const id in provinceNames) {
        const provinceElement = document.getElementById(id);
        if (provinceElement && provinceElement.contains(event.target as Node)) {
          const name = provinceNames[id];
          provinceName.textContent = name;
          break;
        }
      }
    };

    const showProvinceLabel = (event: MouseEvent) => {
      const rect = (event.target as SVGGraphicsElement).getBoundingClientRect() as DOMRect;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      for (const id in provinceNames) {
        const provinceElement = document.getElementById(id);
        if (provinceElement && provinceElement.contains(event.target as Node)) {
          const name = provinceNames[id];
          console.log(`Cursor is over ${name} (${id}) at position (${x}, ${y})`);
          provinceLabel.textContent = name;
          provinceLabel.style.top = `${event.clientY + 10}px`;
          provinceLabel.style.left = `${event.clientX + 10}px`;
          provinceLabel.style.display = "block";
          break;
        }
      }
    };

    const hideProvinceLabel = () => {
      provinceLabel.style.display = "none";
    };

    provinces.forEach((province) => {
      province.addEventListener("mousemove", showProvinceName);
      province.addEventListener("mouseover", showProvinceLabel);
      province.addEventListener("mouseout", hideProvinceLabel);
      province.addEventListener("click", navigateToRoute);
    });
  }

  applyStylesToZones(): void {
    const zoneStyles: { [key: string]: string } = {
      "TN.BA": "#5c6bc0",  // Rouge pour Ben Arous
      "TN.TU": "#5c6bc0",  // Vert pour Tunis
      "TN.SF": "#5c6bc0",  // Bleu pour Sfax
      "TN.SS": "#5c6bc0",  // Jaune pour Sousse
      "TN.GF": "#5c6bc0",  // Rose pour Gafsa
      "TN.ZA": "#5c6bc0",  // Cyan pour Zaghouan
      "TN.GB":"#5c6bc0",  // Orange pour Gabès
    };

    for (const zoneId in zoneStyles) {
      const zoneElement = document.getElementById(zoneId);
      if (zoneElement) {
        zoneElement.style.fill = zoneStyles[zoneId];
      }
    }
  }}

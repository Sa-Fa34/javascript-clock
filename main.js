let currentTimezone = "france"; // Valeur par défaut

// Fonction pour changer le fuseau horaire
function setTimezone(timezone) {
  currentTimezone = timezone;
  clock(); // Met à jour l'horloge immédiatement après le changement de fuseau horaire
}

clock();

function clock() {
  const date = new Date();
  let hours, minutes, seconds;

  // Selon le fuseau horaire sélectionné, on ajuste l'heure
  switch (currentTimezone) {
    case "france":
      // France (UTC+1 en hiver, UTC+2 en été - ici on prend UTC+1 pour simplification)
      hours = (date.getUTCHours() + 1) % 12;
      break;
    case "usa":
      // USA (ex. UTC-5 pour la côte est - à ajuster selon ton besoin)
      hours = (date.getUTCHours() - 5 + 24) % 12;
      break;
    case "japan":
      // Japon (UTC+9)
      hours = (date.getUTCHours() + 9) % 12;
      break;
    default:
      hours = (date.getUTCHours() + 1) % 12;
  }

  minutes = date.getUTCMinutes();
  seconds = date.getUTCSeconds();

  // Calcul des angles
  const hour = hours * 30; // Chaque heure correspond à un angle de 30° (360° / 12)
  const minute = minutes * 6; // Chaque minute correspond à un angle de 6° (360° / 60)
  const second = seconds * 6; // Chaque seconde correspond à un angle de 6° (360° / 60)

  // Application des rotations aux aiguilles de l'horloge
  document.querySelector(".heure").style.transform = `rotate(${hour}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
  document.querySelector(".seconde").style.transform = `rotate(${second}deg)`;
}

// Met à jour l'horloge toutes les secondes
setInterval(clock, 1000);

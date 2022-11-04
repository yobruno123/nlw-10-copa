function creatGame(player1, hour, player2) {
  return `
     <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
     </li>
  `
}

let delay = -0.3;
function creatCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<samp>${day}</samp> </h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML = 
  
        creatCard("24/11", "Quinta", creatGame("brazil", "16:00", "serbia")) +

        creatCard("28/11","Segunda",creatGame("brazil", "13:00", "switzerland") +

        creatGame("portugal", "16:00", "uruguai")) +

        creatCard("02/12", "Sexta", creatGame("brazil", "16:00", "cameron"))
      
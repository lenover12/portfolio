function lookupPlayer() {
  var playerNameInput = document.getElementById('playerName').value;
  var playerInfoContainer = document.getElementById('playerInfo');

  playerInfoContainer.innerHTML = '';

  fetch(`https://api.ashcon.app/mojang/v2/user/${playerNameInput}`)
      .then(response => response.json())
      .then(data => {
          if (data.error) {
              playerInfoContainer.innerHTML = "<p>Player not found</p>";
          } else {
              var playerName = data.username;
              var playerUUID = data.uuid;
              var skinURL = `https://crafatar.com/avatars/${playerUUID}`;

              var playerNameElement = document.createElement('h6');
              playerNameElement.textContent = playerName;
              var playerSkinImage = document.createElement('img');
              playerSkinImage.src = skinURL;
              playerSkinImage.alt = "Player Skin";
              var playerUUIDElement = document.createElement('p');
              playerUUIDElement.textContent = playerUUID;

              playerInfoContainer.appendChild(playerNameElement);
              playerInfoContainer.appendChild(playerSkinImage);
              playerInfoContainer.appendChild(playerUUIDElement);
          }
      })
      .catch(error => console.error('Error fetching player data:', error));
}


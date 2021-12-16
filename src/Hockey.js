import React, { Component } from 'react';

const hockeyPlayer = {
    name: 'Anson Carter',
    team: 'MSU'
  }
  const hockeypayload = [
    {
      name: 'Hockey Player 2',
      team: 'Team 2'
    },
    {
      name: 'Hockey Player 3',
      team: 'Team 3'
    },
    {
      name: 'Hockey Player 4',
      team: 'Team 4'
    },
    {
      name: 'Hockey Player 5',
      team: 'Team 5'
    },
  ]
  
  const displayhockeyPlayers = hockeypayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Player, {hockeyPlayer.name}</h1>
        <p>Team, {hockeyPlayer.team}</p>
      </div>
    );
  });
  
  //an array of all players on team 4
  const searchTeam4 = hockeypayload.filter((player, idx) => {
    if(player.team === 'Team 4') {
      return true;
    } else {
      return false;
    }
  });
  
  const displayTeam4 = searchTeam4.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Player, {hockeyPlayer.name}</h1>
        <p>Team, {hockeyPlayer.team}</p>
      </div>
    );
  });

class Hockey extends Component {
    render() {
        return (
            <div>
                <h1>Hockey</h1>
                <div>
                    <h1>Player, {hockeyPlayer.name}</h1>
                    <p>Team {hockeyPlayer.team}</p>
                    <div>
                        {displayhockeyPlayers}
                        {displayTeam4}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hockey;
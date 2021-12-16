import React, { Component } from 'react';

const footballPlayer = {
    name: 'Thomas Brady',
    team: 'Bucs'
  }
  const footballpayload = [
    {
      name: 'Football Player 2',
      team: 'Team 2'
    },
    {
      name: 'Football Player 3',
      team: 'Team 3'
    },
    {
      name: 'Football Player 4',
      team: 'Team 4'
    },
    {
      name: 'Football Player 5',
      team: 'Team 5'
    },
  ]
  
  const displayfootballPlayers = footballpayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Player, {footballPlayer.name}</h1>
        <p>Team, {footballPlayer.team}</p>
      </div>
    );
  });
  
  //an array of all players on team 4
  const searchTeam4 = footballpayload.filter((player, idx) => {
    if(player.team === 'Team 4') {
      return true;
    } else {
      return false;
    }
  });
  
  const displayTeam4 = searchTeam4.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Player, {footballPlayer.name}</h1>
        <p>Team, {footballPlayer.team}</p>
      </div>
    );
  });

class Football extends Component {
    render() {
        return (
            <div>
                <h1>Football</h1>
                <div>
                    <h1>Player, {footballPlayer.name}</h1>
                    <p>Team {footballPlayer.team}</p>
                    <div>
                        {displayfootballPlayers}
                        {displayTeam4}
                    </div>
                </div>
            </div>
        )
    }
}

export default Football;
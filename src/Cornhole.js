import React, { Component } from 'react';

const cornholePlayer = {
    name: 'Richie Rich',
    team: 'UCLA'
  }
  const golfpayload = [
    {
      name: 'cornholePlayer 2',
      team: 'Team 2'
    },
    {
      name: 'cornholePlayer 3',
      team: 'Team 3'
    },
    {
      name: 'cornholePlayer 4',
      team: 'Team 4'
    },
    {
      name: 'cornholePlayer 5',
      team: 'Team 5'
    },
  ]
  
  const displaycornholePlayers = golfpayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Player, {cornholePlayer.name}</h1>
        <p>Team, {cornholePlayer.team}</p>
      </div>
    );
  });
  
  //an array of all players on team 4
  const searchTeam4 = golfpayload.filter((player, idx) => {
    if(player.team === 'Team 4') {
      return true;
    } else {
      return false;
    }
  });
  
  const displayTeam4 = searchTeam4.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Player, {cornholePlayer.name}</h1>
        <p>Team, {cornholePlayer.team}</p>
      </div>
    );
  });

class Cornhole extends Component {
    render() {
        return (
            <div>
                <h1>Hockey</h1>
                <div>
                    <h1>Player, {cornholePlayer.name}</h1>
                    <p>Team {cornholePlayer.team}</p>
                    <div>
                        {displaycornholePlayers}
                        {displayTeam4}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cornhole;
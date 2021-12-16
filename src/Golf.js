import React, { Component } from 'react';

const golfPlayer = {
    name: 'Tiger Woods',
    team: 'USC'
  }
  const golfpayload = [
    {
      name: 'GolfPlayer 2',
      team: 'Team 2'
    },
    {
      name: 'GolfPlayer 3',
      team: 'Team 3'
    },
    {
      name: 'GolfPlayer 4',
      team: 'Team 4'
    },
    {
      name: 'GolfPlayer 5',
      team: 'Team 5'
    },
  ]
  
  const displaygolfPlayers = golfpayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Player, {golfPlayer.name}</h1>
        <p>Team, {golfPlayer.team}</p>
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
        <h1>Player, {golfPlayer.name}</h1>
        <p>Team, {golfPlayer.team}</p>
      </div>
    );
  });

class Golf extends Component {
    render() {
        return (
            <div>
                <h1>Hockey</h1>
                <div>
                    <h1>Player, {golfPlayer.name}</h1>
                    <p>Team {golfPlayer.team}</p>
                    <div>
                        {displaygolfPlayers}
                        {displayTeam4}
                    </div>
                </div>
            </div>
        )
    }
}

export default Golf;
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../actions/player'
import AddPlayerForm from '../components/AddPlayerForm'
import Player from '../components/Player'
import Header from '../components/Header'


class Scoreboard extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
  }

  render() {
    const {dispatch, players} = this.props;
    const addPlayer = bindActionCreators(ActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(ActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(ActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
        <Player
          index={index}
          name={player.name}
          score={player.score}
          key={player.name}
          updatePlayerScore={updatePlayerScore}
          removePlayer={removePlayer}
        />
    ));

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard);

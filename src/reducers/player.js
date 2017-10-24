import * as PlayerActions from '../actions/player'

const initialState = [
  {
    name: 'Dan K',
    score: 31,
  },
  {
    name: 'My Bro 1',
    score: 20,
  },
  {
    name: 'My Bro 2',
    score: 50,
  },
];

export default function Player(state=initialState, action) {
  switch (action.type) {

    case PlayerActions.ADD_PLAYER:
      return [
        ...state,
        {
          name: action.name,
          score: 0,
        }
      ];

    case PlayerActions.REMOVE_PLAYER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];

    case PlayerActions.UPDATE_PLAYER_SCORE:
      return state.map((player, index) => {
        if (index === action.index) {
          return {
            ...player,
            score: player.score + action.score,
          };
        }
        return player;
      });

    default:
      return state;
  }
}

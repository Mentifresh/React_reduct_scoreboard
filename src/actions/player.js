// This is an action
export const ADD_PLAYER = 'player/ADD_PLAYER'
export const REMOVE_PLAYER = 'player/REMOVE_PLAYER'
export const UPDATE_PLAYER_SCORE = 'player/UPDATE_PLAYER_SCORE'


// This is an action creator
export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    name,
  };
};

export const removePlayer = (index) => {
  return {
    type: REMOVE_PLAYER,
    index
  };
};

export const updatePlayerScore = (index, score) => {
  return {
    type: UPDATE_PLAYER_SCORE,
    index,
    score,
  };
};

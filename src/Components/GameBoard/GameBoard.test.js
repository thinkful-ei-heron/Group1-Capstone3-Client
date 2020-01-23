import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './GameBoard';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';


describe('GameBoard component', () => {
  let gameData = {
      currentUser: null,
      gameId: null,
      opponentHits: [],
      opponentMisses: [],
      opponentShips: null,
      room_id: null,
      turn: null,
      userHits: [],
      userMisses: [],
      userShips: [],
      shipTileValues: [],
      resumedGame: null,
      shipsReady: null,
    }

    beforeAll(() => {
      window.scrollTo = jest.fn();
    })

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><GameBoard gameData={gameData}/></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
  });
});



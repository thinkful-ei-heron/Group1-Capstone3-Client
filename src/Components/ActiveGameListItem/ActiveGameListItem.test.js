import React from 'react';
import ReactDOM from 'react-dom';
import ActiveGameListItem from './ActiveGameListItem';

describe('ActiveGameListItem component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ActiveGameListItem 
      key={1} 
      game={{}} 
      userId={{}}
      setError= {{}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
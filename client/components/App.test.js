import React from 'react';
import App from './App.jsx';
import { shallow } from 'enzyme'; 
//shallowmethod that renders component and show obj structure 

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(3);
  });
})
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('render title as car parking manager', () => {
  render(<BrowserRouter><Home/></BrowserRouter>);
  const linkElement = screen.getByText(/Car Parking Manager/i);
  expect(linkElement).toBeInTheDocument();
});
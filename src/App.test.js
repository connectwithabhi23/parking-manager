import { render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('rendering app component and navigate to homepage', () => {
  render(<BrowserRouter><App></App> </BrowserRouter>);
  userEvent.click(screen.getByText(/Car Parking Manager/i))
  expect(screen.getByText(/Car Parking Manager/i)).toBeInTheDocument()
  
  
});

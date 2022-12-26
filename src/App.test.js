import { render} from '@testing-library/react';
import App from './App';

test('rendering app component', () => {
  render(<App/>);
  // const linkElement = screen.getByText(/Car Parking Manager/i);
  // expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "../App.js";

describe( 'TEST APP', () => {
 test('Menu links work', async () => {
  render(<App />);
  const user = userEvent.setup()
  const aboutLink =  screen.getByText(/posts/i);
  await user.click(aboutLink);
  expect(screen.getByText(/This is about page/i)).toBeInTheDocument();
})})

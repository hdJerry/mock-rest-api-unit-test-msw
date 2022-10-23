import {
  render,
  screen,
} from '@testing-library/react';
import 'whatwg-fetch';
import App from './App';
import { server } from './mock/serverSetUp';


beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('renders App and fetch data', async () => {
  await render(<App />);
  const loading = await screen.findByText('loading...');
  expect(loading).toBeInTheDocument();
  const listNode = await screen.findByTestId('posts')
  expect(loading).not.toBeInTheDocument();
  expect(listNode.childNodes).toHaveLength(1);
});

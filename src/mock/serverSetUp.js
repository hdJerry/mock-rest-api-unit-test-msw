import { setupServer } from 'msw/node';
import postHandler from './postHandler';

const server = setupServer(
  postHandler
)

export {
  server,
}
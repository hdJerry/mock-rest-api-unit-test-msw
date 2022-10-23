import { rest } from 'msw';
const posts = [{
  title: 'title a',
  body: 'body a'
}];

const postHandler = rest.get('https://jsonplaceholder.typicode.com/posts', (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(posts)
  )
})
export default postHandler;
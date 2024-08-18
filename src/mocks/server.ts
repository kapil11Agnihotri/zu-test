import { setupServer } from 'msw/node';
import { rest } from 'msw';

// Define request handlers
const handlers = [
  rest.post('/api/evaluate', (req, res, ctx) => {
    return res(
      ctx.json({
        score: 85,
        criteria: {
          A: 90,
          B: 80,
          C: 70,
        },
        date: new Date().toISOString(),
      })
    );
  }),
];

// Set up the MSW server with the handlers
export const server = setupServer(...handlers);

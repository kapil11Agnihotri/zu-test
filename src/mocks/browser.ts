import { setupWorker, rest } from 'msw';

const handlers = [
  rest.post('/api/evaluate', (req, res, ctx) => {
    console.log('Intercepted request to /api/evaluate');
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

export const worker = setupWorker(...handlers);

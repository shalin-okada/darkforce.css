// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from 'next';

type HelloApiResponse = {
  name: string;
};

const hello: NextApiHandler<HelloApiResponse> = (req, res): void => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default hello;

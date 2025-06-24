import http, { IncomingMessage, ServerResponse } from 'http';
import { PrismaClient } from './src/generated/prisma';

const prisma = new PrismaClient();

setInterval(() => {
  fetch('http://10.0.73.65')
    .then(async (res) => {
      console.log(res.statusText, res.status, res.ok);
      await prisma.timeCheck.create({
        data: {
          date: new Date(),
          statusCode: res.status,
          statusText: res.statusText,
        },
      });
    })
    .catch((err) => {
      console.error('ошибка:', err);
    });
}, 60_000);

// http
//   .createServer(async (req: IncomingMessage, res: ServerResponse) => {
//     console.log(req.headers.host, new Date());
//     const res2 = await prisma.timeCheck.create({ data: { date: new Date() } });
//     console.log('🚀 ~ .createServer ~ res2:', res2);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World!');
//     res.end();
//   })
//   .listen(3003);

// setInterval(() => {
//   console.log('🚀 ~ setInterval');
// }, 5000);

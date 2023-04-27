import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import * as position from './routes/positions';
import * as user from './routes/user';
import * as auth from './routes/auth';
import * as vacancy from './routes/vacancies'
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.use('/auth', auth.default);
app.use('/positions', position.default);
app.use('/users', user.default);
app.use('/vacancies', vacancy.default);
app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
import createRouter from './routes';

export default function App() {
  const signed = false;
  return createRouter(signed);
}

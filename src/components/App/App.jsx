import { Header } from '../Header/header';

export const App = () => {
  return (
    <>
      <Header />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React template
      </div>
    </>
  );
};

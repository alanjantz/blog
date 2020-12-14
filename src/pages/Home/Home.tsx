import React, { useCallback } from 'react';

const Home: React.FC = () => {
  const getHello = useCallback((): string => 'Hello', []);

  return (
    <>
      <p>{getHello()}</p>
    </>
  );
};

export default Home;

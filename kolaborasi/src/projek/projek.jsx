import React from 'react';

const MyComponent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ini project react-nama antum</h1>
      <button style={styles.button}>foto</button>
    </div>
  );
};

const styles = {
  container: {
    border: '3px solid black',
    borderRadius: '10px',
    padding: '30px',
    textAlign: 'center',
    width: 'fit-content',
    margin: '50px auto',
    fontFamily: "'Comic Sans MS', cursive, sans-serif"
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  button: {
    fontSize: '20px',
    padding: '10px 40px',
    borderRadius: '10px',
    border: '3px solid black',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontFamily: "'Comic Sans MS', cursive, sans-serif"
  }
};

export default MyComponent;

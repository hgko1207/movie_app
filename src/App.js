import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const foodLike = [
  {
    name: "Kimchi",
    image: "https://assets.epicurious.com/photos/57990a15437fcffe02f722fd/6:4/w_620%2Ch_413/traditional-napa-cabbage-kimchi.jpg"
  },
  {
    name: "Samgyeopsal",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-pNQI_9YAcJM%2FVBTxavO6YMI%2FAAAAAAAACk4%2F-OHN-keA9UU%2Fs1600%2F20140909_204156.jpg&f=1&nofb=1"
  },
];

function App() {
  return (
    <div>
      {foodLike.map(dish =>
        <Food name={dish.name} picture={dish.image} />
      )}
    </div>
  );
}

export default App;

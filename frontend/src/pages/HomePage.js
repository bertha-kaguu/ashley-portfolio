import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = ({ cards }) => {
  const [items, setItems] = useState(cards);

  const handleNext = () => {
    setItems(prevItems => {
      const [first, ...rest] = prevItems;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setItems(prevItems => {
      const last = prevItems[prevItems.length - 1];
      const rest = prevItems.slice(0, prevItems.length - 1);
      return [last, ...rest];
    });
  };

  const handleItemClick = (clickedIndex) => {
    // If the clicked item is already active (at index 1), do nothing.
    if (clickedIndex === 1) {
      return;
    }

    // Calculate the number of rotations needed to bring the clicked item to the active position.
    // A "next" operation is a single rotation.
    const rotations = (clickedIndex - 1 + items.length) % items.length;

    // Apply the rotations.
    setItems(prevItems => {
      const itemsToMove = prevItems.slice(0, rotations);
      const remainingItems = prevItems.slice(rotations);
      return [...remainingItems, ...itemsToMove];
    });
  };


  // The second item in the array is always the active one.
  const activeSlideImage = items.length > 1 ? items[1].image : '';

  // Preload images to avoid flickering on background change.
  useEffect(() => {
    cards.forEach(card => {
      const img = new Image();
      img.src = card.image;
    });
  }, [cards]);

  return (
    <div className="home-body" style={{ backgroundImage: `url(${activeSlideImage})` }}>

      <div className="home-container">
        <div className="slide">
          {items.map((item) => (
            <div key={item.title} className="item" style={{ backgroundImage: `url(${item.image})` }} onClick={handleNext}>
              <div className="content">
                <div className="name">{item.title}</div>
                <div className="des">{item.description}</div>
                <Link to={item.link}><button>See More</button></Link>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <button className="prev" onClick={handlePrev}>◁</button>
          <button className="next" onClick={handleNext}>▷</button>
        </div>
        </div>
    </div>
  );
};

export default HomePage;

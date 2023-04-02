import React from 'react';

const CountColumns = ({ cardsByRow, setCardsByRow }) => {
  return (
    <div className="colum-count-container">
      <span className="colum-count-description">Specify cards by row</span>
      <button
        className=" minus-buton-radius"
        onClick={() =>
          setCardsByRow((prevValue) =>
            prevValue > 1 ? prevValue - 1 : prevValue
          )
        }
      >
        -
      </button>
      <span className="count-number-colums">{cardsByRow}</span>
      <button
        className=" plus-buton-radius"
        onClick={() =>
          setCardsByRow((prevValue) =>
            prevValue < 6 ? prevValue + 1 : prevValue
          )
        }
      >
        +
      </button>
    </div>
  );
};

export default CountColumns;

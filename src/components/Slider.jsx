import React, { useState, useMemo, useCallback } from 'react'

const AllowNext = (i, size) => i < (size - 1);
const AllowPrev = (i) => i > 0;

function Slider({ imgs, initIndex }) {
  const [index, setIndex] = useState(initIndex ?? 0);
  const src = useMemo(() => imgs[index], [imgs, index]);

  const isNextAllowed = useMemo(() => (
    AllowNext(index, imgs.length)
  ), [imgs.length, index]);

  const isPrevAllowed = useMemo(() => (
    AllowPrev(index)
  ), [index]);

  const nextImg = useCallback(() => {
      if (isNextAllowed) {
        setIndex((i) => i + 1);
      }
  },[isNextAllowed]);

  const prevImg = useCallback(() => {
      if (isPrevAllowed) {
        setIndex((i) => i - 1);
      }
  },[isPrevAllowed]);

  return (
    <div className="slider-container">
      <button className="prev-btn" disabled={!isPrevAllowed} onClick={prevImg}>
        {"<"}
      </button>

      <img className="product-card-img" src={src} alt="Product" />

      <button className="next-btn" disabled={!isNextAllowed} onClick={nextImg}>
        {">"}
      </button>
    </div>
  );
}

export default Slider;

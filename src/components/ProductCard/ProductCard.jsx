import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { getSizes, getProduct } from '../../services/api';
import CardProperty from './CardProperty';
import Currency from '../Currency';
import SizeBox from './SizeBox';
import Slider from '../Slider';
import Select from '../Select';

function ProductCard({ id }) {
  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [color, setColor] = useState(0);

  useEffect(() => {
    getProduct(Number.parseInt(id)).then((data) => {
      setProduct(data);
    });
  }, [id]);

  const getCurrectColor = useCallback(() => {
    return product?.colors[color];
  }, [color, product?.colors]);

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

  const actualSizes = useMemo(() => {
    const currentColor = getCurrectColor();

    return sizes.map(({id, label, number}) => {
      const isActive = currentColor.sizes.includes(id);

      return (
        <SizeBox
          key={`ProductSize[${id}]`}
          isActive={isActive}
          number={number}
          label={label}
        />
      );
    });
  }, [getCurrectColor, sizes]);

  const { images, description, price } = useMemo(() => {
    const { description, price, images = [] } = getCurrectColor() ?? {};
    return { images, description, price };
  }, [getCurrectColor]);

  const items = useMemo(() => {
    return product?.colors.map(({ id, name }, i) => (
      { id: id, value: i, label: name }
    ));
  }, [product?.colors]);

  function changeHandler(newValue) {
    setColor(newValue);
  }

  return (
    <div>
      <h2 className="product-card-name">
        {product?.name}
      </h2>
        
      <Slider imgs={images} />

      <CardProperty label="Color">
        <Select items={items} onChange={changeHandler} />
      </CardProperty>

      <CardProperty label="Description">
        <p>{description}</p>
      </CardProperty>

      <CardProperty label="Price">
        <Currency price={price} />
      </CardProperty>

      <CardProperty label="Actual sizes">
        <ul className="product-sizes">
          {actualSizes}
        </ul>
      </CardProperty>
    </div>
  );
}

export default ProductCard;

import React, { useEffect, useState, useMemo } from 'react'
import ProductListItem from './ProductListItem';
import { getProducts } from '../services/api';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        });
    }, []);
    
    const ProductsCards = useMemo(() => {
        return products.map(({ id, name, colors }) => {
            const { price, description, images } = colors[0];
            const linkToProductCard = `/products/${id}`;
 
            return (
                <ProductListItem
                    key={`Product[${id}]`}
                    description={description}
                    link={linkToProductCard}
                    imgUrl={images[0]}
                    price={price}
                    name={name}
                />
            );
        });
    }, [products]);

    return ProductsCards;
}

export default ProductList;

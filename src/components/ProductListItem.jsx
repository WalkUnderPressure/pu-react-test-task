import React from 'react'
import { Link } from 'react-router-dom';
import Currency from './Currency';

function ProductListItem({link, name, imgUrl, description, price }) {
    return (
        <div className='product-card'>
            <Link to={link}>
                <div className="product-card-box">
                    <h2 className="product-card-name">
                        {name}
                    </h2>

                    <img className='product-card-img' src={imgUrl} alt={name} />

                    <p className="product-card-description">{description}</p>

                    <div className="product-card-price">
                        <p>Price:</p>
                        <Currency price={price} />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductListItem;

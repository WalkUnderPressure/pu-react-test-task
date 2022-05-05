import React, {memo} from 'react'

const SizeBox = memo(({label, number, isActive}) => {
    return (
        <li active={isActive.toString()} className="product-size-box">
            <p>{label}</p>
            <p>{number}</p>
        </li>
    );
});

export default SizeBox;

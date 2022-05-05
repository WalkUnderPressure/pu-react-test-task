import React, { memo } from 'react'

const CardProperty = memo(({ label, children }) => (
    <div className="product-card-property">
        <p>{`${label}:`}</p>
        {children}
    </div>
));

export default CardProperty;

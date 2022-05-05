
import React, { memo } from 'react'
const DEFAULT_CURRENCY_SYMBOL = '$';

const Currency = memo(({ price, symbol }) => {
    const CurrencySymbol = symbol ?? DEFAULT_CURRENCY_SYMBOL;

    return (
        <p>
            <span className="currency-symbol">{CurrencySymbol}</span>
            <span className="currency-price">{price}</span>
        </p>
    );
});

export default Currency;

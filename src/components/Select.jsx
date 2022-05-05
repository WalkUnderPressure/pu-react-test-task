import React, { memo, useMemo, useState } from 'react'

const Select = memo((props) => {
    const { items, onChange } = props;

    const [selected,setSelected]=useState(items?.[0].value);

    const options = useMemo(() => {
        return items?.map(({ id, value, label }) => (
            <option key={`Select[${id}]`} value={value}>
                {label}
            </option>
        ));
    }, [items]);

    const onSelect = (e) => {
        const newSelected = e.target.value;
        setSelected(newSelected);
        onChange(newSelected);
    };

    return(
        <select value={selected} onChange={onSelect}>
            {options}
        </select>
    );
});

export default Select;

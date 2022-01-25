import * as React from 'react';
 
interface Props {
    isChecked: boolean
}

export const Star = (props: Props): JSX.Element => (
    <span className="icon">
        <i className={`fa${props.isChecked ? "s" : "r"} fa-star`}></i>
    </span>
) 

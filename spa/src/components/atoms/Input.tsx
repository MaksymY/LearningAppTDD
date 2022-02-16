import React, { ReactNode } from 'react';

interface Inputprops {
    type: string;
    placeholder: string;
}

export const Input = (props: Inputprops) => (
    <input type={props.type} placeholder={props.placeholder}/>
)
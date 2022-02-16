import React, { ReactNode } from 'react';

interface LabelProps {
    label: string;
    children: ReactNode;
}

export const Label = (props: LabelProps) => (
    <label>{props.label}
        {props.children}
    </label>
)

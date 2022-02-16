import React from 'react';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

export const Card = () => (
    <div className="cards">
        <Label label="recto">
            <Input placeholder="Ecrivez" type="text" />
        </Label>
        
        <Label label="verso">
            <input placeholder="Placeholder" type="text"/>
        </Label>
    </div>
)
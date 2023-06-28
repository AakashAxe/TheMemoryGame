import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import ChildCheckBox from './ChildCheckBox';

const StartScreen = () => {


    return (
        
        <div>
            <h1>The Memory Game</h1>
            <FormGroup>
                <ChildCheckBox />
            </FormGroup>
            
        </div>
    )
}

export default StartScreen;
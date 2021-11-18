import React from 'react';
import { styled } from '@mui/material/styles';
import {Button} from '@mui/material';


const Input = styled('input')({
    display: 'none',
});

export const UploadButtons = ({url,onChange}) => {

    return (

            <label htmlFor="contained-button-file" style={{display:!url?'block':'none'}}>
                <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onChange} />
                <Button variant="contained" component="span" >
                    Загрузить
                </Button>
            </label>
    );
};


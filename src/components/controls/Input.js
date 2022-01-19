import React from 'react'
import { TextField } from '@material-ui/core';

function Input(props) {

    const { name, label, value,error=null, onChange, style } = props;
   
    return (
        <TextField
           
            // style ={{width: '300px'}} 
            style = {{style}}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            // {...(error && {error:true,helperText:error})}
        />
    )
}

export default Input

import React from 'react'
import {FormControl, InputLabel, Select as MuiSelect, MenuItem} from '@material-ui/core'
import '../../index.css';

export default function Select(props) {
    const { name, label, value, onChange, options, className } = props;
    
    
    return (
        <FormControl
        className = {className}
        variant="outlined"
        >
        <InputLabel id="demo-simple-select-helper-label">{label} </InputLabel> 
        <MuiSelect
            labelId="demo-simple-select-helper-label"
            label={label}
            name = {name}
            value={value}
            onChange={onChange}
        >
            <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
        </MuiSelect>
        </FormControl>
    )
}

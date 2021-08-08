import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
  

export default function item (props){
    // const classes = useStyles()
    return (
        <div >
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <Checkbox 
                        onClick={()=>props.checkboxHandler(props.id)}
                        color="primary"
                        checked={props.checked}/>
                    <span 
                        onClick={()=>props.propertyHandler(props.id)}
                        style={{ textDecoration: props.checked ? "line-through" : null,
                            marginLeft:16, fontWeight: props.property ? "bold" : null,}}>
                            {props.title}
                    </span>
                </Grid>
                <Grid item xs={2}>
                        <DeleteIcon 
                            onClick={()=>props.deleteButtonHandler(props.id)}
                            style={{marginLeft: "20%"}}
                        />
                </Grid>
            </Grid>
        </div>
    )
}

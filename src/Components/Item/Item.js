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
                    {props.title}
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

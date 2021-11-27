import React from 'react'
import { blue, green } from '@material-ui/core/colors'
// import { withStyles } from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'



export default function item (props){

    const checkboxTheme = createMuiTheme({
        palette: {
          primary:{
            main: blue[300],
            },
          secondary: {
            main: blue[700],
          },
          default:{
            main: green[300],
          }
        },
      })
    // const classes = useStyles()
    return (
        <div >
            <Grid container spacing={3}>
                <Grid item xs={10}>
                <ThemeProvider theme={checkboxTheme}>
                    <Checkbox 
                        onClick={()=>props.checkboxHandler(props.id)}
                        color={!props.property?"primary":"secondary"}
                        checked={props.checked}/>
                 </ThemeProvider>
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

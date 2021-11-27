import React, { Component } from 'react'
import {Switch} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { blue, green} from '@material-ui/core/colors';

export default class Settings extends Component {

    switchTheme = createMuiTheme({
        palette: {
          primary:{
            main: blue[700],
            },
          secondary: {
            main: green[300],
          },
        },
      })

      onlineModeHandler = ()=>{
        let onlineMode = this.props.onlineMode;
        onlineMode = !onlineMode;
        this.props.updateOnlineMode(onlineMode);
    }

    render() {
        return (
            <Grid container spacing={3}>
                {this.props.onlineMode ?
                 <label style={{marginLeft: "20px"}}>Online</label>:
                 <label style={{marginLeft: "20px"}}>Offline</label>
                }
                <Grid item xs={2}>
                    <ThemeProvider theme={this.switchTheme}>
                        <Switch 
                            checked={this.props.onlineMode}
                            name="onlineMode"
                            id="onlineMde"
                            color="primary"
                            onChange={this.onlineModeHandler}
                        />
                    </ThemeProvider>
                </Grid>
                
                   
                
            </Grid>
        )
    }
}

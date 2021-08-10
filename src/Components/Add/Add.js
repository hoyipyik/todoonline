import React from 'react'

import Grid from '@material-ui/core/Grid'

const add = (props) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <form>
                <label htmlFor="title">
                    <h3>What's Your Plan Today</h3>
                </label>
                <input
                    type="text"
                    onChange={(event)=>props.inputHandler(event)}
                    value={props.title}
                />
                <input 
                    type="button" 
                    value="Add"
                    onClick={props.buttonHandler}/>
            </form>
            </Grid>
        </Grid>
    )
}

export default add

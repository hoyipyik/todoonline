import React, { PureComponent } from 'react'

import Add from "./Components/Add/Add"
import List from "./container/List/List"
import axios from "./axios-post"

export class App extends PureComponent {

  state ={
    title: '',
    checked: false,
    data: []
  }

  componentDidMount(){
    axios.get("/data.json")
      .then(responce=>{
        console.log("Mount data", responce)
        if(responce.data!==null){
          const data = Object.values(responce.data.valueOf())
          console.log(data[data.length-1])
          this.setState({
            data: data[data.length-1]
          })
        }
      })
      .catch(error=>{
        console.log(error)
      })
  }

  inputHandler = (event)=>{
    const value = event.target.value
    this.setState({
      title: value
    })
  }

  buttonHandler = () =>{
    const item = {
      title: this.state.title,
      checked: this.state.checked,
      id: this.state.data.length
    }
    const data =[...this.state.data, item]
    this.setState({
      data: data,
      title: ''
    })
    axios.post("/data.json", data)
        .then(responce=>{
          console.log("Post", responce)
        })
        .catch(error=>console.log(error))
  }

  updateData = (item) =>{
    this.setState({
      data: item
    })
  }

  render() {
    return (
      <div className="container">
        <Add 
          title={this.state.title}
          buttonHandler={this.buttonHandler}
          inputHandler={this.inputHandler}
          />
        <br/>
        <List 
          data={this.state.data}
          updateData={this.updateData}
          />
      </div>
    )
  }
}

export default App

import React, { PureComponent } from 'react'


import Add from "./Components/Add/Add"
import List from "./container/List/List"
import axios from "./axios-post"
import Settings from './Components/Settings/Settings'
import Info from "./Components/Info/Info"

export class App extends PureComponent {

  state ={
    title: '',
    checked: false,
    data: [],
    onlineMode: true,
    restorePrevFlag: false
  }

  componentDidMount(){
    const documentOnlineMode = JSON.parse(localStorage.getItem("onlineMode"))
    if(documentOnlineMode!==null){
      this.setState({
        onlineMode: documentOnlineMode
      })
    }

    if(documentOnlineMode){
      axios.get("/data.json")
      .then(responce=>{
        console.log("Mount data", responce)
        if(responce.data!==null){
          const data = Object.values(responce.data.valueOf())
          if(data[data.length-1][0].title === "DEMO"){
            // console.log(data[data.length-1][0], "_________" )  
            this.setState({
              data: []
            })
          }
          else
          this.setState({
            data: data[data.length-1]
          })
        }
      })
      .catch(error=>{
        console.log(error)
      })
    }else{
      const documentData = JSON.parse(localStorage.getItem("data"))
      if (documentData !== null){
        this.setState({
          data : documentData,
      })
    }
  }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.onlineMode !== this.state.onlineMode && prevState.onlineMode===false){
      console.log(prevState.onlineMode, "Flag Changed !!!!!!!!!!!!!!!!")
      this.setState({
        restorePrevFlag: true
      })
    }
    // else this.setState({
    //   restorePrevFlag: false
    // })
    if(prevState.onlineMode!==this.state.onlineMode){
      localStorage.setItem("onlineMode",JSON.stringify(this.state.onlineMode))
    }
    
    if(prevState.data!==this.state.data || prevState.onlineMode!==this.state.onlineMode){
      console.log(prevState.data,"#########",this.state.data)
      let data = this.state.data
      if(!this.state.onlineMode){
        localStorage.setItem("data", JSON.stringify(data))
      }else{
        if(data.length === 0) data = [{checked: false, id: 0, title: "DEMO"}]
        axios.post("/data.json", data)
        .then(responce=>{
          console.log("Post", responce)
        })
        .catch(error=>{
          console.log(error)
        })
      }
    }
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
      id: this.state.data.length,
      property: false
    }
    const data =[...this.state.data, item]
    if(this.state.title!=="")
    this.setState({
      data: data,
      title: ''
    })
    else this.setState({
      title: ''
    })
    // if(this.state.onlineMode){
    //   axios.post("/data.json", data)
    //     .then(responce=>{
    //       console.log("Post", responce)
    //     })
    //     .catch(error=>console.log(error))
    // }
  }

  updateData = (item) =>{
    this.setState({
      data: item
    })
  }

  updateOnlineMode = (item) =>{
    this.setState({
      onlineMode: item
    })
  }

  restoreHandler = () => {
    if(this.state.restorePrevFlag){
      axios.get("/data.json")
        .then(responce=>{
          if(responce.data!==null){
            const data = Object.values(responce.data.valueOf())
            if(data[data.length-2][0].title === "DEMO"){
              // console.log(data[data.length-1][0], "_________" )  
              this.setState({
                data: []
              })
            }
            else
            this.setState({
              data: data[data.length-2]
            })
          }
        })
        .catch(error=>{
          console.log(error)
        })
        this.setState({
          restorePrevFlag: false
        })
    }
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
        <Settings
          onlineMode={this.state.onlineMode}
          updateOnlineMode={this.updateOnlineMode}
        />
        <List 
          data={this.state.data}
          updateData={this.updateData}
          onlineMode={this.state.onlineMode}
          />
        <Info 
          restoreFlag={this.state.restorePrevFlag}
          restoreHandler={this.restoreHandler}
        />
      </div>
    )
  }
}

export default App

import React, { PureComponent } from 'react'
// import axios from "../../axios-post"

import Item from '../../Components/Item/Item'

export default class List extends PureComponent {

    checkboxHandler = (index)=>{
        let data = [...this.props.data]
        // console.log("checkbox debug" ,data[index])
        data[index].checked = !data[index].checked
        // if(this.props.onlineMode){
        //     axios.post("/data.json", data)
        //     .then(responce=>{
        //         console.log("Post", responce)
        //     })
        //     .catch(error=>console.log(error))
        // }
        this.props.updateData(data)
    }

    deleteButtonHandler = (index) =>{
        let newData = [...this.props.data]
        newData.splice(index,1)
        newData.map((item, index)=>{
            return item.id = index
        })
        this.props.updateData(newData)
        if(newData.length === 0) newData = [{checked: false, id: 0, title: "DEMO"}]
        // if(this.props.onlineMode){
        //     axios.post("/data.json", newData)
        //     .then(responce=>{
        //     console.log("Post", responce)
        //     // return axios.post("/", this.state.data)
        //     })
        //     .catch(error=>console.log(error))
        // }
    }

    propertyHandler = (index)=>{
        let data = [...this.props.data]
        // console.log("checkbox debug" ,data[index])
        data[index].property = !data[index].property
        // if(this.props.onlineMode){
        //     axios.post("/data.json", data)
        //     .then(responce=>{
        //         console.log("Post", responce)
        //     })
        //     .catch(error=>console.log(error))
        // }
        this.props.updateData(data)
    }

    render() {
        const data = this.props.data
        let items = <p>Loading .....</p>
        items = data.map((item,index)=>{
            let checked = item.checked
            let title = item.title
            let property = item.property
            // console.log(this.props.data[index].checked)
            return <Item 
                key={item.id+3} 
                id={item.id}
                checked={checked} 
                checkboxHandler={this.checkboxHandler}
                deleteButtonHandler={this.deleteButtonHandler}
                propertyHandler={this.propertyHandler}
                property={property}
                title={title}/>
        })
        console.log("[List.js]: Full data", data)
        return (
            <div>
                {items}
            </div>
        )
    }
}


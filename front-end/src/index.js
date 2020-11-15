import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"



class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:"Hi there"
        }
    }

    get_data(){
        axios({
            method : 'get',
            url : "/api/home"
        })
        .then((response) => {
            this.setState(
                (prevState)=>{
                    return {
                        value:response.data["msg"]
                    }
                }
            )
            console.log(response.data)
        } ,(error) => {
        })
    }

    render(){
        this.get_data()
        return (
            <div>
                {this.state["value"]}
            </div>
        )
    }
}
ReactDOM.render(<Test/>,document.body)
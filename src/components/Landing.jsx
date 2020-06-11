import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

  class Landing extends Component {
  
    constructor(){
        super()
        this.state={
            quote:''
        }
    }

    async getQuote ()  {
        const response = await axios.get("/quote")
        return response.data
      }
    
    async componentDidMount() {
        const response = await this.getQuote()
        this.setState({ quote: response})
    }

    render() {
        const date = new Date();
        const currentHours = date.getHours();
        let gretting = ''
        if(currentHours>6 && currentHours <12){
            gretting= 'Good Morning'
        } else if(currentHours>=12 && currentHours <18){
            gretting= 'Good Afternoon'
        } else if (currentHours >=18 && currentHours<23){
            gretting= 'Good Evning'
        } else {
            gretting= 'Good Night'
        }
    return (<div id="welcome">
            <h2 id="greeting">{gretting}</h2>
            <p id="quote">{this.state.quote.text}</p>
            <p id="author">~{this.state.quote.author}~</p>
            <p id="welcome-balance"><b>Current balance:</b> ₪{this.props.balance}</p>
            <Link to="/transactions"><a class="waves-effect waves-light btn" id="welcome1">All Transactions</a></Link>
            <Link to="/operations"><a class="waves-effect waves-light btn" id="welcome2">New Operation</a></Link>
        </div>)
    }
    
  }
        
export default Landing;


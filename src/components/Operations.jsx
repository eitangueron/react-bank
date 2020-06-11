import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'


  class Operations extends Component {

    constructor(){
      super()
      this.state={
        categoryInput:"",
        vendorInput:"",
        amountInput:"",
        toRedirect:false
      }
    }

    updateInput = (event) => {
      if(event.target.name === 'category-input'){
        this.setState({categoryInput:event.target.value})
      } else if(event.target.name === 'vendor-input'){
        this.setState({vendorInput:event.target.value})
      } else if(event.target.name === "amount-input"){
        this.setState({amountInput:event.target.value})
      }
    }

    clearInputFields = () => {
      this.setState({
        categoryInput:"",
        vendorInput:"",
        amountInput:""
      })
    }

    deposit = () =>{
      if(this.state.categoryInput && this.state.vendorInput && this.state.amountInput){
        this.props.addTransaction(this.state.amountInput, this.state.vendorInput, this.state.categoryInput)
        alert('Added new deposit')
        this.clearInputFields()
        this.setState({toRedirect:true})
      }
    }

    withdraw = () =>{
      if(this.state.categoryInput && this.state.vendorInput && this.state.amountInput){
        this.props.addTransaction(0-this.state.amountInput, this.state.vendorInput, this.state.categoryInput)
        alert('Added new withdraw')
        this.clearInputFields()
        this.setState({toRedirect:true})
      }
    }

    render() {
      return (
        <div id="operations">
        {this.state.toRedirect ? <Redirect to="/transactions"/> : null}
              <input type="text" placeholder="Category" name="category-input" value={this.state.categoryInput} onChange={this.updateInput}/>
              <br/>
              <input type="text" placeholder="Vendor" name="vendor-input" value={this.state.vendorInput} onChange={this.updateInput}/>
              <br/>
              <input type="number" placeholder="Amount" name="amount-input" value={this.state.amountInput} onChange={this.updateInput}/>
              <br/>
              <a class="waves-effect waves-light green btn" id="deposit" onClick={this.deposit}>Deposit</a>
              <br/>
              <a class="waves-effect waves-light red btn" id="withdraw" onClick={this.withdraw}>Withdraw</a>
          </div>)
      }
  }
        
export default Operations;


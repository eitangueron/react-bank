import './App.css';
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import Landing from './components/Landing'
import Analytics from './components/Analytics'
import React, { Component } from 'react';
import axios from '../node_modules/axios'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



  class App extends Component {
    
    constructor(){
      super()
      this.state={
        transactions:[]
      }
    }

    async getTransactions() {
      return axios.get("http://localhost:4000/transactions")
    }

  
    async componentDidMount() {
      const response = await this.getTransactions()
      this.setState({ transactions: response.data })
    }
    
    reducer = (accumulator, currentValue) => accumulator + currentValue;

    addTransaction = async (amount, vendor, category) => {
      const response = await axios.post(`http://localhost:4000/transaction`,{amount, vendor, category})
      const newTransactions = [...this.state.transactions]
      newTransactions.push(response.data)
      this.setState({transactions:newTransactions})
    }

    deleteAction = async (actionData) => {
      const response = await axios.delete(`http://localhost:4000/transaction/${actionData.amount}/${actionData.vendor}/${actionData.category}`)
      const indexToDelete = this.state.transactions.findIndex(a => a._id===response.data._id)
      const updatedTransactions = [...this.state.transactions]
      updatedTransactions.splice(indexToDelete, 1)
      this.setState({transactions:updatedTransactions})
    }

    render() {
      const balance = this.state.transactions.map(a => a.amount).reduce(this.reducer,0)
      return (
        <Router>
        <div className="App" id="app">
          <div id="main-links">
            <Link to="/transactions">Transactions</Link>
            <Link to="/operations">New Operation</Link>
            <Link to="/analytics">Analytics</Link>
          </div>
          <div id="container-balance">
            <p id="balance"><b>Current balance:</b> ${balance}</p>
          </div>
            <Route path="/" exact render={() => <Landing balance={balance}/>}/>
            <Route path="/transactions" exact render={() => <Transactions data={this.state.transactions} deleteAction={this.deleteAction}/>} ></Route>
            <Route path='/operations' exact render={() => <Operations addTransaction={this.addTransaction}/>}/>
            <Route path="/analytics" exact render={() => <Analytics transactions={this.state.transactions}/>}></Route>
          </div>
        </Router>
        )
    }
   
  }
        
export default App;


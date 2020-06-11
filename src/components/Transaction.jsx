import React, { Component } from 'react';


  class Transaction extends Component {
    
    deleteAction = () => {
        this.props.deleteAction(this.props.actionData)
    }

    render() {
        const actionData = this.props.actionData
        return (
            <tr>
              <td className="capitalize">{actionData.category}</td>
              <td className="capitalize">{actionData.vendor}</td>
              <td className={actionData.amount>0 ? 'plus' : 'minus'}>₪{actionData.amount}</td>
              <td>{actionData.date}</td>
              <td>{actionData.time}</td>
              <td><div className="delete"><i class="material-icons" onClick={this.deleteAction}>delete</i></div></td>
            </tr>
          )
    }

  }
        
export default Transaction;


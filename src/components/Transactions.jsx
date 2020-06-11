import React, { Component } from 'react';
import Transaction from './Transaction'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

  class Transactions extends Component {
  
    render() {
        const data = this.props.data
        return (
          <div id="all-transactions">
            <table className="striped">
              <thead>
                <tr>
                    <th className="underLine">Category:</th>
                    <th className="underLine">Vender:</th>
                    <th className="underLine">Amount:</th>
                    <th className="underLine">Date:</th>
                    <th className="underLine">Time:</th>
                    <th></th>
                </tr>
              </thead>

              <tbody>
                {data.map((action,i) => <Transaction key={'transaction '+i} actionData={action} trackNum={'transaction '+i} deleteAction={this.props.deleteAction}/>)}
              </tbody>
            </table>
          </div>
            )
    }
    
  }
        
export default Transactions;



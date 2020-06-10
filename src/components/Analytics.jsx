import React, { Component } from 'react';
import SingleSum from './SingleSum'
import { PieChart } from 'react-minimal-pie-chart';
 
  class Analytics extends Component {
  
    render() {
        const transactions = this.props.transactions
        const final = {}
        transactions.forEach(transaction => {
            if(final[transaction.category]){
                final[transaction.category]+=transaction.amount 
            } else {
                final[transaction.category] = transaction.amount
            }
        })
        const colors = ['#2ecc71', '#f1c40f', '#f39c12', '#9b59b6', '#1abc9c']
        const pieData = Object.keys(final).map((category,i) => ({'title': category, 'value':final[category], color: colors[i], label:String}) )
        const plusPieData = pieData.filter(d => d.value>=0)
        const minusPieData = pieData.filter(d => d.value<0)
        const printMinusPieData = minusPieData.map(x => ({'title': x.title, 'value':Math.abs(x.value), 'color': x.color, 'label':x.label}))
        return (
            <div id="sums">
                <h2>Total by category:</h2>
                {Object.keys(final).map(category => <SingleSum category={category} sum={final[category]} classing={final[category]>0 ? 'plus' : 'minus'}/>)}
                <div id="pie-charts">
                    <div id="plus-pie">
                        <h3>Incomes:</h3>
                        <PieChart id="pie-chart-plus" className="capitalize" data={plusPieData} label={({ dataEntry }) => dataEntry.title +':'+ `${Math.round(dataEntry.percentage)} %`}/>
                    </div>
                    <div id="minus-pie">
                    <h3>Expenses:</h3>
                    <PieChart id="pie-chart-minus" className="capitalize" data={printMinusPieData} label={({ dataEntry }) => dataEntry.title +':'+ `${Math.round(dataEntry.percentage)} %`}/>
                </div>
                </div>
            </div>)
    }
    
  }
        
export default Analytics;


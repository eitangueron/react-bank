const express = require('express')
const router = express.Router()
const axios = require('../../node_modules/axios')
const Transaction = require("../schemas/transactionSchema")


router.get('/transactions',async function(req,res){
    const transactions = await Transaction.find({})
    res.send(transactions)
})


router.post('/transaction',async function(req,res){
    const newTransactionData = req.body
    const newTransaction = new Transaction(newTransactionData)
    newTransaction.save().then(() => res.send(newTransaction))
})


router.delete('/transaction/:amount/:vendor/:category',function(req,res){
    const transaction = req.params
    const transactionAmount = transaction.amount
    const transactionVendotr = transaction.vendor
    const transactionCategory = transaction.category
    Transaction.findOneAndDelete({amount:transactionAmount, vendor:transactionVendotr, category:transactionCategory})
    .then((response) => res.send(response))
})

router.get('/quote',async function(req,res){
    const result = await axios.get("https://type.fit/api/quotes") 
    const response = [...result.data]
    const arrLength = 30
    response.splice(arrLength,response.length)
    const index = Math.floor(Math.random()*arrLength-1)
    res.send(response[index])
})

module.exports = router
const mongoose = require(`mongoose`)

const Schema = mongoose.Schema

const transactionSchema = new Schema ({
    category: String,
    vendor: String,
    amount: Number
})

const Transaction = mongoose.model('Transaction',transactionSchema)

module.exports = Transaction
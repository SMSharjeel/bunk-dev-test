let expenses = [
    {
        name: 'Expense 1',
        expense: 10
    },
    {
        name: 'Expense 2',
        expense: 5
    }
];
module.exports = {
    getIndex: (req, res) => {
        res.json({
            success: true,
            content: expenses
        });
    },
    postIndex: (req, res) => {
        let expense = {
            name: req.body.name,
            expense: parseFloat(req.body.expense)
        };
        expenses.push(expense);
        res.json({
            success: true,
            content: expenses
        });
    },
    calculateExpenses: (req, res) => {
        let myTotal = 0;
        expenses.forEach(element => {
            myTotal+=element.expense
        });
        res.json({
            status: true,
            expenses: myTotal
        })
    }
}
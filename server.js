const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
app.set('port',PORT);

app.use(express.static(path.join(__dirname, '/client')))
app.get('/api/orders', (req,res)=>{
    res.json(orders);
});
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
});


const orders = [
    { id: 1, number: 'PO0011', item_tag: 'ROTHMANS', quantity: 1.00, },
    { id: 2, number: 'PO0022', item_tag: 'RUSKIE', quantity: 12.00, },
    { id: 3, number: 'PO0033', item_tag: 'INNE', quantity: 100.00, },
]
const experss = require('express');
const Joi = require('joi');

const app = experss();
app.use(experss.json());


/** mock data for stock prices, pretend that this is in a database and get updated or whatever 
AAPL	149.99	1.43
TSLA	1033.42	-2.83
GS	404.91	0.64
GOOGL	2973.56	2.00
PG	146.56	0.16
*/


const stocks = [
    {ticker: "AAPL", price: "149.99", yield: "1.43"},
    {ticker: "TSLA", price: "1033.42", yield: "-2.83"},
    {ticker: "GS", price: "404.91", yield: "0.64"},
    {ticker: "GOOGL", price: "293.56", yield: "2.00"},
    {ticker: "PG", price: "146.56", yield: "0.16"}
]


//give stock ticker, get info
app.get('/api/stocks/:ticker', (req, res) =>{
    const stock = stocks.find(c => c.ticker === req.params.ticker);
    if (!stock) res.status(404).send("Not Found");
    res.send(stock);
})




//testing endpoints + tutorial following

const courses = [
    {id: 1, name:"course1"},
    {id: 2, name:"course2"},
    {id: 3, name:"course3"}
]

app.get('/', (req, res) =>{
    res.send("Helo world!!!!!");
});


app.get('/api/courses', (req, res) =>{
    res.send(courses);
})

app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("Not found");
    res.send(course);
});


app.post('/api/courses', (req, res) =>{

    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema);
    //console.log(result);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length +1,
        name: req.body.name,
    }
    courses.push(course);
    res.send(course);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening on port ${port}...`)});
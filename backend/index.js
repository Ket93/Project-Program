const experss = require('express');
const Joi = require('joi');
const db = require('./db/dbmysql.js');
const app = experss();
const cors = require('cors');

app.use(experss.json());
app.use(cors());



/*
Database part
trying my best to make this all work out

*/

//get info of everything in the database
app.get('/api/db/stocks', async (req, res)=>{
    try{
        let results = await db.all();
        //console.log(results);
        res.json(results)
    }catch(err){
        //console.log(err);
        res.status(500).send(err);
    }
})


//get info from one stock in particular
app.get('/api/db/stocks/:ticker', async (req, res)=>{
    try{
        let results = await db.one(req.params.ticker);
        //console.log(results);

        //results is undefined aka sql query did nothing useful
        if (!results){
            console.log('this');
            res.status(500).send('Param :ticker is not found in database');
            return;
        }
        

        res.json(results);
    }catch(err){
        //console.log(err);
        res.status(500).send(err);
    }
})


app.get('/api/db/stocklist', async (req, res)=>{
    try{
        let results = await db.all();

        let ans = [];
        for (let i = 0; i<results.length; i++){
            ans.push(results[i].ticker);
        }
        //console.log(results);
        res.send(ans);
    }catch(err){
        //console.log(err);
        res.status(500).send(err);
    }
})





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


//list of all available stocks in the "database"
app.get('/api/stocks/list', (req, res)=>{
    let ans = []
    for (let i = 0; i<stocks.length; i++){
        ans.push(stocks[i].ticker);
    }
    res.send(ans);
})

//all information of all stocks
app.get('/api/stocks', (req, res)=>{
    res.send(stocks);
})


//give stock ticker, get info
app.get('/api/stocks/:ticker', (req, res) =>{
    const stock = stocks.find(c => c.ticker === req.params.ticker);
    if (!stock) res.status(404).send("Not Found");
    res.send(stock);
})




//testing endpoints + tutorial following

/*
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
*/

//PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`Listening on port ${port}...`)});
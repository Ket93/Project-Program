const experss = require('express');
const app = experss();

app.get('/', (req, res) =>{
    res.send("Helo world!!!");
});


app.get('/api/courses', (req, res) =>{
    res.send([1,2,3]);

})

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening on port ${port}...`)});


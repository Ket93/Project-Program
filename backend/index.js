const experss = require('express');
const Joi = require('joi');


const app = experss();
app.use(experss.json());

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

    const result = schema.validate(req.body);
    console.log(result);

    if(!req.body.name || req.body.name.length<3){
        res.status(400).send("Invalid name");
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
const express = require('express')
const path = require('path')
const geocode = require('../utils/forecast')

const app = express()
const port = process.env.PORT || 3000
app.set('view engine','hbs')
app.set('views','./view')
const publicDir = path.join(__dirname,'../public')
app.use(express.static(publicDir))

app.get('/help',(req,res)=>{
    if(!req.query.location)
    {
        return res.render({
            error: 'No data found'           
        })
    }
    geocode(req.query.location,(error,data)=>{
        if(error)
        {
            return res.send({error})
        }
        else
        {
            res.send({
                humidity: data.humidity,
                country: data.country,
                population: data.population
            })
        }
    })
})

app.get('',(req,res)=>{
    res.render('index',{
        helptext: 'This is help Text',
        descriptionText :'This is description text'
    })
})

//serving and returning html tag
// app.get('',(req,res)=>{
//     res.send('<h1>Hello express<h1>')
// })



app.listen(port,()=>{
    console.log('Server is running on port '+port)
})
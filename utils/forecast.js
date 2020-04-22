const request = require('request')
const geocode = (location,callback)=>{
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid=5fbcb7696a5438979047bcde97670011'
    
    request({url: url, json:true},(error,response)=>{
        if(error)
        {
            callback('error',undefined)
        }
        else if(response.body.city=='')
        {
            callback('error',undefined)
        }
        else{
            callback(undefined,{
                humidity: response.body.list[0].main.humidity,
                country: response.body.city.country,
                population: response.body.city.population 
            })

        }
        
    })    
}
module.exports=geocode


const router = require('express').Router()
const got = require('got')
require('dotenv').config()

let myCity = 'Kołobrzeg'

router.get('/', async (req, res) => {
    try{
        if(req.query.city){
            myCity = req.query.city
        }
       
    const response = await got(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=96d145cbc67ffa8619b24c37dd8a0cab`)
    const data=JSON.parse(response.body)
    const city = data.name;
    const des = data.weather[0].description
    const icon = data.weather[0].icon
    const temp = data.main.temp
    const error = data.message
    res.render('weather', {city, des, icon, temp,error})
     
    
} catch (error) {
    const err = 'Invalid name of the city ! 😕'
   res.render('weather', {city: '', des: '', icon: '', temp: '', error:err})
}    
})

module.exports = router
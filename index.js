const request = require('request'); //npm i request
require('dotenv').config()

const getWeather = () =>{
    request({ // https://www.npmjs.com/package/request
        uri:`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APPID}`,
        json: true
        //json format if true, raw data if false(see the console log)
    }, (err, res) =>{
        if (err) throw err; // this is a one line if statment, if there is an error then state the error, error is defined in the node modules
        console.log(res.body);// this means that there are no errors
    
    })
}
getWeather()
const request = require('request');
const {promisify} = require('util');



require('dotenv').config()//https://www.npmjs.com/package/dotenv
const promisifiedRequest = promisify(request);// request is now inside promisify 

const getWeather = async () =>{
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APPID}`,
        json: true,
    })
    console.log(data.body) //if we have a promisify function we use data, not res
}
getWeather()
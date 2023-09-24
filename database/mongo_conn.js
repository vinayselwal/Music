const mongoose = require('mongoose')

mongoose
.connect('mongodb://0.0.0.0:27017/userdata')
.then( ()=> {console.log('mongo connected')})
.catch((err)=> {console.log('mongo error',err)})


const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://vinayselwal:Vinay@123@melody.k5bfwbi.mongodb.net/')
.then( ()=> {console.log('mongo connected')})
.catch((err)=> {console.log('mongo error',err)})


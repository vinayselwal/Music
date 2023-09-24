const mongoose = require('mongoose');

const signupschema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']

    },
    username:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        validate: {
            validator: function (value) {
                // Password complexity requirements
                const minLength = 8;
                const hasUppercase = /[A-Z]/.test(value);
                const hasLowercase = /[a-z]/.test(value);
                const hasNumber = /\d/.test(value);
                const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    
                return (
                    value.length >= minLength &&
                    hasUppercase &&
                    hasLowercase &&
                    hasNumber &&
                    hasSpecialChar
                );
            },
            message: 'Password must have at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        }
    }
})

// signupschema.methods.comparePassword = async function (password) {
//     try {
//         const match = await bcrypt.compare(password, this.password);
//         return match;
//     } 
//     catch (err) {
//         throw new Error(err);
//     }
// };
  

const usercollection = new mongoose.model("usercollection",signupschema)
module.exports = usercollection
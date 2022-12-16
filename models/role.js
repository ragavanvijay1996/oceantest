const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    roleName: {
        type: String,
    },
    teamName: {
        type: String,
    },
    approval: [ 
{
    formId:  {
        type: String,
    },
    formName: {
        type: String,
    }
}
       
    ] ,
    permission: [
        {
            formName: {
                type: String,
            },
            moduleName: {
                type: String,
            }
        }

    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('role', roleSchema);
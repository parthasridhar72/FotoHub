const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FH_DB', {
    useFindAndModify : false
});

const userSchema = new mongoose.Schema({
    userID : {
        type : Number,
        unique : true
    },
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },

    email : {
        type : String
    },

    storageUsed : {
        type : Number,
        default : 0
    },

    storageCap : {
        type : Number,
        default : 20
    }
},{
    timestamps : {
        createdAt : true,
        updatedAt : true
    }
});

const userModel = mongoose.Model('users', userSchema);

const imageSchema = new mongoose.Schema({
    image : {
        data : {
            type : Buffer
        },
        contentType : {
            type : String
        }
    }
},{
    timestamps : {
        createdAt : true,
        updatedAt : true
    }
});

const imageModel = mongoose.model('images', imageSchema);

(async () => {
    await userModel.create([{
        userID : "F1001",
        firstName : "Partha",
        lastName : "Sridhar",
        email : "ps6745@gmail.com",
        storageUsed : 3,
        storageCap : 20
    },
    {
        userID : "F1002",
        firstName : "Sathya",
        lastName : "Pramodh",
        email : "prasatya24@gmail.com",
        storageUsed : 4,
        storageCap : 20
    }]);

    await imageModel.create([{
        imageID : "I1001",
        imageUrl : 'public\images\IMG_20200107_121855.jpg'
    }])
});
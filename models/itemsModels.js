const mongoose =require("mongoose")

const {Schema,model}=mongoose

const itemSchema = new Schema ({
    name:{
        type:String,
        required:true,
    },

    costPrice:{
        type:Number,
        default:0,
        required:true,
    },

    sellPrice:{
        type:Number,
        default:0,
        required:true,
    },
    qnty:{
        type:Number,
        default:0,
        required:true,
},

},{
    timestamps: true,
});
const Item=model("Item",itemSchema)

module.exports = Item


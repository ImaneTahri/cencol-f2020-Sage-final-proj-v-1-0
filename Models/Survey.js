const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const SurveySchema=new Schema({

    title:{
        type: String,
        required: true
    },
    
    
    subtitle:{

        type:String,
        required:true
    },
      
    description:{

        type:String,
        required:true
    },
    q1:{
        type:String,
        required:true
    },
    q2:{
        type:String,
        required:true
    },
    q3:{
        type:String,
        required:true
    },
    q4:{
        type:String,
        required:true
    },
    q5:{
        type:String,
        required:true
    },
    
});
SurveySchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
const ProfileData=mongoose.model("Survey",SurveySchema);
module.exports=ProfileData;
const express=require("express");
const router=express.Router();
const SurveyData=require("../../Models/Survey");

router.post("/addsurvey",(req,res)=>{


      const newEditProfile=new SurveyData({
            
            title:req.body.title,
            subtitle:req.body.subtitle,
            description:req.body.description,
            q1:req.body.q1,
            q2:req.body.q2,
            q3:req.body.q3,
            q4:req.body.q4,
            q5:req.body.q5,
         
      })
      newEditProfile.save()
      .then(newEditProfile=>res.json(newEditProfile))
      .catch(err=>res.json(err));

});

router.get("/survey",(req,res)=>{

      SurveyData.find().then(data=>res.json(data)).catch(err=>res.status(400).json("Error" +err));

})
//-------------------------//
//----------update---------//
//------------------------//router.put(`/survey/${id}`, data);
 router.get("/survey/id", (req, res) => {
      const id = req.params.id;
    
      SurveyData.findById(id)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Not found Survey with id " + id });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Error retrieving Survey with id=" + id });
        });
    });
router.put("/survey/:id", (req, res) => {
   SurveyData.findById(req.params.id)
   .then(data =>{
      data.title=req.body.title,
      
      data.subtitle=req.body.subtitle

      data.save()
      .then(()=>res.json("Survey Updated"))
      .catch(err=>res.status(400).json("Err :"+err));
      
   })
   .catch(err=>res.status(400).json("Err : ",err));
});


//delete by id
router.get("/survey/:id",(req,res)=>{

      SurveyData.findById(req.params.id).then(data=>res.json(data)).catch(err=>res.status(400).json("Error" +err));

})
router.delete('/survey/:id',(req,res)=>{

SurveyData.findByIdAndDelete(req.params.id)
.then(()=>res.json("Survey Deleted"))
.catch(err=>res.status(400).json("ERROR :" +err));
});
router.delete('/survey',(req,res)=>{

      SurveyData.deleteMany()
      .then(()=>res.json("All Survey Deleted"))
      .catch(err=>res.status(400).json("ERROR :" +err));
      });
// });
//delete all
// router.delete(`/tutorials`,(req,res)=>{

// });
    
    //find by title
// router.get(`/tutorials?title=${title}`,(req,res)=>{

// });
module.exports=router;

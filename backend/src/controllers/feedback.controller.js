import Feedback 
from "../models/Feedback.js";



export const createFeedback =
async(req,res)=>{


try{


const {
prospect,
action,
outcome,
reason
}
=
req.body;




let learningNote;



if(outcome==="CONVERTED"){


learningNote =
"Increase priority for similar prospects";


}


else if(action==="SKIP"){


learningNote =
"Reduce similar recommendations for banker";


}


else{


learningNote =
"Continue monitoring prospect";


}





const feedback =
await Feedback.create({

prospect,

action,

outcome,

reason,

learningNote

});




res.status(201)
.json({

success:true,

feedback

});



}
catch(error){


res.status(500)
.json({

message:error.message

});


}


};




// get all learning history


export const getFeedbacks =
async(req,res)=>{


const feedbacks =
await Feedback.find()
.populate("prospect")
.sort({

createdAt:-1

});



res.json(feedbacks);


};
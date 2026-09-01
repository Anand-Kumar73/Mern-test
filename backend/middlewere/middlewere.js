Middlewere

function validStudent(req,res,next){
  const{email,password}=req.body;
  if(!email ||!password){
    res.status(404).json({
      "message":"please enter valid details"
    })
  }
 }
 export default validStudent;
function validStudent(req,res,next){
  const{email,password}=req.body;
  if(!email ||!password){
    res.status(404).json({
      "message":"please enter valid details"
    })
  }
 }
 function CommonCheck(req,res,next){
  res.status(202).json({
    "message":"common for every one"
  })
 } 
 export { validStudent, CommonCheck };
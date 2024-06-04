function validate(name)
{
  return new Promise((resolve, reject)=>{
      if(name == "abcd")
        {
          resolve("valid");
      }
      else
      {
          reject("invalid");
      }
  });
}
validate("abcd")
  .then((status)=>{
      console.log("after round 1");
      console.log(status);
  })
  .catch((err)=>{
      console.log(err);
  })
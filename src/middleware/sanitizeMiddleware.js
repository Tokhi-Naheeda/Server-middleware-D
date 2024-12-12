export function capitelLetter(req, res,next){
    const {firstName,lastName}=req.body
    if(firstName && lastName){
        req.body.firstName=firstName.charAt(0).toUpperCase()+firstName.slice(1).toLowerCase();
        req.body.lastName=lastName.charAt(0).toUpperCase()+lastName.slice(1).toLowerCase();
    }
        next();
}

export function favoriteBandsSort(req,res,next){
    const favoriteBands=req.body.favoriteBands.sort();
    next();
}

/*
export function favoriteBandsSort(req, res, next) {
  if (req.body.favoriteBands && Array.isArray(req.body.favoriteBands)) {
    req.body.favoriteBands = req.body.favoriteBands.sort((a, b) => a.localeCompare(b));
  }
  next();
}
  */
  
export function convertToNum(req,res,next){
   const age=parseInt(req.body.age)
   const fbw=Number(req.body.fbw)
   req.body.fbw=fbw;
   req.body.age=age
   next();
}

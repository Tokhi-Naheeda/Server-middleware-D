export function ageMiddleware(request, response, next){
    const age = parseInt(request.body.age);
    if(age && age>18){
        next();
    }else{
        return response
        .status(400)
        .json({ message: "We can not validate your user. They are below 18 years of age" }); 
    }
}
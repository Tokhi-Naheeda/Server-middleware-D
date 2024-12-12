export function validateMiddleware(request, response, next){
    const users=[]
    const {firstName, lastName, age, fbw, email}=request.body;
    /*
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const age = request.body.age;
    const fbw = request.body.fbw;
    const email = request.body.password; 
    */
    if(firstName && lastName && age && fbw && email){
        users.push(request.body)
     next()
    }else{
        return response
        .status(400)
        .json({ message: "Missing required fields: firstName, lastName, age, fbw, email" });
    }
}
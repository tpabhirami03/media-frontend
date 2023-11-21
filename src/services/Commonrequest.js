import axios from "axios";

// function defenition

 export const commonRequest=async(method,url,body)=>{

    let reqConfiq={

    
    url,
    method,
    data:body,
    headers:{
          "content-type":"application/json"
                        // "multipart/ form data"
    }
}
    //  api call using axios library

    return await axios( reqConfiq).then((response)=>{
        return response

    }).catch ((error)=>{

        return error
    })
}


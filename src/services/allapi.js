import { commonRequest } from "./Commonrequest";
import { BASE_URL } from "./baseurl";

// add video 

export const addVideo=async(body)=>{

   return await commonRequest("POST",`${BASE_URL}/videos`,body)
}

// get video 

export const getVideo=async()=>{

  return await  commonRequest("GET",`${BASE_URL}/videos`,"")
}

// delete

export const deleteVideo=async(id)=>{

    return await  commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}

// add category

 export const addCategory=async(body)=>{

 return await  commonRequest("POST",`${BASE_URL}/categories`,body)
}



// get category

export const getallCategory = async()=>{
  return await commonRequest("GET",`${BASE_URL}/categories`,"")
}


// delete category

export const deleteCategory =async(id)=>{
  return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
}


// get history

export const gethistory=async()=>{
  return await commonRequest("GET",`${BASE_URL}/watch_history`,"")
}

// add history

export const Addhistory=async(body)=>{

  return await  commonRequest("POST",`${BASE_URL}/watch_history`,body)
 }

//  get single card details

export const getVideos=async(id)=>{

  return await  commonRequest("GET",`${BASE_URL}/videos/${id}`,"")
}

// to update card details in the category section

export const updateCategory=async(id,body)=>{

  return await  commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
 }




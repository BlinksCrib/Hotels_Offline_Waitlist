import axios from 'axios'

export const Reusable = (url, data)=>{
   return  axios.post(url,  data, {        
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }) 
}
// export const Reusable = async (url, data)=>{
    
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//         body: data

//     })
//     return response;
// }
 
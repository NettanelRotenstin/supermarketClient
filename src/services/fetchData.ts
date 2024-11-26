export const fetchData = async (url:string,token:string|null = null)=>{
    try {
       await fetch(url,{headers:{Authorization:token?token:""}})
    } catch (error) {
        
    }
}
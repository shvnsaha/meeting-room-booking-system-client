import axios from "axios";

export const imageUpload = async (image:File) =>{

   
   
    const formData = new FormData();
    formData.append('image',image)
   
      const {data} = await axios.post(
        `https://api.imgbb.com/1/upload?key=56d89e119928186b94d40f04759ac477`, formData
      )


      return data;
  
    
}
// export default is better for components and pages ,for services ,export const is better
import axios from 'axios';

export const getGames=()=>async dispatch=>{
    const url=' https://api.rawg.io/api/platforms?key=a15d2adf3d944b67b62c716f77069a86';
    try{
        const data=await axios.get(url);
        console.log(data);
        
    }
    catch(error){
       return error;
    }
}
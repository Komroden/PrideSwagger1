import  {useEffect, useState} from 'react';

export const useImage = (url) => {
    const [pic,setPic]=useState('');
    useEffect(()=>{
        fetch(`http://lk.pride.kb-techno.ru/assets/Img/${url}`,{
            method:'GET',
            headers:{
                'accept': 'application/octet-stream'
            }
        })
            .then(res=>setPic(res.url))
            .catch(error=>console.log(error))

    },[url])
    return {pic};
};


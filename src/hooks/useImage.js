import  {useEffect, useState} from 'react';

export const useImage = (url,valueError) => {
    const [pic,setPic]=useState('');
    useEffect(()=>{
        if(!url) return
        fetch(`http://lk.pride.kb-techno.ru/assets/Img/${url}`,{
            method:'GET',
            headers:{
                'accept': 'application/octet-stream'
            }
        })
            .then(res=> {
                if (res.status===200){
                    setPic(res.url)
                }
                else {
                    setPic(valueError)
                }
            })
            .catch(error=>console.log(error))

    },[url,valueError])
    return {pic};
};


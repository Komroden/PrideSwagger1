import React, {useCallback, useEffect, useState} from 'react';
import ReactCrop from "react-image-crop";
import {useDispatch, useSelector} from "react-redux";
import 'react-image-crop/dist/ReactCrop.css'
import {UploadButtons} from "./UploadButtons";
import {UserAvatar} from "../../../../store/allInfoUser";


export const Avatar = ({open,maxWidth,maxHeight}) => {
    const {auth} = useSelector((state) => state);
    const [crop, setCrop] = useState({
        unit:'px',
        maxWidth:30,
        maxHeight:30
    });
    const [payload,setPayload]=useState({
        X:null,
        Y:null,
        Width:null,
        Height:null,
        avatarImage:null,
    });
    const [url,setUrl]=useState('')
    const [uploadUrl,setUploadUrl]=useState('')
    const [drag,setDrag]=useState(false);
    const [newAvatarUrl,setNewAvatarUrl]=useState('')
    const [pic,setPic]=useState('')
    const dragStartHandler=(e)=>{
        e.preventDefault()
        setDrag(true)
    }
    const dragLeaveHandler=(e)=>{
        e.preventDefault()
        setDrag(false)
    }
    const onDropHandler=(e)=>{
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        const file=files[0]
        setUploadUrl(file)
        let reader = new FileReader()
        reader.addEventListener('load',()=>{
            setUrl(reader.result)
        },false)
        reader.readAsDataURL(file)

        setDrag(false)
    }
    const onAddImage=(e)=>{
        const file =e.target.files[0]
        setUploadUrl((file))
        let reader = new FileReader()
        reader.addEventListener('load',()=>{
            setUrl(reader.result)

        },false)
        reader.readAsDataURL(file)

        setDrag(false)
    }
    const handleImageLoaded=(image)=>{
    }
    const handleOnCropComplete=(crop)=>{
        setPayload({
            X:Math.round(crop.x),
            Y:Math.round(crop.y),
            Width:crop.width,
            Height:crop.height,
            avatarImage:url,
        })

    }


    const handlePost =()=>{

        const formData=new FormData()
        formData.append('X',payload.X)
        formData.append('Y',payload.Y)
        formData.append('Width',payload.Width)
        formData.append('Height',payload.Height)
        formData.append('avatarImage',uploadUrl )


        fetch('http://lk.pride.kb-techno.ru/api/Profile/crop-avatar',  {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            }
        })
            .then((res) => res.text())
            .then((PromiseResult) => setNewAvatarUrl(PromiseResult))

            .catch((e) => {
                console.log(e.message);
            })

    }
    // avatar reload
    const dispatch=useDispatch()
    const setAvatar = useCallback(() => {
        dispatch(UserAvatar(pic))
    }, [dispatch,pic]);
    useEffect(()=>{
        if (pic==='') return
        setAvatar()
    },[setAvatar,pic])
    useEffect(()=>{
        if (newAvatarUrl==='') return
        fetch(`http://lk.pride.kb-techno.ru${newAvatarUrl}`,{
            method:'GET',
            headers:{
                'accept': 'application/octet-stream',
                'Authorization':`Bearer ${auth.token}`}

        })
            .then(res=>setPic(res.url))

    },[auth.token,newAvatarUrl])

    const handleClear=()=>{
        setUrl('')
    }
    return (
        <div className='drop_wrapper' style={{display:open?'flex':'none'}}>
            <div style={{display:url?'flex':'none'}} className='crop_image'>
                <ReactCrop
                    circularCrop
                    src={url}
                    crop={crop}
                    onImageLoaded={handleImageLoaded}
                    onComplete={handleOnCropComplete}
                    onChange={e=>setCrop(e)}
                    maxWidth={maxWidth}
                    maxHeight={maxHeight}/>
                    <div className='crop_buttons'>
                <button className="form_sbmOpen" onClick={handlePost}>Отправить</button>
                <button className="form_sbmOpen form_sbmOpen_clear" onClick={handleClear}>Очистить</button>
                    </div>
            </div>
            {drag
                ?
                <div className='add__file'
                     style={{display:!url?'flex':'none'}}>
                <div
                    onDragStart={e=>dragStartHandler(e)}
                    onDragLeave={e=>dragLeaveHandler(e)}
                    onDragOver={e=>dragStartHandler(e)}
                    onDrop={e=>onDropHandler(e)}
                    className='drop_area'>Отпустите файл</div>
                <UploadButtons url={url} onChange={onAddImage}/>
                </div>
                :
                <div className='add__file'
                     style={{display:!url?'flex':'none'}}>
                    <div
                         onDragStart={e=>dragStartHandler(e)}
                         onDragLeave={e=>dragLeaveHandler(e)}
                         onDragOver={e=>dragStartHandler(e)}
                         className='drop_area'>Перетащите файл
                    </div>
                    <UploadButtons url={url} onChange={onAddImage}/>

                    {/*<input style={{display:!url?'block':'none'}}  name='image' type='file' onChange={onAddImage}  />*/}
                </div>
            }
        </div>
    );
};


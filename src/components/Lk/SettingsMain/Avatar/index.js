import React, {useState} from 'react';
import ReactCrop from "react-image-crop";
import {useSelector} from "react-redux";
import 'react-image-crop/dist/ReactCrop.css'
import {UploadButtons} from "./UploadButtons";

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
    const [drag,setDrag]=useState(false);
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
        let reader = new FileReader()
        reader.addEventListener('load',()=>{
            setUrl(reader.result)
        },false)
        reader.readAsDataURL(file)

        setDrag(false)
    }
    const onAddImage=(e)=>{
        const file =e.target.files[0]
        console.log(file)
        let reader = new FileReader()
        reader.addEventListener('load',()=>{
            setUrl(reader.result)
        },false)
        reader.readAsDataURL(file)
        console.log(url)

        setDrag(false)
    }
    const handleImageLoaded=(image)=>{
    }
    const handleOnCropComplete=(crop)=>{
        setPayload({
            X:crop.x,
            Y:crop.y,
            Width:crop.width,
            Height:crop.height,
            avatarImage:url,
        })

    }
    const handlePost =()=>{

        fetch('http://lk.pride.kb-techno.ru/api/Profile/avatar', {
            method: 'POST',
            body: payload,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${auth.token}`

            }

        })
            .then((res) => {
                console.log(res)
            })
            .then((body)=>{
                console.log(body)
            })
            .catch((e) => {
                console.log(e.message);
            })

    }
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


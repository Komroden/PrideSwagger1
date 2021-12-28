import React, { useState} from 'react';
import {useSelector} from "react-redux";
import {Line} from "../MainTitle/GreyLine";
import {LineTitle} from "../LineTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import {useHistory} from "react-router";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useFetchWithTokenGet} from "../../../hooks/useFetchWithTokenGet";
import {Loader} from "../../../api/Loader";

export const ChatsMain = () => {
    const { auth } = useSelector((state) => state);
    const {push}=useHistory()
    const [refresh,setRefresh]=useState(false)
    // const [chatrooms,setChatrooms]=useState({
    //     items:[]
    // })
    const chatrooms=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Chat/chatrooms',{items:[]},refresh)

    const handleOpen=({id,name,recipientName})=>{
        if(recipientName==='Служба поддержки'){
            push(`/chatsSupport${id}`)
        }else {
            push(`/messages${id}/${name}`)
        }

    }
    const handleDelete=(id)=>{
        fetch(`http://lk.pride.kb-techno.ru/api/Chat/delete-chatroom/${id}`,{
            method:'DELETE',
            headers:{
                'accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.text())
            .then(()=>setRefresh(!refresh))
    }

    return (
        <>
            <Line/>
            <div className="main_for_all_pages">
                <LineTitle title={'Список Чатов'}/>
                <div className="message_form_row">
                    <List sx={{width:'100%'}} >
                        <Loader loading={chatrooms.loading}/>
                        {chatrooms.data.items.map((item) => (
                            <ListItem
                                key={item.id}
                                disableGutters
                                secondaryAction={
                                    <IconButton onClick={()=>handleDelete(item.id)}>
                                        <DeleteOutlineIcon/>
                                    </IconButton>
                                }
                            >
                                <div  onClick={()=>handleOpen({id:item.id,name:item.recipientId})} style={{marginBottom:'0',cursor:'pointer'}} >{item.recipientName+' : '+item.lastMessageText}</div>
                                <IconButton onClick={()=>handleOpen({id:item.id,name:item.recipientId,recipientName:item.recipientName})}>
                                    <CommentIcon  />
                                </IconButton>

                            </ListItem>
                        ))}
                    </List>

                </div>
            </div>

        </>
    );
};


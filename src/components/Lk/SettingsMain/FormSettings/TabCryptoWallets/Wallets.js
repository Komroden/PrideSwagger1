import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {SnackBar} from "../../../../Home/Snackbar";
import {useFetchStringParametr} from "../../../../../hooks/useFetchStringParametr";

export const Wallets = ({name,value,id}) => {
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })

    const del=useFetchStringParametr(`http://lk.pride.kb-techno.ru/api/Profile/requisites/${id}`,'DELETE',setOpenSnack)
    // const handleRemove=()=>{
    //     fetch(`http://lk.pride.kb-techno.ru/api/Profile/requisites/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'accept': 'application/octet-stream',
    //             'Authorization': `Bearer ${auth.token}`
    //         }
    //     })
    //         .then(res => {
    //             setOpenSnack({
    //                 status:true,
    //                 text:'Удалено',
    //                 color:'success'
    //             })
    //             res.text()
    //         })
    //         .catch(error=>console.log(error))
    //
    // }
    return (
        <div className="requisiters_wallets_wrapper">
            <TextField
                id="outlined-read-only-input"
                label='Name'
                defaultValue={name}
                color="secondary"
                InputProps={{
                    readOnly: true,
                }}

                className='wallets_name'
            />
            <TextField
                id="outlined-read-only-input"
                label='Number'
                defaultValue={value}
                color="secondary"
                InputProps={{
                    readOnly: true,
                }}

                className='wallets_value'

            />
            <IconButton sx={{width:'40px'}} onClick={del.handleFetch} >
                <DeleteOutlineIcon/>
            </IconButton>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>
        </div>
    );
};

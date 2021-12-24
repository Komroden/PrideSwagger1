import React from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export const SnackBar = ({open,setOpen}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    return (
        <Snackbar open={open.status} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom',horizontal: 'right'}} >
            <Alert onClose={handleClose} severity={open.color} sx={{ width: '100%' }}>
                {open.text}
            </Alert>
        </Snackbar>
    );
};


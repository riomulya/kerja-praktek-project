import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface SnackbarProps {
    open: boolean;
    handleClose: () => void;
    message: string;
    type: "success" | "info" | "warning" | "error" | undefined;
    duration: number;
}

export const AlertSnackBar = ({
    open,
    handleClose,
    message,
    type,
    duration
}: SnackbarProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set isClient to true when the component mounts on the client-side
    }, []);

    if (!isClient || !open) {
        return null; // Don't render anything if not on the client-side or if the Snackbar is closed
    }

    return ReactDOM.createPortal(
        <Snackbar open={open} autoHideDuration={duration ? duration : 3000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={type}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>,
        document.body
    );
};

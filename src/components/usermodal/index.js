import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { styles } from './style';
import UserActivity from './useractivity';


export default function UserDialog({ show, close, userInfo }) {
    const { real_name, activity_periods } = userInfo[0];
    const classes = styles();

    return (
        <div>
            <Dialog onClose={close} aria-labelledby="customized-dialog-title" open={show} maxWidth={'md'}>
                <DialogTitle id="customized-dialog-title" onClose={close}>
                    {real_name}
                    <IconButton aria-label="close" className={classes.closeButton} onClick={close}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <UserActivity activity={activity_periods} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
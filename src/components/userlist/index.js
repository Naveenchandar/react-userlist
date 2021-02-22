import React from 'react';
import { Grid, Paper, Avatar } from '@material-ui/core';
import { useStyles } from '../style';

export default function Userlist({ list, handleUserCardClick }) {
    const classes = useStyles();
    return (
        list.map(item => {
            return (
                <Grid item xs={3}>
                    <Paper className={classes.paper} onClick={() => handleUserCardClick(item.id)}>
                        <div className={classes.userCard}>
                            <div className={classes.avatar}>
                                <Avatar className={classes.usericon}>{item.real_name.charAt(0)}</Avatar>
                            </div>
                            <div className={classes.userinfo}>
                                <ul>
                                    <li>Name</li>
                                    <li>Email</li>
                                    <li>Tz</li>
                                </ul>
                                <ul>
                                    <li><b>{item.real_name}</b></li>
                                    <li><b>{item.email}</b></li>
                                    <li><b>{item.tz}</b></li>
                                </ul>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            )
        })
    )
}

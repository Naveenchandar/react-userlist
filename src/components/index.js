import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import userListData from '../json/data.json';
import UserList from './userlist/index';
import { useStyles } from './style';
import UserDialog from './usermodal/index';

export default function CenteredGrid() {
    const classes = useStyles();

    const [toggleUserModal, setToggleUserModal] = useState(false);
    const [userInfo, setUserInfo] = useState();

    /* user list data */
    const { members } = userListData;

    /* open modal */
    const handleUserCardClick = (id) => {
        setToggleUserModal(true);
        const result = members.filter(item => item.id === id);
        setUserInfo(result);
    }

    /* close modal */
    const handleCloseuserModal = () => {
        setToggleUserModal(false);
    }

    return (
        <div className={classes.root}>
            <h2>Users List</h2>
            <Grid container spacing={3} className={classes.layout}>
                <UserList list={members} handleUserCardClick={handleUserCardClick} />
            </Grid>
            {toggleUserModal &&
                <UserDialog
                    show={toggleUserModal}
                    close={handleCloseuserModal}
                    userInfo={userInfo}
                    maxWidth={'md'}
                />
            }
        </div>
    );
}
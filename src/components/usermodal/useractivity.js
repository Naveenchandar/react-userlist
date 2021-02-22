import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    noActivityMsg: {
        textAlign: 'center',
        position: 'relative',
        left: '150%'
    },
    tableLayout:{
        marginTop: '20px',
        boxShadow:'0px 2px 1px -1px rgb(84 82 82), 0px 1px 1px 0px rgb(84 82 82), 0px 1px 3px 0px rgb(84 82 82), 0px 1px 3px 0px rgb(84 82 82)'
    }
});

export default function UserActivityTable(props) {
    const classes = useStyles();
    const [dateRow, setDateRow] = useState();

    const splitDate = (item) => {
        let date = item.split(' ');
        date = date.slice(0, date.length - 2).join(' ');
        return date;
    }

    const splitTime = (item) => {
        let time = item.split(' ');
        time = time.slice(time.length - 1).join(' ');
        return time;
    }

    const filterDate = (data, targetDate = '') => {
        const dateRow = data.filter(item => {
            let date = splitDate(item.start_time);
            if (targetDate) {
                return (
                    new Date(targetDate).toLocaleDateString() === new Date(date).toLocaleDateString()
                )
            }
            return (
                new Date().toLocaleDateString() === new Date(date).toLocaleDateString()
            )
        });
        return dateRow;
    }

    useEffect(() => {
        const dateRow = filterDate(props.activity)
        setDateRow(dateRow);
    }, [])

    /* handle date change */
    const handleDateChange = (event) => {
        const { value } = event.target;
        const dateRow = filterDate(props.activity, value)
        setDateRow(dateRow);
    }

    return (
        <>
            <input type='date' onChange={handleDateChange} defaultValue={new Date().toISOString().substr(0, 10)} />
            <TableContainer component={Paper} className={classes.tableLayout}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Start Date</TableCell>
                            <TableCell>Start Time</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>End Time</TableCell>
                        </TableRow>
                    </TableHead>
                    {dateRow && dateRow?.length > 0 ? dateRow?.map((row, index) => (
                        <TableBody>
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {splitDate(row.start_time)}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {splitTime(row.start_time)}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {splitDate(row.end_time)}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {splitTime(row.end_time)}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )) : <p className={classes.noActivityMsg}>No Activity</p>
                    }
                </Table>
            </TableContainer>
        </>
    );
}

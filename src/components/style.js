import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: '30px',
        paddingRight: '30px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#29bf7f',
        cursor: 'pointer',
        '&:hover':{
            transform: 'scale(1.1)'
        }
    },
    usericon:{
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor: '#fff',
        color: '#29bf7f'
    },
    userCard:{
        display:'flex',
    },
    userinfo:{
        display: 'flex',
        '& p':{
            marginBottom: 0,
            marginTop: '3px',
        },
        '& ul':{
            listStyle: 'none',
            paddingLeft: 0,
            textAlign: 'left',
            '&:nth-child(2)':{
                paddingLeft: '10px'
            }
        }
    },
    avatar:{
        marginRight: '20px',
        display: 'flex',
        alignItems: 'center'
    },
    layout:{
        marginTop: '40px'
    }
}));
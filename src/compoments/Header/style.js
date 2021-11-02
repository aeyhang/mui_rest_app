import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
    root:{
        backgroundColor:'#fff',
        transform:'translateZ(0)'
    },
    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        '&hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        }
    }
})

export default useStyles;
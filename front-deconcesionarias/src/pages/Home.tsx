import { Typography, Button, Grid} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { useHistory  } from "react-router-dom"

const useStyles = makeStyles({
    root: {
        
        textAlign: 'center',
        height:'80vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    text: {
        fontSize: '2rem'
    },
    button: {
      color: 'white',
      '&:hover': {
        backgroundColor: '#ffb400',
        color: '#111111',
    },
      background: '#111111',
      backgroundColor: '#111111',
      size: 'small',
      marginTop: '2vh'
    }
    
})

export const Home = () => {
    const classes = useStyles()
    const history = useHistory()
    const handleEnter = () => {
    history.push('/api')
    }
    return (
        <div className={classes.root}>
        <Grid item xs={12}>
        <Typography className={classes.text} >Bienvenidos a <br/> deConcesionarias</Typography>
        <Button onClick={handleEnter} className={classes.button} variant="contained">Ingresar</Button>
        </Grid>
        </div>
    )
}

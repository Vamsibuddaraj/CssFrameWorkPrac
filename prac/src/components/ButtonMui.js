import { Button, IconButton, Stack, Typography } from "@mui/material"
import React from "react"
import SendIcon from '@mui/icons-material/Send';
const ButtonMui = () =>{
    const [buttonClicked,setButtonClicked] = React.useState(0)
    return (
        <Stack direction={"column"} spacing={2} width={"200px"}>
            <Button variant="contained" disableElevation disableRipple onClick={()=>setButtonClicked(prev=>prev+1)} sx={{width:"20px",height:"20px",fontSize:"12px"}}>
                Submit
            </Button>
            <Typography>button clicked-{buttonClicked}</Typography>
            <Button  endIcon={<SendIcon />} variant="outlined">
                Submit2
            </Button>
            <Stack direction={"row"}>
                <Button variant="text" color="primary" disableRipple disableElevation>
                    Submit3  
                </Button>
                <IconButton>
                    <SendIcon disableElevation disableRipple color="secondary" />
                </IconButton>
                <IconButton>
                    <SendIcon disableElevation  color="success" style={{fontSize:"small"}}/>
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default ButtonMui
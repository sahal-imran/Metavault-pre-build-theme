import React from 'react'
import { Button } from '@mui/material'
import {Box} from '@mui/system';
function CustomButton({paddingX,paddingY,text,fontSize, marginRight,marginTop}) {
  return (
    <>
<Button variant="contained" sx={{px:`${paddingX}`, py:`${paddingY}`,background:'#FFAA27',color:'black', borderRadius:'.8rem',fontFamily: "Inter",textTransform:'capitalize',mr:`${marginRight}`,mt:`${marginTop}`,fontWeight:600,fontSize:`${fontSize}`,"&:hover": {
      backgroundColor: '#FFAA27'
    }}}>{text}</Button>
  </>
  )
}

export default CustomButton
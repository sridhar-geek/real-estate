import { Box, Button } from "@mui/material"

const HeroSection = () => {
  return (
    <Box sx={{textAlign:'center', margin:'10px 0px'}}>
      <h1>
        CONNECTING DREAMS TO REALITY
      </h1>
      <h1>
        YOUR PREMIER
      </h1>
      <h1>
        REAL ESTATE MARKETPLACE
      </h1>
      <span>Where every search ends with a home</span>
      <Box>
        <Button>Find your home </Button>
        <Button>List your property</Button>
      </Box>
    </Box>
  )
}

export default HeroSection
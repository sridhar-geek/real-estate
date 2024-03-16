import { Box, Grid, Link } from "@mui/material";

import {data} from '../Utilts/data.js'

 const GridContainer = () => {
data.map((i, element) => (
  <div key={element.id} style={{ margin: "10px 0px" }}>
    <Grid container>
      <Grid item xs={12} md={6}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeI86IDR7a8xKLYRrLEixyO8Q4dYp6b7jsFw&usqp=CAU" />
      </Grid>
      <Grid item xs={12} md={6}>
        <h4>{element.title} </h4>
        <p>
    {element.description}
        </p>
        <Link> Learn More</Link>
      </Grid>
    </Grid>
  </div>
));
}
const SecoundGrid = ()=> {
    data.map(element => (
        <div key={element.id}>
            <h1>{element.title} </h1>
            <p>{element.description} </p>
        </div>
    ))
}
const HowItWorks = () => {
  return (
    <Box sx={{ margin: "0 5%", textAlign:'center' }}>
        <h1>HOW IT WORKS ?</h1>
        <span>step by Step Guide</span>
        <GridContainer />
        <SecoundGrid />
    </Box>
  );
};

export default HowItWorks;

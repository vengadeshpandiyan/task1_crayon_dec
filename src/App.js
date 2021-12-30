import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=100").then(
      (res) => {
        console.log(res.data.results);
        setUsers(res.data.results);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return (
    <div className="app">
    <Grid container spacing={2}>
      {users &&
        users.map((e, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
              <CardMedia
                component="img"
                height="140"
                image={e.picture.thumbnail}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name.first} {e.name.last}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <LocationOnIcon color="primary" fontSize="small" style={{marginRight:"8px"}}/>{e.location.country}
                </Typography>
                <Typography variant="body2" xs={{width:"100%"}} color="text.secondary">
                <LinkIcon  color="primary" fontSize="small"  style={{marginRight:"8px"}}/>
                  {e.email}
                </Typography>
              </CardContent>
              <CardActions>
                <Button type="button" varient="contained" class="btn btn-primary">
                  View Profile
                </Button>
              </CardActions>
              </Card>
            </Grid>
          );
        })}
    </Grid>
    </div>
  );
}

export default App;
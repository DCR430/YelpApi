import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

export default class Home extends Component {
  state = {
    search: "",
    buisnessArray: [],
    lng: -122.399972,
    lat: 37.786882,
  };

  componentDidMount=()=>{
    navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude
          let lng = position.coords.longitude
          console.log("getCurrentPosition Success " + lat + lng) // logs position correctly
          this.setState({
            lat: lat,
            lng: lng
          })
        },
        (error) => {
          this.props.displayError("Error dectecting your location");
          console.error(JSON.stringify(error))
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      )
  }

  fetchApi=()=>{
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.search}&latitude=${this.state.lat}&longitude=${this.state.lng}`,{
        method: 'GET',
        headers: {
            "Authorization": "Bearer fwjzLIkgp310_sMDTc7h2y2_g7IK9_QO6OjsxekFpP9FZCQ8IKJBy2YKnvbgcbCFuuAxJPF2I9xVTtDjUgfsUPKnVNo9oudUwZ3B3VZ3YQ0fT2FHkyBmnpHSNq58X3Yx"
        },
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(result => this.setState({
        buisnessArray: result.businesses
    }),
    this.setState({
        search: ""
    })
)}

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    console.log(this.state.lat, this.state.lng)
    const card = this.state.buisnessArray.map((obj) => (
      <Card style={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            style={{ height: 140 }}
            image={obj.image_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {obj.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {obj.location.address1}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href={obj.url} size="small" color="primary">
            See on yelp
          </Button>
        </CardActions>
      </Card>
    ));
    return (
      <>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6">Yelp API</Typography>
              <input
                style={{ marginLeft: 700 }}
                type="text"
                placeholder="search"
                value={this.state.search}
                onChange={(event) => this.handleChange(event)}
              />
              <Button color="inherit" onClick={() => this.fetchApi()}>
                Search
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Grid container spacing={0.5}>
            {card}
          </Grid>
        </div>
      </>
    );
  }
}

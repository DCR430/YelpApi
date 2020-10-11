import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';




export default class Home extends Component {

    state={
        search:"",
        buisnessArray:[],
        longitude: -122.399972,
        latitude: 37.786882,
    }

    

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log (position.coords.longitude)
                
            })
    }
    
    fetchApi=()=>{
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.search}&latitude=${this.state.latitude}&longitude=${this.state.longitude}`,{
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
            search: " "
        })
    )}
  
    handleChange = (event) =>{
        this.setState({search:event.target.value});
      }

render() {
    const card = this.state.buisnessArray.map(obj=>(
        <Card style={{maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            style={{height: 140}}
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
    ))
        return (
        <>
        <div>
        <AppBar position="static">
  <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h6" >
      Yelp API
    </Typography>
    <input style={{marginLeft: 700}} type='text' placeholder="search" value={this.state.search} onChange={(event)=>this.handleChange(event)}/>
        <Button color="inherit" onClick={ ()=> this.fetchApi()}>Search</Button>
  </Toolbar>
</AppBar>
            
        </div>
        <div style={{flexGrow: 1}}>
        <Grid container spacing={.5}>
        {card}
        </Grid>
        </div>
        </>
        )
    }
}

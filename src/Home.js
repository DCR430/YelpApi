import React, { Component } from 'react'
import { Card, Button, Row, Container, Col } from 'react-bootstrap';


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
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={obj.image_url} style={{ height: 100}}/>
                <Card.Body>
                    <Card.Title>{obj.name}</Card.Title>
                    <Card.Text>
                        Address: {obj.location.address1}
                    Phone: {obj.phone}
                    </Card.Text>
                    <Button variant="danger" href={obj.url}>See on Yelp</Button>
                </Card.Body>
            </Card> 
        </Col>
    ))
    console.log(this.state.buisnessArray)
        return (
        <>
        <div>
            <input type='text' placeholder="search" value={this.state.search} onChange={(event)=>this.handleChange(event)}/>
            <button onClick={ ()=> this.fetchApi()}>Search</button>
        </div>
        <Container>
            <Row>
        {card}
        </Row>
        </Container>
        </>
        )
    }
}

import React, { Component } from 'react'


// var requestOptions = {
//     mode: 'no-cors',
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
  
//   };


//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", "Bearer fwjzLIkgp310_sMDTc7h2y2_g7IK9_QO6OjsxekFpP9FZCQ8IKJBy2YKnvbgcbCFuuAxJPF2I9xVTtDjUgfsUPKnVNo9oudUwZ3B3VZ3YQ0fT2FHkyBmnpHSNq58X3Yx");
  


export default class Home extends Component {

    state={
        search:"",
        buisnessArray:[]
    }

    // componentDidMount(){
    //     this.fetchApi()
    // }
    
    fetchApi=()=>{
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.search}&latitude=37.786882&longitude=-122.399972`,{
            method: 'GET',
            headers: {
                "Authorization": "Bearer fwjzLIkgp310_sMDTc7h2y2_g7IK9_QO6OjsxekFpP9FZCQ8IKJBy2YKnvbgcbCFuuAxJPF2I9xVTtDjUgfsUPKnVNo9oudUwZ3B3VZ3YQ0fT2FHkyBmnpHSNq58X3Yx"
            },
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => this.setState({
            buisnessArray:result
        }),
        this.setState({
            search: " "
        })
    )}
  
    handleChange = (event) =>{
        this.setState({search:event.target.value});
      }

render() {
    console.log(this.state.buisnessArray)
        return (
        <div>
            <input type='text' placeholder="search" value={this.state.search} onChange={(event)=>this.handleChange(event)}/>
            <button onClick={ ()=> this.fetchApi()}>Search</button>
          
        </div>
        )
    }
}

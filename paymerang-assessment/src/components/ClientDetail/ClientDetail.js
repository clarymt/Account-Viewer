import React, { Component } from 'react';

//Would use axios to get or post data from a server
//Using map() instead since json is from a local file
class ClientDetail extends Component {


  render() {
      const {post} = this.props
      // for (i in myObj.cars) {
      //   x += "<h1>" + myObj.cars[i].name + "</h1>";
      //   for (j in myObj.cars[i].models) {
      //     x += myObj.cars[i].models[j];
      //   }
      // }
      
    return (
      <div>
        <div>test</div>
        <h1>{post.Payee.Name}</h1>
        <p>{post.Payment.PAN}</p>
        {/* {post.Remittance.map((info) => {
          return <div>{post.Remittance[info].PayorName}</div>
        })} */}
        <p>{post.Remittance[1].PayorName}</p>

      </div>
    );
  }
}

export default ClientDetail;

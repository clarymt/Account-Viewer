import React, { Component } from 'react';


class ClientDetail extends Component {


  render() {
      const {post} = this.props
 

    return (
      <div>
        <h1>{post.Payee.Name}</h1>
        <p>{post.Payment.PAN}</p>

       {/* Mapping nested array within JSON file stored in App.js to access Remittance */}
          <ul>
              {post.Remittance.map((sub) =>
              <li>
                {sub.PayorName}
              </li>
              )}
            </ul>


      </div>
    );
  }
}

export default ClientDetail;

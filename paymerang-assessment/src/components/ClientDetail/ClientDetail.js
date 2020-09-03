import React, { Component } from 'react';
import './ClientDetail.css'

class ClientDetail extends Component {


  render() {
    const { post } = this.props


    return (
      <div>
        <br></br>
        {/*Integrated JSON Data with card component of bootstrap*/}
        <div className="card-group p-3">
          <div className="card bg-light">
            <h5 className="card-header">{post.Payee.Name}</h5>
            <div className="card-body">
              <div className="card-text"> Fax: {post.Payee.Fax}</div>
              <div className="card-text"> Phone: {post.Payee.Phone}</div>
              <br></br>
              <div className="card-text">
                {post.Payee.Address.Address1}
                <br></br>
                {post.Payee.Address.City}, {post.Payee.Address.StateOrProvince} {post.Payee.Address.PostalCode}</div>
              <br></br>
              <div className="card-text"> Attn: {post.Payee.Attention}</div>
              <br></br>
              <p className="card-text"><small className="text-muted"> Submission Date: {post.Payee.SubmissionDate}</small></p>
            </div>
          </div>

          <div className="card bg-light">
            <h5 className="card-header">Payment Info</h5>
            <div className="card-body">
              <br></br>
              <div className="card-text">16-digit Prim Acct Num: <br></br> {post.Payment.PAN}</div>
              <br></br>
              <div className="card-text">CVV: {post.Payment.CVV} </div>
              <br></br>
              <div className="card-text">Expiration: {post.Payment.Exp} </div>
            </div>
          </div>

          <div className="card bg-light">
            <h5 className="card-header">Remittance</h5>
            <div className="card-body scrolly">
              {/* Mapping nested array within JSON file stored in App.js to access Remittance */}
              {post.Remittance.map((sub) =>
                <p>
                  {sub.PayorName}
                  <br></br>
                    PayorID: {sub.PayorId}
                  <br></br>
                    InvoiceNo: {sub.InvoiceNo}
                  <br></br>
                  <br></br>
                    Description: {sub.Description}
                  <br></br>
                  <br></br>
                    Amount: {sub.Amount}
                  <br></br>
                  <br></br>
                </p>
              )}

            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>

    );
  }
}

export default ClientDetail;
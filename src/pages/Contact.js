import React, { Component } from 'react';
import './Contact.scss';
import axios from 'axios';

class Contact extends Component{

  handleSubmit(e){
    e.preventDefault();
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const social = document.getElementById('social').value;
    const address = document.getElementById('address').value;
    const address2 = document.getElementById('address2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    axios({
      method: "POST",
      url:"http://localhost:3000/send",
      data: {
        first: first,
        last: last,
        email: email,
        social: social,
        address: address,
        address2: address2,
        city: city,
        state: state,
        zip: zip
      }
    }).then((response)=>{
      if (response.data.msg === 'success'){
        alert("Vivlio has been Booked.");
        this.resetForm()
      }else if(response.data.msg === 'fail'){
        alert("You didnt book this Vivlio.")
      }
    })
  }

  resetForm(){
    document.getElementById('contact').reset();
  }
  
  render() {
    return (
      <div className="container-fluid">
        <form id="contact">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="first">First</label>
              <input type="text" className="form-control" id="first" placeholder="Sam"></input>
            </div>
            <div className="form-group col-md-6">
              <label for="last">Last</label>
              <input type="text" className="form-control" id="last" placeholder="I-Am"></input>
            </div>
            <div className="form-group col-md-6">
              <label for="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="emailme@email.org"></input>
            </div>
            <div className="form-group col-md-6">
              <label for="social">Social "Instagram/Snapchat"</label>
              <input type="text" className="form-control" id="social" placeholder="@instagram_name"></input>
            </div>
          </div>
            <div className="form-group col-md-12">
              <label for="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Middle-Earth "></input>
            </div>
            <div className="form-group col-md-12">
              <label for="address2">Address 2</label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor"></input>
            </div>
            <div className="form-row col-md-12">
              <div className="form-group col-md-6">
                <label for="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="Neverland"></input>
              </div>
            <div className="form-group col-md-4">
              <label for="state">State</label>
              <select id="state" className="form-control">
                <option defaultValue>Do you live in Any of these States?</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="zip">Zipcode</label>
              <input type="text" className="form-control" id="zip"></input>
            </div>
          </div>
        <button type="submit" className="btn btn-primary">Vivlio</button>
        </form>
      </div>
    )
  }
}
export default Contact;

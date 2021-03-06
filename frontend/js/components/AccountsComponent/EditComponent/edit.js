import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import AccountsInput from '../accountsInput';
import UserInformations from '../userInformations';
import { updateRestaurantText } from '../../../alertsConfig';
import FoodgramValidator from '../../../foodgramValidator';
import './edit.scss';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      restName: null,
      description: null,
      address: null,
      avatar: null,
    };
  }

  render = () => {
    return (
      <article className="edit">
        <UserInformations {...this.props}/>
        <Col id="edit-section">
          <form ref="editForm" onSubmit={this.handleSubmit} className="form-inline">
            <AccountsInput onChange={this.updateAvatar} text="Avatar" type="file" refer="avatar" accept="image/*" id="img-input"/>
            <AccountsInput onChange={this.updateRestName} text="Restaurant Name" type="text" refer="restName" placeholder={this.props.auth.rest_name}/>
            <AccountsInput onChange={this.updateDescription} text="Description" type="text" refer="description" placeholder={this.props.auth.description}/>
            <AccountsInput onChange={this.updateAddress} text="Address" type="text" refer="address" placeholder={this.props.auth.address}/>
            <Button type="submit" className="auth-button">Save</Button>
          </form>
        </Col>
      </article>
    );
  }

  updateRestName = (text) => {
    this.setState({restName: text});
  }

  updateAvatar = (text, e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      FoodgramValidator.uploadImage(reader.result,
        this.props.addAlert, updateRestaurantText.avatar)
        .then(()=>{
          this.setState({ avatar: reader.result });
        })
        .catch(()=>{
          this.setState({ avatar: null });
        });
    };
    reader.readAsDataURL(file);
  }

  updateDescription = (text) => {
    this.setState({description: text});
  }

  updateAddress = (text) => {
    this.setState({address: text});
  }

  handleSubmit(e) {
    e.preventDefault();
    FoodgramValidator.editProfile(this.state, this.props.addAlert)
      .then(()=>{
        this.props.update(this.props.auth.login, this.state, this.props.auth.token);
        this.setState({
          restName: null,
          description: null,
          address: null,
          avatar: null,
        });
        this.refs.editForm.reset();
      })
      .catch(()=>{});
  }
}

Edit.propTypes = {
  auth: React.PropTypes.object,
  update: React.PropTypes.func,
  addAlert: React.PropTypes.func,
  user: React.PropTypes.object,
};

export default Edit;

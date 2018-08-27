import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFollow, delFollow } from "../reducer/modules/follow.js";
import { addUser, delUser } from "../reducer/modules/user.js";

@connect(
  state => {
    return {
      code: state.follow.code,
      userList: state.user.list
    };
  },
  {
    addFollow,
    delFollow,
    delUser,
    addUser
  }
)
export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    code: PropTypes.number,
    addFollow: PropTypes.func,
    delFollow: PropTypes.func,
    delUser: PropTypes.func,
    userList: PropTypes.array,
    addUser: PropTypes.func
  };

  handleClick = () => {
    this.props.addFollow();
  };

  handleDel = () => {
    this.props.delFollow();
  };

  delUser = (index) => {
    this.props.delUser(index);
  }

  addUser = () => {
      this.props.addUser();
  }

  render() {
    return (
      <div>
        <h1>demo1</h1>
        <h1>{this.props.code}</h1>
        <div>
          <button style={{ height: "40px", margin: '30px' }} onClick={this.handleClick}>
            Add Number
          </button>
          <button style={{ height: "40px", margin: '30px' }} onClick={this.handleDel}>
            Dele Number
          </button>
        </div>
        <h1>demo2</h1>
        <button style={{ height: "40px", margin: '30px' }} onClick={this.addUser}>
            Add User
          </button>
        {this.props.userList.map((item, index) => {
          return (
            <div style={{ height: '30px', margin: '15px', backgroundColor: "#eee" }} key={index}>
              {item} &nbsp; <span style={{cursor: 'pointer'}} onClick={()=>this.delUser(index)}>X</span>
            </div>
          );
        })}
      </div>
    );
  }
}

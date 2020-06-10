// import UserItem from './components/users/UserItem';
import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
// import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount(){
    // console.log(this.setState);
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    // console.log(res.data);
    this.setState({users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer ={
  'id' :1
  ,'image':'http://placeimg.com/64/64/any'
  ,'name':'차철민'
  ,'birthday' : '200010202'
  ,'gender' : '남자'
  ,'job' : '대학생'
}

class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}

        />
    );
  }
}

export default App;
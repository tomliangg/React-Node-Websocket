import React, { Component } from 'react';
import socketIO from 'socket.io-client';
import './OrderList.css';

const socket = socketIO.connect('http://localhost:4000');
export default class OrderList extends Component {
  state = {
    orders: []
  };

  async componentDidMount() {
    const orderData = await fetch('/api');
    const orderDataJson = await orderData.json();
    this.setState({ orders: orderDataJson });

    socket.on('new order', data =>
      this.setState({ orders: [...this.state.orders, data] })
    );
  }

  render() {
    const { orders } = this.state;
    return (
      <div className="orderlist">
        <ul>
          {orders.map(order => (
            <li key={order.id}>{order.id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class DetailProduk extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  minBeli = 1;

  render() {
    return (
      <div className="box-stock">
        <h2>{this.props.nama}</h2>
        <img
          src="https://source.unsplash.com/640x480?computer"
          alt="Technology"
        />
        <p>Harga: {this.props.harga}</p>
        <p>Stok: {this.props.stock}</p>
        <button
          className="btn"
          onClick={() => this.props.fungsi(this.minBeli)}
          disabled={this.props.disabled}
        >
          Beli
        </button>
        <p>Status: {this.props.status}</p>
      </div>
    );
  }
}

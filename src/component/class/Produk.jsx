import React, { Component } from "react";
import DetailProduk from "./DetailProduk";

export default class Produk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: props.stock,
      status: "Tersedia",
      disabled: false,
    };
  }

  buttonBeli = (jumlah) => {
    this.setState({
      stock: this.state.stock - jumlah,
    });
    if (this.state.stock === 1) {
      this.setState({
        status: "Habis",
        disabled: true,
      });
    }
  };

  render() {
    return (
      <DetailProduk
        stock={this.state.stock}
        nama={this.props.nama}
        harga={this.props.harga}
        status={this.state.status}
        disabled={this.state.disabled}
        fungsi={this.buttonBeli.bind(this)}
      />
    );
  }
}

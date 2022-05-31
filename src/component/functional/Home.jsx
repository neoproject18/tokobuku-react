import React from "react";
import Produk from "../class/Produk";
import Blog from "./Blog";
import "../css/style.css";

const Home = () => {
  return (
    <div>
      <div>
        <Blog
          tanggal="20 Mei 2022"
          judul="Teknologi Informasi"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        />
        <Blog
          tanggal="21 Mei 2022"
          judul="Mobile Application"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        />
        <Blog
          tanggal="22 Mei 2022"
          judul="Internet of Thing"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        />
        <Blog
          tanggal="23 Mei 2022"
          judul="Robotic"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        />
        <Blog
          tanggal="24 Mei 2022"
          judul="Future Technology"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        />
      </div>
      <Produk nama="Produk Random" stock="10" harga="17000000" />
      <Produk nama="Produk Random" stock="15" harga="16000000" />
      <Produk nama="Produk Random" stock="12" harga="15000000" />
      <Produk nama="Produk Random" stock="5" harga="16000000" />
      <Produk nama="Produk Random" stock="30" harga="10000000" />
    </div>
  );
};

export default Home;

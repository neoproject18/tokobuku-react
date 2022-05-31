import React from "react";

export default function Blog(props) {
  return (
    <div className="blog-wrap">
      <img
        src="https://source.unsplash.com/640x480?technology"
        alt="Technology"
      />
      <p>
        <small>{props.tanggal}</small>
      </p>
      <p>
        <h1>{props.judul}</h1>
      </p>
      <p>{props.summary}</p>
    </div>
  );
}

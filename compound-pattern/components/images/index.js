import React from "react";
import ImageOptions from "./imageOptions";
import './styles.css';

const sources = [
  "https://picsum.photos/1260/750?random=1",
  "https://picsum.photos/1260/750?random=2",
  "https://picsum.photos/1260/750?random=3"
];

function Image({ source }) {
  return (
    <div className="image-item">
      <img src={source} alt="Squirrel" />
      <ImageOptions />
    </div>
  );
}

export default function ImageList() {
  return sources.map((source, i) => <Image source={source} key={i} />);
}

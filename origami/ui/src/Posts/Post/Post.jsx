import styles from "./styles.module.css";
import React from "react";
import logo from "../../assets/blue-origami-bird.png";

function Post({ children, author, imageUrl, imageAlt }) {
  return (
    <div className={styles.Post}>
      <img src={imageUrl} alt={imageAlt} />
      <p className={styles.description}>{children}</p>
      <div>
        <span>
          <small>Author:</small>
          {author}
        </span>
      </div>
    </div>
  );
}

Post.defaultProps = {
  imageUrl: logo,
  imageAlt: "Origami"
};

export default Post;

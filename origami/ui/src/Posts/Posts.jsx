import styles from "./styles.module.css";
import React from "react";
import Post from "./Post/Post";
import logo from "../assets/blue-origami-bird.png";
import { postService } from "../services/post-service";

// function Posts() {
//   return (
//     <div className={styles.Posts}>
//       <Post imageUrl={logo} author="Svetlin">
//         Is this working ?
//       </Post>
//       <Post imageUrl={logo} author="Svetlin">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
//         explicabo? Repellat, ut numquam. Debitis unde laudantium minus totam
//         quos, incidunt similique temporibus qui, voluptate autem vel cupiditate
//         omnis itaque facilis!
//       </Post>
//       <Post author="Svetlin">Is this working ? </Post>
//     </div>
//   );
// }

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: null
    };
  }

  componentDidMount() {
    postService.load().then((data) => {
      this.setState({
        posts: data
      });
    });
  }

  renderPosts = () => {
    return this.state.posts.map((post) => {
      return (
        <Post key={post.id} author={post.userId}>
          {post.body}
        </Post>
      );
    });
  };

  render() {
    return (
      <div className={styles.Posts}>
        {this.state.posts ? this.renderPosts() : <div>Loading</div>}
      </div>
    );
  }
}

export default Posts;

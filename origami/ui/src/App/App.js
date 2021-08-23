import styles from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import AssideNavigation from "../AssideNavigation/AssideNavigation";
import Main from "../Main/Main";
import Posts from "../Posts/Posts";
import Footer from "../Footer/Footer";
import Form from "../Form";

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <div className={styles.Container}>
        <AssideNavigation />
        <Form />
        <Main title="Hellooooooooooo there">
          <Posts />
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

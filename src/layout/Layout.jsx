import "./Layout.scss"
import {Nav, Footer} from "../components"

export function Layout(props) {
  const { children } = props;
  return (
    <div className="main">
      <header>
        <Nav/>
      </header>
      <div className="main_content">
        <div className="container">{children}</div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

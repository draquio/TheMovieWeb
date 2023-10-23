import "./Layout.scss"
import {Nav} from "../components"
export function Layout(props) {
  const { children } = props;
  return (
    <div className="main">
      <header>
        <Nav/>
      </header>
      <div className="main_content">
        <div className="container">{children}</div>
        <div className="sidebar">Sidebar</div>
      </div>
      <footer>
        <div className="footer">@Draquio</div>
      </footer>
    </div>
  );
}

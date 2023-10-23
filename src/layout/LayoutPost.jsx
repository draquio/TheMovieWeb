import "./Layout.scss"
import {Nav} from "../components"
export function LayoutPost(props) {
  const { children } = props;
  return (
    <div className="main">
      <header>
        <Nav/>
      </header>
      <div className="main_content">
        <div className="container_alone">{children}</div>
      </div>
      <footer>
        <div className="footer">@Draquio</div>
      </footer>
    </div>
  );
}

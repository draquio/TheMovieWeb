import { AiFillCloseCircle } from "react-icons/ai";
import "./Modal.scss";
export function Modal(props) {
  const { videokey, isOpenModal, handleOpenVideo } = props;

  return (
    <div className={`modal ${isOpenModal ? "active" : ""}`} onClick={handleOpenVideo}>
      <div className="modal_content">
        <AiFillCloseCircle
          className="icon_close_modal"
          onClick={handleOpenVideo}
        />
        <div className="modal_video">
          <iframe
            src={`https://www.youtube.com/embed/${videokey}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

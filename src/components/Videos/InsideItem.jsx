import { BsPlayFill } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import defaultvideo from "../../assets/defaultvideo.jpg";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal";
import { useState } from "react";
export function InsideItem(props) {
  const { video } = props;
  const [isOpenModal, setisOpenModal] = useState(false);
  const handleOpenVideo = () => {
    setisOpenModal(!isOpenModal);
  }
  if (!video || video.length === 0) return <Loader />
  return (
    <>
        <div className="trailer_item" onClick={handleOpenVideo}>
          <p className="title_trailer">{video.name}</p>
          <figure className="image_container_trailer">
            <LazyLoadImage
              alt={video.name}
              className="image_trailer"
              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
              placeholderSrc={defaultvideo}
              effect="blur"
            />
          </figure>
          <BsPlayFill className="icon_play" />
          <span className="quality_item">{video.size}p</span>
        </div>
        { isOpenModal ? <Modal videokey={video.key} isOpenModal={isOpenModal} handleOpenVideo={handleOpenVideo}/>  : ""}
    </>
  );
}

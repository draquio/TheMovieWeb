import { BsPlayFill } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import defaultvideo from "../../assets/defaultvideo.jpg";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal";
import { useState } from "react";
export function InsideItem(props) {
  const { video } = props;
  const title = video.name.length > 30 ? video.name.substring(0, 25) + ' ...' : video.name;
  const [isOpenModal, setisOpenModal] = useState(false);
  const handleOpenVideo = () => {
    setisOpenModal(!isOpenModal);
  }
  if (!video || video.length === 0) return <Loader />
  return (
    <>
        <div className="trailer_item" onClick={handleOpenVideo}>
          <p className="title_trailer">{title}</p>
          <figure className="image_container_trailer">
            <LazyLoadImage
              alt={video.name}
              className="image_trailer"
              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
              effect="blur"
              width={300}
              height={200}
            />
          </figure>
          <BsPlayFill className="icon_play" />
          <span className="quality_item">{video.size}p</span>
        </div>
        { isOpenModal ? <Modal videokey={video.key} isOpenModal={isOpenModal} handleOpenVideo={handleOpenVideo}/>  : ""}
    </>
  );
}

import { useEffect, useState } from "react";
import { Video as VideoClass } from "../../services/Video";
import { TrailerInside, TeaserInside } from "../Videos";
import { BsPlayFill } from "react-icons/bs";

export function BodyMovie(props) {
  const [videos, setVideos] = useState(null);
  const [activeTab, setActiveTab] = useState("trailer");
  const handleTabclick = (tab) => {
    setActiveTab(tab);
  };
  const { movie } = props;
  useEffect(() => {
    (async () => {
      try {
        const videoController = new VideoClass();
        const response = await videoController.getVideos(movie.id, "movie");
        setVideos(response);
      } catch (error) {}
    })();
  }, [movie.id]);
  if (!videos)
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <div className="body_post">
      <div className="button_content">
        <button onClick={() => handleTabclick("trailer")}><BsPlayFill className="icon_play" /> Trailers</button>
        <button onClick={() => handleTabclick("teaser")}><BsPlayFill className="icon_play" /> Teasers</button>
      </div>
      <div className="trailer_content">
        {activeTab === "trailer" && <TrailerInside trailers={videos.trailers} />}
        {activeTab === "teaser" && <TeaserInside teasers={videos.teasers} />}
      </div>
    </div>
  );
}

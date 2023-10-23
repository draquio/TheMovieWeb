import { useEffect, useState } from "react";
import { Video as VideoClass } from "../../services/Video";
import { TrailerInside, TeaserInside } from "../Videos";

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
  }, []);
  if (!videos)
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <div className="body_post">
      <button onClick={() => handleTabclick("trailer")}>Trailers</button>
      <button onClick={() => handleTabclick("teaser")}>Teasers</button>
      {activeTab === "trailer" && <TrailerInside trailers={videos.trailers} />}
      {activeTab === "teaser" && <TeaserInside teasers={videos.teasers} />}
    </div>
  );
}

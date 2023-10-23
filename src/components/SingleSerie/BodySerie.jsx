import { useEffect, useState } from "react";
import { TrailerInside, TeaserInside } from "../Videos";
import { Video as VideoClass} from "../../services/Video";

export function BodySerie(props) {
  const [videos, setVideos] = useState(null);
  const [activeTab, setActiveTab] = useState("trailer");
  const handleTabclick = (tab) => {
    setActiveTab(tab);
  };
  const { serie } = props;
  useEffect(() => {
    (async () => {
      try {
        const videoController = new VideoClass();
        const response = await videoController.getVideos(serie.id, "tv");
        setVideos(response);
      } catch (error) {}
    })();
  }, []);
  if (!videos)
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <>
      <button onClick={() => handleTabclick("trailer")}>Trailers</button>
      <button onClick={() => handleTabclick("teaser")}>Teasers</button>
      {activeTab === "trailer" && <TrailerInside trailers={videos.trailers} />}
      {activeTab === "teaser" && <TeaserInside teasers={videos.teasers} />}
    </>
  );
}

import { useEffect, useState } from "react";
import { TrailerInside, TeaserInside } from "../Videos";
import { Video as VideoClass} from "../../services/Video";
import { BsPlayFill } from "react-icons/bs";
import { Seasons } from "../Seasons";

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

    <div className="body_post">
      <div className="button_content">
        <button onClick={() => handleTabclick("trailer")}><BsPlayFill className="icon_play" />Trailers</button>
        <button onClick={() => handleTabclick("teaser")}><BsPlayFill className="icon_play" />Teasers</button>
        <button onClick={() => handleTabclick("season")}><BsPlayFill className="icon_play"/>Temporadas</button>
      </div>
      <div className="trailer_content">
        {activeTab === "trailer" && <TrailerInside trailers={videos.trailers} />}
        {activeTab === "teaser" && <TeaserInside teasers={videos.teasers} />}
        {activeTab === "season" && <Seasons seasons={serie.seasons} />}
      </div>
    </div>
  );
}

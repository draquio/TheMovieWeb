import "./Inside.scss";
import {Emptydata} from "../Emptydata"
import {InsideItem} from './InsideItem'
import { Loader } from "../Loader/Loader";
export function TeaserInside(props) {
  const { teasers } = props;
  if (!teasers) return <Loader />
  if (teasers.length === 0) return <Emptydata data={"Teasers"} />
  return (
    <>
    {teasers.map(teaser => (
      <InsideItem key={teaser.key} video={teaser} />
    ))}
    </>
  );
}

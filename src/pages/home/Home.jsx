import { TrendingMovie } from "../../components/Movies";
import { TrendingSerie } from "../../components/Series";
import "../../components/scss/singleitem.scss"
import "../../components/scss/titles.scss"
export function Home() {
  return (
    <>
      <TrendingMovie />
      <br/>
      <br/>
      <TrendingSerie />
    </>
  );
}

import { TrendingMovie } from "../../components/Movies";
import { TrendingSerie } from "../../components/Series";
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

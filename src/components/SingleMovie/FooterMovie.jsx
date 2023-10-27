import {RecommendationMovie} from '../Movies/RecommendationMovie'
export function FooterMovie(props) {
    const {id} = props;
  return (
    <RecommendationMovie id={id} />
  )
}

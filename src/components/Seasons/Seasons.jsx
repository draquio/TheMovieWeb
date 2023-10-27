import {SeasonItem} from './SeasonItem'

export function Seasons(props) {
    const {seasons} = props;
    if(!seasons) return ""
  return (
    <>
    {seasons.map(season => (
        <SeasonItem key={season.id} season={season} />
    ))}
    </>
  )
}

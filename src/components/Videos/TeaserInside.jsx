
import "./Inside.scss";

export function TeaserInside(props) {
  const { teasers } = props;
  return (
    <>
      {teasers.map((teaser) => (
        <div key={teaser.id}>
            <p>{teaser.name}</p>
            <img alt={teaser.name} className="image_trailer" src={`https://i.ytimg.com/vi/${teaser.key}/hqdefault.jpg`} />
        </div>
      ))}
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Genre as GenreClass } from "../../services/Genre";
import "./Genre.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export const Genre = (props) => {
  const { type } = props;
  const [genreList, setGenreList] = useState(null);
  const { name } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const genreController = new GenreClass();
        const response = await genreController.getGenres(type);
        setGenreList(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [type]);
  if (!genreList || genreList.length === 0) return;
  return (
    <div className="genre">
      <ul className="genre-list">
        {genreList.map((item) => (
          <li key={item.id}>
            <Link to={`/genre/${type}/${item.name}/${item.id}`}>
              <span className={`${item.name === name && 'genre_active'}`}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

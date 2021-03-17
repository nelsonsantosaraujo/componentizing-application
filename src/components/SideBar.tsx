import { useContext, useEffect, useState } from 'react';

import { Button } from './Button';
import '../styles/sidebar.scss';
import { api } from '../services/api';
import { ContentContext } from '../context/ContentContext';

export function SideBar() {
  const { changeGenre, selectedGenreId } = useContext(ContentContext);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => changeGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}
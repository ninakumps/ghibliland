import { useState } from "react";
import Popup from "reactjs-popup";
import "./App.css";
import { IGhibli } from "./ghibli.type";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
  movie: IGhibli;
}

export const MovieCard = ({ movie }: Props) => {
  const [open, setOpen] = useState(false);
  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <div className="movie pointer" onClick={() => setOpen(true)}>
        <div>
          <p>{movie.title}</p>
          <img src={movie.image} alt={movie.title} />
        </div>
      </div>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <div className="closeIcon pointer">
            <IoIosCloseCircleOutline onClick={closeModal} size={32} />
          </div>

          <div className="modalInfo">
            <img src={movie.image} alt={movie.title} />
            <div>
              <h2>
                {movie.title} ~ {movie.original_title}
              </h2>
              <p className="movieDescription">{movie.description}</p>
              <p>
                <strong> Director: </strong>
                {movie.director}
              </p>
              <p>
                <strong> Producer: </strong>
                {movie.producer}
              </p>
              <p>
                <strong> Release date: </strong>
                {movie.release_date}
              </p>
              <p>
                <strong> Running time: </strong>
                {movie.running_time} minutes
              </p>
              <p>
                <strong>Rating: </strong>
                {movie.rt_score}/100
              </p>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

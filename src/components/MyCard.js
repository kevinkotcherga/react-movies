import React from 'react';
import { Card, Avatar } from 'antd';
import { HeartFilled } from '@ant-design/icons';
const { Meta } = Card;

const MyCard = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join('/');
  };

  return (
    <div>
      <Card
            style={{ width: 300, margin: 20}}
            cover={
              <img
                alt="example"
                src={movie.poster_path ?
                  "https://image.tmdb.org/t/p/w500" + movie.poster_path : "./img/poster.jpg"}
                className='img-card'
                style={{ padding: 10 }}
              />
            }
            actions={[
              <HeartFilled />
            ]}
          >
            <p>
              {movie.release_date ? (
              <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
              ) : ""}
              <h4>{movie.vote_average}/10<span>⭐</span></h4>
            </p>
            <Meta
              title={movie.title}
              description="This is the description"
            />
          </Card>
    </div>
  );
};

export default MyCard;

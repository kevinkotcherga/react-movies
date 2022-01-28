import React from 'react';
import { Card, Avatar } from 'antd';
import { HeartFilled } from '@ant-design/icons';
const { Meta } = Card;

const MyCard = ({ movie }) => {
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
            <Meta
              title={movie.title}
              description="This is the description"
            />
          </Card>
    </div>
  );
};

export default MyCard;

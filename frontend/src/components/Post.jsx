import React from 'react';

function Post({ post }) {
  return (
    <div>
      <p>
        <span>Username: </span>
        {post.name}
      </p>
      <p>
        <span>Rank:</span> {post.rank}
      </p>
      <p>
        <span>Region:</span> {post.region}
      </p>
      <p>
        <span>Microphone:</span>
        {post.microphone}
      </p>
      <p>
        <span>Roles:</span>
        {post.roles}
      </p>
      <p>
        <span>About:</span> {post.description}
      </p>
      <p>Looking for players in range:</p>
      <div>
        <p>{post.lookingFrom}</p>
        <p>{post.lookingTo}</p>
      </div>
      <p>In region: {post.lookingRegion}</p>
      <div>
        <p>{post.discord}</p>
        <p>{post.riot}</p>
      </div>
    </div>
  );
}

export default Post;

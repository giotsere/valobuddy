import React from 'react';

function Post({ post }) {
  return (
    <div>
      <p>{post.name}</p>
      <p>
        <strong>Rank:</strong> {post.rank}
      </p>
      <p>
        <strong>Region:</strong> {post.region}
      </p>
      <p>
        <strong>Microphone</strong> {post.microphone}
      </p>
      <p>
        <strong>Roles</strong>
        {post.roles}
      </p>
      <p>
        <strong>About:</strong> {post.description}
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

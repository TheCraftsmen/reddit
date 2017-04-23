import React from 'react';
import Post from './Post';

import { connect } from 'react-redux';

const PostList = (data) => {
  console.log(data);
  return (
       <ul >
         {
         	data.posts.map( d => ( <Post  key={ d.id } {...d} /> )  )
         }
       </ul>
  );
};

export default connect( state => state, {})(PostList);



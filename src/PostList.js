import React from 'react';
import data from './data';
import Post from './Post';

import { connect } from 'react-redux';

const PostList = () => {
  console.log(data);
  return (
       <ul >
         <li>aca</li>
         <li>tuca</li>
         {
         	data.map( d => ( <Post  key={ d.id } {...d} /> )  )
         }
       </ul>
  );
};

export default connect( state => state, {})(PostList);



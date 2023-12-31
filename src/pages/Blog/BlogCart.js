import React from 'react';

const BlogCart = ({alldata}) => {
  const {image, title, details, picture } = alldata;
  return (
    <div className="bolgcartbody">
        <div className="blog-img">
        {!picture ? <img src={image} alt="" /> : 
        <img src={`data:img/png;base64,${picture}`} alt="" />}
        </div>

        <h1>{title}</h1>
        <p>{details}</p>
    </div>
  )
}

export default BlogCart
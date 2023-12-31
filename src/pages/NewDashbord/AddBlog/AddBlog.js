import React, { useState } from 'react';
import './AddBlog.css';
import Dropfileinput from './Dropfileinput';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddBlog = () => {
  const [img, setImg] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('image', data.image);
    formData.append('details', data.details);
    formData.append('picture', img);
    fetch('https://easy-rent-server-kappa.vercel.app/api/blog', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'A new blog has been addeded',
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  return (
    <div className="addblogbody">
      <h1>AddBlog</h1>
      <div className="fileuploadbody">
        <div className="blog-box">
          <Dropfileinput onFileChange={(files) => setImg(files[0])} />

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="file" {...register("picture")} placeholder="Put the Image" /> <br /> */}
            {/* <input type="text" {...register("image")} placeholder="Image Link" /> <br /> */}
            <input type="text" {...register('title')} placeholder="Title" />{' '}
            <br />
            <textarea
              className="text-area"
              type="text"
              {...register('details')}
              placeholder="Description"
            />{' '}
            <br />
            <input className="submit-btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

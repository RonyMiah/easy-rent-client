import React, { useState } from 'react';
import './AddProduct.css';
import Dropfileinput from '../AddBlog/Dropfileinput';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const [img, setImg] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('year', data.year);
    formData.append('price', data.price);
    formData.append('kilo', data.kilo);
    formData.append('type', data.type);
    formData.append('fual', data.fual);
    formData.append('discountPrice', data.discountPrice);
    formData.append('picture', img);
    fetch('https://easy-rent-server-kappa.vercel.app/api/addService', {
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
    <div className="addproductbody">
      <h1>AddProduct</h1>
      <div className="productfileuploadbody">
        <div className="d-product-box">
          <Dropfileinput onFileChange={(files) => setImg(files[0])} />

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="text" {...register("image")} placeholder="Image Link" /> <br /> */}
            <input type="text" {...register('name')} placeholder="Car Name" />{' '}
            <br />
            <input
              type="text"
              {...register('year')}
              placeholder="Model Year"
            />{' '}
            <br />
            <input
              type="text"
              {...register('price')}
              placeholder="Rent Price"
            />{' '}
            <br />
            <input
              type="text"
              {...register('kilo')}
              placeholder="Car Kilo"
            />{' '}
            <br />
            <input
              type="text"
              {...register('type')}
              placeholder="Auto or Manual"
            />{' '}
            <br />
            <input
              type="text"
              {...register('fual')}
              placeholder="Disel or Fual"
            />{' '}
            <br />
            <input
              type="text"
              {...register('discountPrice')}
              placeholder="Discount Price"
            />{' '}
            <br />
            <input
              type="text"
              {...register('details')}
              placeholder="Car Details"
            />{' '}
            <br />
            {/* <textarea className="text-area" type="text" {...register("details")} placeholder="Comment"  /> <br /> */}
            <input className="submit-btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

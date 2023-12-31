import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import './MyOrder.css';
import React from 'react';

const MyOrder = ({ order, deleteOrder }) => {

    const { _id, product_name, product_imgUrl, cus_email, cus_name, date_start, date_end, total_amount } = order || {}



    return (
        <>
            {/* <div className='order-container'>
                <div className="order-card">
                    <img className='order-image' src={product_imgUrl} alt="" />
                    <div className="order-intro">
                        <h1 className='order-name'>{product_name}</h1>
                        <p className='order-details'>{
                            date_start}</p>
                        <p className='order-details'>{date_end}</p>
                        <p className='order-details'>{total_amount}</p>
                    </div>
                </div>
            </div> */}
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, textAlign: "center", maxHeight: 550 }}>
                    <CardMedia
                        component="img"
                        width="100%"
                        height="380px"
                        image={product_imgUrl}
                        alt="Product image"
                    />
                    <CardContent sx={{ paddingBottom: 5 }}>
                        {/* <Typography gutterBottom variant="h6" component="div">
                            {product_name}
                        </Typography> */}
                        {/* <Typography gutterBottom variant="h5" component="div">
                            Car Name: {carName}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Email: {email}
                        </Typography> */}
                        {/* <Typography gutterBottom variant="h6" component="div">
                            Rent Price: {total_amount}
                        </Typography> */}
                        <Typography variant="body2" color="text.secondary">
                            Product Name: {product_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Customer Email: {cus_email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: ${total_amount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rent Date: {date_start}
                        </Typography>
                        <Typography sx={{ marginBottom: "4px" }} variant="body2" color="text.secondary">
                            Return Date: {date_end}
                        </Typography>
                        <Button onClick={() => deleteOrder(_id)} variant="contained" style={{
                            backgroundColor: "#212121",
                        }}>
                            Cancel Order
                        </Button>
                        {/* <button className="delete-btn" ><DeleteIcon></DeleteIcon></button> */}
                        {/* <button className="deleteservice-button">Delete Order</button> */}
                    </CardContent>
                </Card>
            </Grid>

        </>
    );
};

export default MyOrder;
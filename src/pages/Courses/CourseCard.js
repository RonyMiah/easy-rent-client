import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import useAuth from '../../hooks/useAuth';

export default function CourseCard({ course }) {
  const { user } = useAuth();
  const { courseId, courseTitle, trainer, description, bannerImg } = course;
  const [paymentCourse, setPaymentCourse] = React.useState();

  React.useEffect(() => {
    fetch(
      `https://easy-rent-server-kappa.vercel.app/api/find/coursePayed/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setPaymentCourse(data[0]));
  }, [user?.email]);
  // console.log(paymentCourse);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          border: '2px solid gray',
          p: 1,
          boxShadow: '0px 5px 5px 1px gray',
        }}
      >
        <CardMedia
          component="img"
          alt="Teeth Dentistry"
          image={bannerImg}
          height="250px"
        />
        <CardContent textAlign="center">
          <Typography gutterBottom variant="h6" component="div">
            Course: {courseTitle}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Trainer: {trainer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Typography sx={{ textAlign: 'center', pb: 2 }}>
          {paymentCourse?.product_name == courseId ? (
            <Link to={`/course/${courseId}`}>
              <Button sx={{ backgroundColor: 'orange' }} variant="contained">
                Continue
              </Button>
            </Link>
          ) : (
            <Link to={`/course/details/${courseId}`}>
              <Button sx={{ backgroundColor: 'orange' }} variant="contained">
                View Details
              </Button>
            </Link>
          )}
        </Typography>
      </Card>
    </Grid>
  );
}

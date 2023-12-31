import { Button, Container, Typography, Grid } from "@mui/material";
import React from "react";
import courseImg from "../../../../images/course.png";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Appbar from "../../../Shared/Appbar/Appbar";

const CourseHome = () => {
    return (
        <>
            <Appbar />
            <Container>
                <Typography
                    variant="h4"
                    style={{
                        textAlign: "center",
                        fontSize: "70px",
                        fontStyle: "italic",
                        marginBottom: "80px",
                        color: "#E78E52",
                    }}
                >
                    Rider Courses
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        textAlign: "left",
                        fontSize: "30px",
                        fontStyle: "italic",
                        my: "10px",
                    }}
                >
                    Course 1
                </Typography>

                <Grid container spacing={2}>
                    <Grid xs={4} item>
                        <img className="image_Optimize" src={courseImg} alt="" />
                        <h2>How to Drive safely</h2>
                        <h4>Course Fee$ 500</h4>
                        <p>
                            Save on your Car Rental. World's Biggest Car Rental Service. No
                            Credit Card Fees. Unbeatable Prices. We Speak Your Language.
                        </p>
                        <br />
                        <Link className="btn_design " to="/GetCourses">
                            <Button className="btn_color" variant="contained">
                                See Course
                            </Button>
                        </Link>
                    </Grid>

                    <Grid xs={4} item>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            Upcoming Courses ... <br />
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default CourseHome;

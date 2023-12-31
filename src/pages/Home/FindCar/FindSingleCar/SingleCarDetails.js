import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
// icons
import { GiAchievement } from "react-icons/gi";
import { AiFillStar, AiFillCar } from "react-icons/ai";
import { FaDoorOpen } from "react-icons/fa";
import { FcKey, FcAutomotive, FcFilmReel } from "react-icons/fc";
import { BiGasPump } from "react-icons/bi";
import { MdEventSeat } from "react-icons/md";
import {
  MdPublishedWithChanges,
  MdSettingsBluetooth,
  MdSupport,
  MdUsb,
  MdCameraAlt,
  MdCable,
  MdPinDrop,
  MdAudiotrack,
} from "react-icons/md";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SingleCarDetails = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen(true);
  const handleClose2 = () => setOpen(false);

  return (
    <div>
      <Grid container sx={{ my: 2 }}>
        <Grid item>
          <Typography variant="h6">
            5 <AiFillStar style={{ color: "orange" }} /> (50 trips)
          </Typography>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="h6">
                <AiFillCar /> 28MPG
              </Typography>
              <Typography variant="h6">
                <FaDoorOpen /> 4 Doors
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                <BiGasPump /> Gas(Premium)
              </Typography>
              <Typography variant="h6">
                <MdEventSeat /> 4 seats
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" spacing={3}>
        <Grid item>
          <Typography variant="h4" fontWeight="bold">
            Hosted By
          </Typography>
          <img
            style={{ borderRadius: "50%" }}
            src="https://images.turo.com/media/driver/HxO8KM_gSE2MTn-PK00LCw.160x160.jpg"
            alt=""
          />
        </Grid>
        <Grid item px={2}>
          <Typography variant="h4">Oleg</Typography>
          <GiAchievement /> All-Star Host
          <br /> 200 trips, Join Oct 2018 Host
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <GiAchievement /> All-Star Hosts All-Star Hosts are the most
            experienced and responsive hosts on Turo.
            <Button onClick={() => handleOpen1()}>See more...</Button>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  style={{ width: "100%" }}
                  src="https://images.turo.com/media/vehicle/images/KbS38WweSM-w_IaNy6inTQ.1440x700.jpg"
                  alt=""
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  All-Star Hosts
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  All-Star Hosts All-Star Hosts are the most experienced and
                  responsive hosts on Turo. These outstanding hosts have
                  completed at least 10 trips in the last year, and consistently
                  go the extra mile, earning excellent reviews from guests.
                </Typography>
              </Box>
            </Modal>
          </Typography>
          <Typography variant="body1">
            <GiAchievement /> Terah has completed training on enhanced cleaning
            and disinfection practices.
            <Button onClick={() => handleOpen2()}>See more...</Button>
            <Modal
              open={open}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  style={{ width: "100%" }}
                  src="https://images.turo.com/media/vehicle/images/KbS38WweSM-w_IaNy6inTQ.1440x700.jpg"
                  alt=""
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Cleaning & disinfection training
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  This host has completed training on enhanced cleaning and
                  disinfection practices that use the latest recommendations
                  compiled from the CDC, EPA, WHO, and vehicle detailing
                  experts.
                </Typography>
              </Box>
            </Modal>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
        Description
      </Typography>
      <Typography variant="body1">
        Thinking of buying a Tesla? Test drive this one before you buy.
        <br />
        This is a new 2021 Tesla Model 3 in a custom matte green wrap. You'll
        turn heads and stand out from other Tesla's on the road in this unique
        color during your trip. Book this car now and enjoy the car of the
        future. If it's your first time driving a Tesla, please be sure to check
        out some videos on YouTube on how to operate the vehicle :) You can type
        in 2021 Tesla Model 3 in the search bar You will receive a full charge,
        or close to full at the start of your trip, please try to return close
        to the same level. There are many supercharging station conveniently
        located all around so you will be sure to find a station along your trip
        route. Charging can take anywhere from 15-40mins at a supercharging
        station depending on the battery level at the start of charge. NO
        SMOKING of any kind, and NO PETS inside the vehicle. A substantial fee
        will be assessed if this rule is violated.
        <br />
        <br />
        ***PLEASE NOTE TURO IS A CAR SHARING COMMUNITY***
        <br />
        <br />
        In other words, treat the vehicle as if it were your own. Looking
        forward to hosting your next trip!
      </Typography>
      <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
        Features
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6">
            <MdSupport /> Must be 21+ to book
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <MdPublishedWithChanges /> Android Auto
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <MdAudiotrack /> AUX input
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <AiFillCar /> Blind spot warning
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <MdPinDrop /> GPS
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <AiFillCar /> Keyless entry
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <AiFillCar /> Toll pass
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <MdUsb /> USB input
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <FcAutomotive /> Automatic transmission
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <AiFillCar /> Apple CarPlay
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <MdCameraAlt /> Backup camera
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <MdSettingsBluetooth /> Bluetooth
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <FcFilmReel /> Heated seats
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <FcKey /> Key less
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            <MdCable /> USB charger
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
        Guidelines
      </Typography>
      <Typography variant="body1">
        Please note, all of our vehicles are not pet-friendly. A violation fee
        will be applied if you transport a pet without permission.
      </Typography>
    </div>
  );
};

export default SingleCarDetails;

import React, { useState, useRef } from "react";

import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@material-ui/core";

import emailjs from "@emailjs/browser";

export const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState("");
  // const [error, setError] = useState("");
  const form = useRef(); //useRef is a hook that allows you to create a reference to an element in the DOM

  const sendEmail = (e) => {
    emailjs.init(process.env.REACT_APP_YOUR_PUBLIC_KEY);
    e.preventDefault();
    console.log(form); //this will log the form data to the console (for testing purposes
    const templateParams = {
      name: name,
      last_name: lastName,
      message: message,
      email: email,
      phone: phone,
    };
    console.log(templateParams);
    console.log(form.current[0].value.name);
    emailjs
      .send(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log("form", form.current);
  console.log("name", name);
  return (
    //create a from with a name, email, and message

    <Card style={{ maxWidth: 450, margin: "0 auto" }}>
      <CardContent>
        <form ref={form} onSubmit={sendEmail}>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Fill out the form to contact us! We can't wait to hear from you!
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter First Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last name"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="phone"
                label="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555)555-5555"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                minRows="4"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your Message here!"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contactus;

import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurant');
    const [rating, setRating] = useState('');

    const places = [
        { name: "Gurugaon" },
        { name: "Delhi" },
        { name: "Noida" },
        { name: "Gurugaon" },
        { name: "Delhi" },
        { name: "Noida" },
        { name: "Gurugaon" },
        { name: "Delhi" },
        { name: "Noida" },
        { name: "Gurugaon" },
        { name: "Delhi" },
        { name: "Noida" }
    ]

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants, Hotels and Attraction near you..</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => (setType(e.target.value))}>
                    <MenuItem value="restaurant">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attraction">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={rating} onChange={(e) => (setRating(e.target.value))}>
                    <MenuItem value="0">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid className={classes.list} container spacing={3}>
                {places?.map((places, i) => (
                    <Grid item xs={12} key={i}>
                        <PlaceDetails place={places} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default List;

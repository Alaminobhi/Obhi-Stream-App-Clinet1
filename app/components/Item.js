"use client"
import React, { useEffect, useState } from 'react';

const Item = ({item}) => {
    console.log(`http://localhost:5000/videos/${item}`);
    const url = `http://localhost:5000/videos/${item}`;
    return (
        <div>
            <h1>{item}</h1>
            <video width="650" controls muted="muted" loop>
            <source src={url} type="video/mp4" />
            </video>
           
        </div>
    );
};

export default Item;
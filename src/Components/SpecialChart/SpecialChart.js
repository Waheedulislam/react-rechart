import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phons, setPhons] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    };
                    return ph;
                });
                setPhons(phoneData);
                console.log(phoneData);
            })
    }, [])
    return (
        <BarChart width={800} height={400} data={phons}>
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey={'name'}></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </BarChart>
    );
};

export default SpecialChart;
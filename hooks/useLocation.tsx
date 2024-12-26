"use client"
import React, { useEffect } from 'react'

export const UseLocation = () => {

    useEffect(() => {
        getLocation();
    }, [])

    const getLocation = async () => {
        const resp = await fetch("https://ipapi.co/json/");
        const data = await resp.json();

        const userData = {
            capital: data.country_capital,
            country: data.country_name,
            region: data.region,
            city: data.city,
            postal: data.postal,
            ip: data.ip,
            location: {
                lat: data.latitude,
                lng: data.longitude
            }
        }
        console.log(userData);
    }

    return (
        <div>useLocation</div>
    )
}

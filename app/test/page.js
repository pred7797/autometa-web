"use client"
import { useEffect, useState } from 'react';

export default function test() {
    const [data, setData] = useState('');

    useEffect(() => {
        // Make an HTTP GET request to the server's API route
        fetch('http://localhost:3001/api/data')
            .then((res) => res.json())
            .then((result) => {
                console.log(result); 
                setData(result.message);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div>
            <p>Data from the server: {data}</p>
        </div>
    )
}

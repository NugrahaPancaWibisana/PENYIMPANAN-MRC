'use client';
export const config = { amp: true }

import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const formatTime = (date: Date) => 
    date.toLocaleTimeString('id-ID', { hour12: false });

const formatDate = (date: Date) => 
    date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

export default function Clock() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date());
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (!time) {
        return (
            <Card className="w-full">
                <CardContent className='flex flex-col justify-center items-center w-full h-full'>
                    <p className="text-xl">Loading...</p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full">
            <CardContent className='flex flex-col justify-center items-center w-full h-full'>
                <p className="text-xl">{formatDate(time)}</p>
                <p className='text-5xl font-black'>{formatTime(time)}</p>
            </CardContent>
        </Card>
    );
}

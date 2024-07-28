'use client'
import { useEffect, useState } from 'react';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type CardProps = {
    CardDescription: string;
    CardTitle: number;
    Link: string;
    Path: string;
};

export default function CardComponent(props: CardProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const increment = 1;
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= props.CardTitle) {
                    clearInterval(interval);
                    return props.CardTitle;
                }
                return prev + increment;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [props.CardTitle]);

    return (
        <Card className="w-full">
            <CardHeader>
                <CardDescription>{props.CardDescription}</CardDescription>
                <CardTitle className="text-5xl">{Math.round(progress)}</CardTitle>
            </CardHeader>
            <CardFooter>
                <Link className="bg-indigo-50 text-blue-600 p-2 rounded-lg w-full text-center hover:bg-white hover:text-black duration-500 border" href={props.Path}>{props.Link}</Link>
            </CardFooter>
        </Card>
    );
}

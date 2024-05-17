"use client";

import { useRouter } from "next/navigation"
import Link from "next/link";

export default async function Billionaires({id, name, squareImage, industries}) {
    const router = useRouter();
    const onClick = () => {
        router.push(`person/${id}`);
    }
    return (
        <div>
            <img onClick={onClick} src={squareImage==="https:undefined" ? "https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800" : squareImage} alt={name} />
            <Link href={`person/${id}`}>
                <span>{name}</span>
                {industries.map((indust)=>(
                    <span key={id}>{indust}</span>
                ))}
            </Link>
        </div>
    )
}
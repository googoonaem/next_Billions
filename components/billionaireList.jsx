export default async function Billionaires({id, name, squareImage, industries}) {
    return (
        <div>
            <img src={squareImage==="https:undefined" ? "https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800" : squareImage} alt={name} />
            <span>{name}</span>
            <div>
                {industries.map((indust)=>(
                    <span>{indust}</span>
                ))}
            </div>
        </div>
    )
}
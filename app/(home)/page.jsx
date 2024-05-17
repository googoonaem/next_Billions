import Billionaires from "../../components/billionaireList";
import { B_URL } from "../constants";
import styles from "../../styles/home.module.css"

export const metadata = {
    title: "next_billionaire",
}

async function getBillionaires() {
    const response = await fetch(B_URL);
    return response.json();
}

export default async function Home() {
    const billionaires = await getBillionaires();
    return (
        <div className={styles.container}>
            {billionaires.map((billionaire)=>(
                <Billionaires
                    key={billionaire.id}
                    id={billionaire.id} 
                    name={billionaire.name}
                    squareImage={billionaire.squareImage}
                    industries={billionaire.industries}
                />
            ))}
        </div>
    )
}
import { P_URL } from "../app/constants";
import styles from "../styles/billionaire.module.css";

export async function getBillionaire(id) {
    const response = await fetch(`${P_URL}/${id}`);
    return response.json();
}

export default async function Billionaire({id}) {
    const billionaire = await getBillionaire(id);
    return (
        <div className={styles.billionaire}>
            <img src={billionaire.squareImage} />
            <h1>{billionaire.name}</h1>
            <span>netWorth: {Math.floor(billionaire.netWorth/1000)} Billion</span>
            <span>Country: {billionaire.country}</span>
            <span>Industry: {billionaire.industries}</span>
            <p>
                {billionaire.bio}
            </p>
        </div>
    )
}
import Billionaire, { getBillionaire } from "../../../components/billionaire";
import AssetList from "../../../components/assetsList";
import styles from "../../../styles/billionaire.module.css";

export async function generateMetadata({params: {id}}) {
    const billionaire = await getBillionaire(id);
    return {
        title: `next_billionaire::${billionaire.name}`,
    }
}

export default function Person({params:{id}}) {
    return (
        <div className={styles.container}>
            <Billionaire id={id} />
            <AssetList id={id} />
        </div>
    )
}
import { getBillionaire } from "./billionaire";
import styles from "../styles/billionaire.module.css";

const comma = (share) => {
    return share.toLocaleString("ko-KR");
}
export default async function AssetList({id}) {
    const billionaire = await getBillionaire(id);
    const financial_assetList = billionaire.financialAssets;
    return (
        <div className={styles.assetList}>
            {financial_assetList.map((financial_asset)=>(
                <div key={""}>
                    <span>Ticker: {financial_asset.ticker}</span>                    
                    <span>Shares: {comma(financial_asset.numberOfShares)}</span>                    
                    <span>{financial_asset.currentPrice?"Price:":""} {financial_asset.currentPrice}</span>                    
                    <span></span>                    
                </div>
            ))}
        </div>
    )
}
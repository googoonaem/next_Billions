import { P_URL } from "../app/constants";

async function getBillionaire(id) {
    const response = await fetch(`${P_URL}/${id}`);
    return response.json();
}

export default async function Billionaire({id}) {
    const billionaire = await getBillionaire(id);
    return (
        <div>
            <h2>person id: {billionaire.id}</h2>
            <h2>person name: {billionaire.name}</h2>
        </div>
    )
}
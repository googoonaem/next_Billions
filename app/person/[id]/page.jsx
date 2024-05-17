import Billionaire from "../../../components/billionaire";

export const metadata = {
    title: "next_billionaire:::",
}

export default function Person({params:{id}}) {
    console.log(id);
    return (
        <Billionaire id={id} />
    )
}
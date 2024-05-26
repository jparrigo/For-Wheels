import { ReactElement } from "react";
import './ItemInfo.css';

interface ItemInfoProps {
    title: string
    info: any
}

const ItemInfo = (props: ItemInfoProps): ReactElement => {
    return (
        <div style={{ marginTop: 5 }}>
            <span style={{fontWeight: 'bold'}}>{props.title}: </span>
            <span>{props.info}</span>
        </div>
    )
}

export default ItemInfo;
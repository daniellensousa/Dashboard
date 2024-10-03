import * as _ from './styles';
interface BoxSalesProps {
    colorBox: string;
    colorIcon: string;
    icon: React.ReactNode;
    price: number | undefined;
    title: string;
    porcentage: number | undefined;
}
export default function BoxSales(props: BoxSalesProps) {
    return (
        <div>
            <_.DashBox color={props.colorBox}>
                <_.DashBoxIcon color={props.colorIcon}>
                    {props.icon}
                </_.DashBoxIcon>
                <h5>{props.price}</h5>
                <p>{props.title}</p>
                <small>+ {props.porcentage} from yesterday</small>
            </_.DashBox>
        </div>
    )
}
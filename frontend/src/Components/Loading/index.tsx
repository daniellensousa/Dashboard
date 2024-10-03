import * as _ from './styles';
import Logo from '../../assets/logo-dash.svg';
export default function Loading() {
    return (
        <_.Container>
           <img src={Logo} alt="logo" />
        </_.Container>
    )
}
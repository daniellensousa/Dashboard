import Dashboard from "../../Components/Dashboard";
import Header from "../../Components/Header";

import * as _ from './styles'
export default function Home() {
    return (
        <_.Container>
            <_.Content>
                <Header />
                <Dashboard />
            </_.Content>
        </_.Container>
    )
}

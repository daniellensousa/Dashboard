import Dashboard from "../../Components/Dashboard";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import * as _ from './styles'
export default function Home() {
    return (
        <_.Container>
            <Sidebar />
            <_.Content>
                <Header />
                <Dashboard />
            </_.Content>
        </_.Container>
    )
}

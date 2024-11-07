import { BiSolidPieChart } from 'react-icons/bi'
import * as _ from './styles'
import { RiBarChartLine, RiShoppingBag4Line } from 'react-icons/ri'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { AiOutlineLineChart } from 'react-icons/ai'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { LuSettings } from 'react-icons/lu'
import { PiSignOutBold } from 'react-icons/pi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

export default function Sidebar() {
    const navigate = useNavigate()
    const tabTitle = [
        { title: "Dashboard", icon: <BiSolidPieChart />, path: "/home" },
        { title: "Leaderboard", icon: <RiBarChartLine />, path: "/leaderboard" },
        { title: "Order", icon: <MdOutlineShoppingCart />, path: "/orders" },
        { title: "Products", icon: <RiShoppingBag4Line />, path: "/products" },
        { title: "Sales Report", icon: <AiOutlineLineChart />, path: "/sales-report" },
        { title: "Messages", icon: <IoChatboxEllipsesOutline />, path: "/messages" },
        { title: "Settings", icon: <LuSettings />, path: "/settings" },
        { title: "Sign Out", icon: <PiSignOutBold />, path: "/sign-out" }
    ]
    const [activeTab, setActiveTab] = useState(0)

    const handleNavigation = (index: number, path: string) => {
        setActiveTab(index)
        navigate(path)
    }

    return (
        <_.SidebarContainer>
            <_.SidebarHeader>
                <img src="" alt="" />
                <_.SidebarTitle>Dabang</_.SidebarTitle>
            </_.SidebarHeader>
            <_.SidebarContent>
                {tabTitle.map((tab, index) => (
                    <_.SidebarTab
                        key={index}
                        select={activeTab === index}
                        onClick={() => handleNavigation(index, tab.path)}
                    >
                        <p>{tab.icon}</p>
                        <small>{tab.title}</small>
                    </_.SidebarTab>
                ))}
            </_.SidebarContent>
        </_.SidebarContainer>
    )
}

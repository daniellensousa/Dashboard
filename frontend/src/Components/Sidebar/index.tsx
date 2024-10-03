import { BiSolidPieChart } from 'react-icons/bi'
import * as _ from './styles'
import { RiBarChartLine, RiShoppingBag4Line } from 'react-icons/ri'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { AiOutlineLineChart } from 'react-icons/ai'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { LuSettings } from 'react-icons/lu'
import { PiSignOutBold } from 'react-icons/pi'
import { useState } from 'react'
export default function Sidebar() {
    const tabTitle = [
        { title: "dashboard", icon: <BiSolidPieChart /> },
        { title: "Leaderboard", icon: <RiBarChartLine /> },
        { title: "order", icon: <MdOutlineShoppingCart /> },
        { title: "Products", icon: <RiShoppingBag4Line /> },
        { title: "Sales Report", icon: <AiOutlineLineChart /> },
        { title: "Messages", icon: <IoChatboxEllipsesOutline /> },
        { title: "Settings", icon: <LuSettings /> },
        { title: "Sign Out", icon: <PiSignOutBold /> }
    ]
    const [activeTab, setActiveTab] = useState(0)
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
                        onClick={() => setActiveTab(index)}
                    >
                        <p>{tab.icon}</p>
                        <small>{tab.title}</small>
                    </_.SidebarTab>
                ))}
            </_.SidebarContent>
        </_.SidebarContainer>
    )
}
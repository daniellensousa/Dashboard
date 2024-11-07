import { BiArrowFromLeft, BiArrowFromRight, BiDownload, BiPencil, BiSearch } from "react-icons/bi";
import * as _ from './styles'
import { useEffect, useState } from "react";
import { Orders } from "../../types/orders";
import { getOrders } from "../../service/orders/api";
import { CiBellOn } from "react-icons/ci";
import user from "../../assets/user.jpg"
import { CgArrowBottomLeft } from "react-icons/cg";
import { RiArrowDownSFill } from "react-icons/ri";

export default function Order() {
    const [orders, setOrders] = useState<Orders[] | null>(null)

    useEffect(() => {
        async function getOrdersData() {
            const data = await getOrders()
            setOrders(data)
        }
        getOrdersData()
    }, [])

    return (
        <div className="w-full my-5 px-8">
            {/* {
                orders && 
                orders.map((order) =>(
                    <p>{order.customer}</p>
                ))
            } */}
            <header className="my-1">
                <_.HeaderContent className="flex justify-between items-center ..">
                    <div className="flex rounded-md border border-slate-300 hover:border-slate-400 items-center px-1 p-1 m-1">
                        <BiSearch className="text-slate-400 hover:text-sky-400 mx-2" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="flex">
                        <div className="border border-slate-300 hover:border-slate-400 rounded m-1 p-1">
                            <CiBellOn />
                        </div>
                        <div>
                            <img className="w-8 rounded-full" src={user} alt="photo user" />
                        </div>
                    </div>
                </_.HeaderContent>
            </header>
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-3xl">Orders</h1>

                <div className="flex justify-between items-center">
                    <button className="bg-slate-800/5 flex justify-between items-center p-2 m-1 rounded">
                        <BiDownload className="m-1"/>
                        <span className="text-sm">Export</span>
                    </button>
                    <button className="bg-slate-800/5 flex justify-between items-center p-2 m-1 rounded">
                        <span className="text-sm">More actions</span>
                        <CgArrowBottomLeft className="m-1"/>
                    </button>
                    <button className="bg-indigo-500 p-2 rounded">
                        <span className="text-sm text-white">Create order</span>
                    </button>
                </div>
            </div>
            <div className="flex my-4 justify-between items-center ">
                <div className="border  mr-4 flex flex-col gap-1 w-full border-stone-600/10  p-4 ">
                    <p className="text-sm">Total orders</p>
                    <h1 className="text-4xl">21</h1>
                    <div className="flex items-center">
                        <RiArrowDownSFill />
                        <span className="text-xs">23% last week</span> 
                    </div>
                </div>
                <div className="border flex mr-4 flex-col gap-1 w-full border-stone-600/10  p-4 ">
                    <p className="text-sm">Order items over time</p>
                    <h1 className="text-4xl">21</h1>
                    <div className="flex items-center">
                        <RiArrowDownSFill />
                        <span className="text-xs">23% last week</span> 
                    </div>
                </div>
                <div className="border flex  mr-4 flex-col gap-1 w-full border-stone-600/10  p-4 ">
                    <p className="text-sm">Returns Orders</p>
                    <h1 className="text-4xl">21</h1>
                    <div className="flex items-center">
                        <RiArrowDownSFill />
                        <span className="text-xs">23% last week</span> 
                    </div>
                </div>
                <div className="border flex mr-4 flex-col gap-1 w-full border-stone-600/10  p-4 ">
                    <p className="text-sm">Fullfiled orders over time</p>
                    <h1 className="text-4xl">21</h1>
                    <div className="flex items-center">
                        <RiArrowDownSFill />
                        <span className="text-xs">23% last week</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}
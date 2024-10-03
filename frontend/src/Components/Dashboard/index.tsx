import { PiExportBold } from 'react-icons/pi'
import * as _ from './style'
import { MdInsertChart } from 'react-icons/md'
import BoxSales from '../BoxSales'
import { IoDocumentText } from 'react-icons/io5'
import { TiUserAdd } from 'react-icons/ti'
import { IoMdPricetag } from 'react-icons/io'
import LineChart from '../Chart'
import BarChart from '../ChartBar'
import LineChartCustomer from '../ChartLine'
import BarChartTarget from '../ChartBarTarget'
import { BsHandbag } from 'react-icons/bs'
import { GrTicket } from 'react-icons/gr'
import { TodaySales } from '../../types/todaySales'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Dashboard() {
    const [totalSales, setTotalSales] = useState<TodaySales | null>(null);
    const { t } = useTranslation();
    return (
        <_.DashboardContainer>
            <_.DashSection>
                <_.DashContent>
                    <_.DashSales>
                        <_.DashTitle>
                            <h5>{t('TodaySales')}</h5>
                            <small>{t('SalesSummary')}</small>
                        </_.DashTitle>
                        <_.DashGraph>
                            <button>Export <PiExportBold /></button>
                        </_.DashGraph>
                    </_.DashSales>
                    <_.DashBoxContent>
                        <BoxSales
                            colorBox='#FFE2E6'
                            colorIcon='#FA5A7C'
                            icon={<MdInsertChart />}
                            price={totalSales?.total_sales.price}
                            title={t('TotalSales')}
                            porcentage={totalSales?.total_sales.porcentage}
                        />
                        <BoxSales
                            colorBox='#FFF4DE'
                            colorIcon='#FF947A'
                            icon={<IoDocumentText />}
                            price={totalSales?.total_orders.orders}
                            title={t('TotalOrders')}
                            porcentage={totalSales?.total_orders.porcentage}
                        />
                        <BoxSales
                            colorBox='#DCFCE7'
                            colorIcon='#3CD957'
                            icon={<IoMdPricetag />}
                            price={totalSales?.product_sold.product}
                            title={t('ProductSold')}
                            porcentage={totalSales?.product_sold.porcentage}
                        />
                        <BoxSales
                            colorBox='#F4E8FF'
                            colorIcon='#BF83FE'
                            icon={<TiUserAdd />}
                            price={totalSales?.new_customers.customers}
                            title={t('NewCustomers')}
                            porcentage={totalSales?.new_customers.porcentage}
                        />
                    </_.DashBoxContent>
                </_.DashContent>
                <_.DashContentChart>
                    <h1>{t('VisitorInsights')}</h1>
                    <LineChart />
                </_.DashContentChart>
            </_.DashSection>
            <_.DashSection>
                <_.DashContentChart>
                    <h1>{t('TotalRevenue')}</h1>
                    <BarChart />
                    <_.DashContentSales>
                        <_.ChartTitle color='#0094FE' iconColor=''>
                            <div></div>
                            <p>{t('OnlineSales')}</p>
                        </_.ChartTitle>
                        <_.ChartTitle color='#00DF96' iconColor=''>
                            <div></div>
                            <p>{t('OffilneSales')}</p>
                        </_.ChartTitle>
                    </_.DashContentSales>
                </_.DashContentChart>
                <_.DashContentChart>
                    <h1>{t('CustomerSatisfaction')}</h1>
                    <LineChartCustomer />
                </_.DashContentChart>
                <_.DashContentChart>
                    <h1>{t('TargetVsReality')}</h1>
                    <BarChartTarget />
                    <_.TargetVsReality>
                        <_.TargetContent>
                            <_.TargetIcon iconColor='#4AB48E' color='#E3FFF3'>
                                <BsHandbag />
                            </_.TargetIcon>
                            <_.TargetContentGrid>
                                <p>{t('RealitySales')}</p>
                                <small>Global</small>
                            </_.TargetContentGrid>
                        </_.TargetContent>
                        <h5>8.823</h5>
                    </_.TargetVsReality>
                    <_.TargetVsReality>
                        <_.TargetContent>
                            <_.TargetIcon iconColor='#FFAE2C' color='#FFF4DE'>
                                <GrTicket />
                            </_.TargetIcon>
                            <_.TargetContentGrid>
                                <p>{t('TargetSales')}</p>
                                <small>{t('Commercial')}</small>
                            </_.TargetContentGrid>
                        </_.TargetContent>
                        <h5>8.823</h5>
                    </_.TargetVsReality>
                </_.DashContentChart>
            </_.DashSection>

        </_.DashboardContainer>
    )
}
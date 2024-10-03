export type TodaySales = {
    total_sales: {
        price: number,
        porcentage: number
    },
    total_orders: {
        orders: number,
        porcentage: number
    },
    product_sold: {
        product: number,
        porcentage: number
    },
    new_customers: {
        customers: number,
        porcentage: number
    }
}
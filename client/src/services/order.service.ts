import httpRequest from '../common/httpRequest'

class OrderService {
    private apiUrl: string = '/api/orders';

    constructor() {
        let orders: OrderDto[] = [
            { id: 1, number: 'PO0011', item_tag: 'ROTHMANS', quantity: 1.00, },
            { id: 2, number: 'PO0022', item_tag: 'RUSKIE', quantity: 12.00, },
            { id: 3, number: 'PO0033', item_tag: 'INNE', quantity: 100.00, },
        ]
        localStorage.setItem('orders',JSON.stringify(orders));
    }
    
    async getOrders(params: GetOrdersParams = {}): Promise<OrderDto[]> {
        let queryArray: string[] = []
        let queryString: string = ''
        if (params.from) {
            queryArray.push(`from=${params.from.toString()}`)
        }
        if (params.to) {
            queryArray.push(`to=${params.to.toString()}`)
        }
        queryString = this.apiUrl + '?' + queryArray.join('&')

        
        let orders: OrderDto[];
        try {
            orders = await httpRequest<OrderDto[]> (queryString)
            localStorage.setItem('orders',JSON.stringify(orders));
        } catch (err) {
            orders = JSON.parse(<string>localStorage.getItem('orders'));
        }
     
        return orders;
    }

    getOrder(params: GetOrderParams): OrderDto {
        return <OrderDto>{};
    }
}

export default new OrderService()

interface OrderDto {
    id: number,
    number: string,
    item_tag: string,
    quantity: number,
}

interface GetOrdersParams {
    fetch?: number,
    offset?: number,
    from?: string,
    to?: string,
}

interface GetOrderParams {
    id?: number,
    tag?: string,
    number?: string,
    properties?: boolean,
    bom?: boolean,
    steps?: boolean,
}


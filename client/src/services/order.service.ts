import httpRequest from '../common/httpRequest'

class OrderService {
    private apiUrl: string = '/api/orders';

    constructor() {

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

    
        let orders = await httpRequest<OrderDto[]> (queryString)
        // localStorage.setItem('orders',JSON.stringify(orders));
     
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


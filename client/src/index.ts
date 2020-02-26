import OrderService from './services/order.service'
import './index.css'

const root = <HTMLDivElement>document.querySelector('#root');

const h1 = document.createElement('h1');
h1.innerText = 'App started';
h1.classList.add('test');
root.appendChild(h1);

OrderService.getOrders().then(res => console.log(res));

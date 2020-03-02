import OrderService from './services/order.service'
import './index.css'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('build/sw.js');
    });
}

const root = <HTMLDivElement>document.querySelector('#root');
const h1 = document.createElement('h1');
h1.innerText = 'App started';
h1.classList.add('test');
root.appendChild(h1);


const button = document.createElement('button');
button.innerText = 'Get orders test';
button.addEventListener('click', (event: MouseEvent) => {
    OrderService.getOrders().then(res => console.log(res));
});
root.appendChild(button);


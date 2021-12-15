import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-air-max-masculino/26/HZM-5168-026/HZM-5168-026_zoom2.jpg?ts=1623667246&ims=326x' alt='Tenis Nike' />
                <strong>Tênis para correr muito rapido</strong>
                <span>R$199,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color='#FFF' /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-air-max-masculino/26/HZM-5168-026/HZM-5168-026_zoom2.jpg?ts=1623667246&ims=326x' alt='Tenis Nike' />
                <strong>Tênis para correr muito rapido</strong>
                <span>R$199,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color='#FFF' /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-air-max-masculino/26/HZM-5168-026/HZM-5168-026_zoom2.jpg?ts=1623667246&ims=326x' alt='Tenis Nike' />
                <strong>Tênis para correr muito rapido</strong>
                <span>R$199,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color='#FFF' /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-air-max-masculino/26/HZM-5168-026/HZM-5168-026_zoom2.jpg?ts=1623667246&ims=326x' alt='Tenis Nike' />
                <strong>Tênis para correr muito rapido</strong>
                <span>R$199,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color='#FFF' /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-air-max-masculino/26/HZM-5168-026/HZM-5168-026_zoom2.jpg?ts=1623667246&ims=326x' alt='Tenis Nike' />
                <strong>Tênis para correr muito rapido</strong>
                <span>R$199,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color='#FFF' /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-air-max-masculino/26/HZM-5168-026/HZM-5168-026_zoom2.jpg?ts=1623667246&ims=326x' alt='Tenis Nike' />
                <strong>Tênis para correr muito rapido</strong>
                <span>R$199,99</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color='#FFF' /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
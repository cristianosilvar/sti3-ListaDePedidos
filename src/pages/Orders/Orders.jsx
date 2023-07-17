import './style/Orders.css'

import iconApproved from '../../assets/icon-approved.svg'
import iconCancel from '../../assets/icon-cancel.svg'
import iconEdit from '../../assets/icon-edit.svg'
import spinner from '../../assets/spinner.svg'

import { Link } from 'react-router-dom'
import { useOrdersValue } from '../../context/OrdersContext'

export default function Orders() {
    const {orders, loading, error} = useOrdersValue()
    
    return (
        <div id='orders'>
            <table>
                <thead>
                    <tr>
                        <th className='text-left'>Status</th>
                        <th className='text-left'>Nome do cliente</th>
                        <th className='text-right'>Valor</th>
                        <th className='text-right'>Frete</th>
                        <th className='text-right'>Desconto</th>
                        <th className='text-right'>Total</th>
                        <th className='text-center'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {
                    !loading && orders && 
                    orders.map((order) =>
                    <tr key={orders.id}>

                        {
                            order.status === 'APROVADO' ? (
                                <td className="text-left" style={{color: 'var(--green-500)'}}><img src={iconApproved} alt='Icone aprovado'/> Aprovado</td>
                            ):(
                                <td className="text-left" style={{color: 'var(--red-500)'}}><img src={iconCancel} alt='Icone cancelado'/> Cancelado</td>
                            )
                        }
                        <td className="text-left">{order.cliente.nome}</td>
                        <td className="text-right">R$ {order.subTotal.toFixed(2).replace('.',',')}</td>
                        <td className="text-right">R$ {order.frete.toFixed(2).replace('.',',')}</td>
                        <td className="text-right">R$ {order.desconto.toFixed(2).replace('.',',')}</td>
                        <td className="text-right">R$ {order.valorTotal.toFixed(2).replace('.',',')}</td>
                        <td className="text-center">
                            <Link to={`/orders/${order.id}`}><img src={iconEdit} className='icon-edit' alt='Icone alteração'/></Link>
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            {error && <h5>{error}</h5>}
            {loading &&
                <div className="loading">    
                    <img src={spinner} alt="Carregando dados..." className='loading-image'/>
                    <span className='h6'>Carregando</span>
                </div>
            }
        </div>
    )
}
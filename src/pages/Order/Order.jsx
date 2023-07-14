import './style/Order.css';

//hooks
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react'

// assets
import spinner from '../../assets/spinner.svg'
import cross from '../../assets/cross.svg'

import { useOrdersValue } from '../../context/OrdersContext';
import { useParams } from 'react-router-dom';

export default function Order() {
    const {orders, loading, error} = useOrdersValue()

    const { id } = useParams()


    
    function retornOrder (value){
        if (value.id == id)
        return value;
    }
    
    if (orders) {
        var orderArray = orders.filter(retornOrder);
        var order = orderArray[0]
        
    }
    const [name, setName] = useState(order ? order.cliente.nome : '')
    const [email, setEmail] = useState(order ? order.cliente.email : '')
    const [cpf, setCpf] = useState(order ? order.cliente.cpf : '')

    console.log(name)
    
    // data formatação

    const formatDate = (date) => {
        const dateA = date;
        const dateB = new Date(dateA);
        const formatedDate = dateB.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    
        return formatedDate
    }

    // reais formatação

    const formatValue = (value) => {
        const valueA = parseFloat(value)
        const formatedValue = valueA.toFixed(2).replace('.',',')

        return formatedValue
    }



    const handleCancel = () => {

    }

    const handleSubmit = () => {

    }
    return (
        <section>
            {
                order &&
                <div className='top'>  
                <div>
                    <div className='alteration-text'>
                        <span className='h1 fw-normal'>Listagem de Pedido {'>'}</span>
                        <span className='h1 fw-medium'> Alteração de Pedido</span>
                    </div>
                    <h3 className='fw-normal'>Aqui você poderá visualizar as informações do pedido e editar as informações do cliente.</h3>
                </div>
                {!loading && !error ? (
                    <div className='buttons'>
                        <button 
                        className='button-cancel fw-medium'
                        onClick={handleCancel}>Cancelar alterações</button>
                        <button 
                        className='button-save fw-medium'
                        onClick={handleSubmit}>Salvar alterações</button>
                    </div>) : (
                    <div className='buttons'>
                        <button className='button-cancel fw-medium' disabled>Cancelar alterações</button>
                        <button className='button-save fw-medium'disabled>Salvar alterações</button>
                    </div>
                    )
                }
            </div>
            }
            {error && !order &&
                <div className='error'>
                    <img src={cross} alt="" className='cross' />
                    <h3 className='text-center fw-light'>{error}</h3>
                </div>
            }
            {loading && !error &&
                <div className="loading-over">    
                    <img src={spinner} alt="Carregando dados..." className='loading-image'/>
                    <span className='h6'>Carregando</span>
                </div>
            }
            {order && !loading &&
                <main>
                    <div className='info'>
                        <h2 className='fw-medium'>Venda nº {order.numero}</h2>
                        <div>
                            <span className='h4 fw-medium'>Data:</span>
                            <span className="h3 fw-light">{formatDate(order.dataCriacao)}</span>
                        </div>
                        <div>
                            <span className='h4 fw-medium'>Status:</span>
                            <span className="h3 fw-light">{order.status}</span>
                        </div>
                        <div>
                            <span className='h4 fw-medium'>Desconto:</span>
                            <span className="h3 fw-light">R${formatValue(order.desconto)}</span>
                        </div>
                        <div>
                            <span className='h4 fw-medium'>Frete:</span>
                            <span className="h3 fw-light">R${formatValue(order.frete)}</span>
                        </div>
                        <div>
                            <span className='h4 fw-medium'>Subtotal:</span>
                            <span className="h3 fw-light">R${formatValue(order.subTotal)}</span>
                        </div>
                        <div>
                            <span className='h4 fw-medium'>Total:</span>
                            <span className="h3 fw-light">R${formatValue(order.valorTotal)}</span>
                        </div>
                        <div className='last'>
                            <span className='h4 fw-medium'>Endereço de entrega:</span>
                            <div className="h3 fw-light">
                                <span>{order.enderecoEntrega.endereco}, </span>
                                <span>{order.enderecoEntrega.numero} - </span>
                                {order.enderecoEntrega.bairro !== '' && 
                                <span>{order.enderecoEntrega.bairro} - </span>
                                }
                                <span>{order.enderecoEntrega.cidade} </span>
                                <span>({order.enderecoEntrega.estado})</span>
                            </div>
                        </div>
                    </div>
                    <div className='info'>
                        <h2 className='fw-medium'>Informações do cliente</h2>
                        <label>
                            <span className="h4 fw-normal">Nome *</span>
                            <input 
                            type="text" 
                            name='nome' 
                            value={name} 
                            autoComplete='off'
                            onChange={(e) => setName(e.target.value)}/>
                        </label>
                        <label>
                            <span className="h4 fw-normal">E-mail *</span>
                            <input 
                            type="email" 
                            name='email'
                            autoComplete='off'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label>
                            <span className="h4 fw-normal">CPF *</span>
                            <input 
                            type="text" 
                            name='cpf'
                            value={cpf} 
                            autoComplete='off'
                            onChange={(e) => setCpf(e.target.value)}/>
                        </label>
                    </div>
                </main>
        }
        </section>
    )
}
import './style/Order.css';

//hooks
import { useEffect, useState } from 'react'

// assets
import spinner from '../../assets/spinner.svg'
import cross from '../../assets/cross.svg'

import { useOrdersValue } from '../../context/OrdersContext';
import { useNavigate, useParams } from 'react-router-dom';

export default function Order() {
    const {orders, setOrders, loading, error} = useOrdersValue()
    const { id } = useParams()

    const Navigate = useNavigate()
    
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

    const [alertIsActived, setAlertIsActived] = useState(false)
    const [loadingButtons, setLoadingButtons] = useState(false)
    
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
        Navigate('/')
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoadingButtons(true)

        const editOrders = (id, name, email, cpf) => {
            
            let orderEdited = {}
            let array = []

            orders.map((order) => {
                if (order.id == id) {
                    orderEdited = {
                        "id": order.id,
                        "numero": order.numero,
                        "dataCriacao": order.dataCriacao,
                        "dataAlteracao": order.dataAlteracao,
                        "status": order.status,
                        "desconto": order.desconto,
                        "frete": order.frete,
                        "subTotal": order.subTotal,
                        "valorTotal": order.valorTotal,
                        "cliente": {
                            "id": order.cliente.id,
                            "cnpj": order.cliente.cnpj,
                            "cpf": cpf,
                            "nome": name,
                            "razaoSocial": order.cliente.razaoSocial,
                            "email": email,
                            "dataNascimento": order.cliente.dataNascimento
                        },
                        "enderecoEntrega": order.enderecoEntrega,
                        "itens": order.itens,
                        "pagamento": order.pagamento
                    }
    
                    array = [...array, orderEdited]
                } else {
                    array = [...array, order]
                }
            })

            setOrders(array)
        }

        editOrders(id, name, email, cpf)

        // Animação de aparecer e esconder alerta
        setAlertIsActived(true)
        setTimeout(() => {
            setLoadingButtons(false)
            Navigate('/')
        }, 2500)
    }

    
    useEffect(() => {
        if (document.getElementById('sucess') != null) {
            if (alertIsActived === true) {
                document.getElementById('sucess').style = 'display: flex'
                
                setTimeout(() => {
                    document.getElementById('sucess').style = 'display: none'
                    setAlertIsActived(false)
                }, 2500)
            } else {
                document.getElementById('sucess').style = 'display: none'
                setAlertIsActived(false)
            }
        }

    }, [alertIsActived])

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
                {!loadingButtons && !error ? (
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
                            <span className="h3 fw-light">R$ {formatValue(order.desconto)}</span>
                        </div>
                        <div>
                            <span className='h4 fw-medium'>Frete:</span>
                            <span className="h3 fw-light">R$ {formatValue(order.frete)}</span>
                        </div>
                        <div>
                            <span className='h4 fw-medium'>Subtotal:</span>
                            <span className="h3 fw-light">R$ {formatValue(order.subTotal)}</span>
                        </div>
                        <div>
                            <span className='h4 fw-medium'>Total:</span>
                            <span className="h3 fw-light">R$ {formatValue(order.valorTotal)}</span>
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
                        <form onSubmit={handleSubmit}>
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
                        </form>
                    </div>
                    <div className="sucess" id="sucess">
                        <figure>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0002 0.249634C4.62415 0.249634 0.250244 4.62354 0.250244 9.99963C0.250244 15.3757 4.62415 19.7496 10.0002 19.7496C15.3763 19.7496 19.7502 15.3757 19.7502 9.99963C19.7502 4.62354 15.3763 0.249634 10.0002 0.249634ZM15.0745 6.73197L8.77446 14.232C8.70535 14.3143 8.61936 14.3808 8.52231 14.427C8.42526 14.4731 8.31942 14.4979 8.21196 14.4996H8.1993C8.09418 14.4996 7.99024 14.4775 7.89422 14.4347C7.79821 14.3919 7.71226 14.3293 7.64196 14.2512L4.94196 11.2512C4.87339 11.1785 4.82005 11.0928 4.78507 10.9991C4.7501 10.9055 4.73419 10.8058 4.73829 10.7059C4.74239 10.6061 4.76641 10.508 4.80895 10.4176C4.85148 10.3271 4.91166 10.2461 4.98596 10.1792C5.06026 10.1123 5.14718 10.061 5.2416 10.0282C5.33603 9.99541 5.43605 9.98182 5.5358 9.98824C5.63555 9.99465 5.73302 10.0209 5.82246 10.0656C5.9119 10.1102 5.99153 10.1722 6.05665 10.2481L8.17962 12.6068L13.926 5.76729C14.0549 5.61826 14.2373 5.52595 14.4337 5.5103C14.6301 5.49464 14.8248 5.55691 14.9757 5.68365C15.1265 5.81038 15.2215 5.99139 15.24 6.18756C15.2584 6.38373 15.199 6.57929 15.0745 6.73197Z" fill="white"/>
                            </svg>
                        </figure>
                        <div>
                            <span className='fw-medium h3'>Alterado com sucesso!</span>
                            <span className='fw-normal h3'>As informações do cliente foram atualizadas.</span>
                        </div>
                        <figure onClick={() => setAlertIsActived(false)}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59093 6.99926L13.0441 2.54614C13.2554 2.33517 13.3743 2.04888 13.3745 1.75026C13.3748 1.45164 13.2564 1.16514 13.0455 0.953797C12.8345 0.742453 12.5482 0.623573 12.2496 0.623309C11.951 0.623045 11.6645 0.74142 11.4531 0.952391L6.99999 5.40551L2.54687 0.952391C2.33553 0.741047 2.04888 0.622314 1.75 0.622314C1.45111 0.622314 1.16447 0.741047 0.953123 0.952391C0.741779 1.16374 0.623047 1.45038 0.623047 1.74927C0.623047 2.04815 0.741779 2.3348 0.953123 2.54614L5.40625 6.99926L0.953123 11.4524C0.741779 11.6637 0.623047 11.9504 0.623047 12.2493C0.623047 12.5481 0.741779 12.8348 0.953123 13.0461C1.16447 13.2575 1.45111 13.3762 1.75 13.3762C2.04888 13.3762 2.33553 13.2575 2.54687 13.0461L6.99999 8.59301L11.4531 13.0461C11.6645 13.2575 11.9511 13.3762 12.25 13.3762C12.5489 13.3762 12.8355 13.2575 13.0469 13.0461C13.2582 12.8348 13.3769 12.5481 13.3769 12.2493C13.3769 11.9504 13.2582 11.6637 13.0469 11.4524L8.59093 6.99926Z" fill="white"/>
                            </svg>
                        </figure>
                    </div>

                </main>
        }
        </section>
    )
}
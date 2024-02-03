import React, { useEffect, useState } from 'react'
import Green from '../assets/green-vector.png'
import { BoxTick, I3DRotate, ShoppingCart, Coin } from 'iconsax-react'
import TrendingUp from '../assets/trending-up.png'
import TrendDown from '../assets/trending-down.png'
import Red from '../assets/red-vector.png'


function Card({card}) {

    const [cardState, setCardState] = useState({
        'title': '',
        'vector': '',
        'num': '',
        'icon': '',
    })

    useEffect(() => {
        switch (card) {
            case 'order':
                setCardState({...cardState, 
                    'title': 'Total Order',
                    'vector': 'green',
                    'num': '350',
                    'icon': BoxTick
                })
                break;
            case 'refund': 
                setCardState({...cardState, 
                    'title': 'Total Refund',
                    'vector': 'red',
                    'num': '270',
                    'icon': I3DRotate
                })
                break;
            case 'sales': 
                setCardState({...cardState, 
                    'title': 'Average Sales',
                    'vector': 'red',
                    'num': '1567',
                    'icon': ShoppingCart
                })
                break;
            case 'income': 
                setCardState({...cardState, 
                    'title': 'Total Income',
                    'vector': 'green',
                    'num': '$350.000',
                    'icon': Coin
                })
                break;
            default:  setCardState({...cardState})
                break;
        }
    }, [cardState, card])


  return (
    <div>
        <div>
            <div>
                {
                    cardState.icon === BoxTick ? <BoxTick size='24' color='#34CAA5' variant='Bulk' /> :
                    cardState.icon === I3DRotate ? <I3DRotate size='24' color='#34CAA5' variant='Bulk' />:
                    cardState.icon === ShoppingCart ? <ShoppingCart size='24' color='#34CAA5' variant='Bulk' />:
                    cardState.icon === Coin ? <Coin size='24' color='#34CAA5' variant='Bulk' /> : ''
                }
            </div>
            <img src={cardState.vector === 'green' ? Green : cardState.vector === 'red' ? Red : ''} alt="Vector" />
        </div>
        <div>
            <h2>{cardState.title}</h2>
            <h2>{cardState.num}</h2>
        </div>
        <div>
            <div>
                <img src={ cardState.vector === 'green' ? TrendingUp : cardState.vector === 'red' ? TrendDown : ''} alt="Trend" />
                <p>23,5%</p>
            </div>
            <p>vs. previous month</p>
        </div>
    </div>
  )
}

export default Card
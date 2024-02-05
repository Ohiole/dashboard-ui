import React, { useContext, useEffect, useState } from 'react'
import Green from '../assets/green-vector.png'
import { BoxTick, I3DRotate, ShoppingCart, Coin } from 'iconsax-react'
import TrendingUp from '../assets/trending-up.png'
import TrendDown from '../assets/trending-down.png'
import Red from '../assets/red-vector.png'
import { ShareContext } from '../context/ShareContext'


function Card({card}) {

    const { display } = useContext(ShareContext)

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
    <div className={`${display ? 'bg-sidebarBgDark border-borderColorDark' : 'bg-white border-borderColor'} border-2 rounded-lg p-4`}>
        <div className='flex items-center justify-between'>
            <div className={`w-[40px] h-[40px] rounded-full border-2 flex items-center justify-center ${display ? 'border-borderColorDark': 'border-borderColor'}`}>
                {
                    cardState.icon === BoxTick ? <BoxTick size='24' color='#34CAA5' variant='Bulk' /> :
                    cardState.icon === I3DRotate ? <I3DRotate size='24' color='#34CAA5' variant='Bulk' />:
                    cardState.icon === ShoppingCart ? <ShoppingCart size='24' color='#34CAA5' variant='Bulk' />:
                    cardState.icon === Coin ? <Coin size='24' color='#34CAA5' variant='Bulk' /> : ''
                }
            </div>
            <img src={cardState.vector === 'green' ? Green : cardState.vector === 'red' ? Red : ''} alt="Vector" />
        </div>
        <div className='mt-3'>
            <h2>{cardState.title}</h2>
            <h2 className={`mt-1`}>{cardState.num}</h2>
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
import React, { useContext } from 'react'
import Header from '../components/Header'
import { ShareContext } from '../context/ShareContext'

function Body() {

    const { display } = useContext(ShareContext)

  return (
    <section className={`w-full ${ display ? 'bg-bodyBgDark' :'bg-bodyBg'} duration-300`}>
        <Header />
    </section>
  )
}

export default Body
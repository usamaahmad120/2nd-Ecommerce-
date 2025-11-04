import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offers from '../component/Offers/Offers'
import NewCollection from '../component/NewCollect/NewCollection'
import NewsLatter from '../component/NewsLatter/NewsLatter'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLatter/>
    </div>
  )
}

export default Shop
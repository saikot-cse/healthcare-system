import React, { useEffect, useState } from 'react'
import { Footer } from '../Shared/Footer'
import { AppoinmentBanner } from './AppoinmentBanner'
import { AvailableAppoinment } from './AvailableAppoinment';

export const Appoinment = () => {
  
  const [date, setDate] = useState(new Date());
  
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}/>
      <AvailableAppoinment date={date} />
      <Footer/>
    </div>
  )
}

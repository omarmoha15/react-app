import React from 'react'
import USERDATA from '../MOCK_DATA.json'
import { useSearchParams } from 'react-router-dom';





const Detils =()=> {
    const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  console.log("id: ", id);



  return (
    <div className='detils'>
<img className='image' src='https://t4.ftcdn.net/jpg/00/97/00/09/360_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg'/>
<p className='p'>Hero Name:<label className='label'>{USERDATA[id - 1].hero_name}</label></p>
<p className='p'>Power:<label className='label'>{USERDATA[id - 1].power}</label></p>
<p className='p'>Description:<label className='label'>{USERDATA[id - 1].description}</label></p>

    </div>
  )
}

export default Detils
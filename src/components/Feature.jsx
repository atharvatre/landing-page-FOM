import React from 'react'
import FeatureBox from './FeatureBox'
import featureimg1 from '../images/51URq-cN-bL._AC_SX615_SY462_.jpg'
import featureimg2 from '../images/61qIQwYJF8L._AC_SX615_SY462_.jpg'
import featureimg3 from '../images/41xF6nRSoCL._SX300_SY300_QL70_FMwebp_.jpg'
import featureimg4 from '../images/411HtPTD1qL._SY300_SX300_.jpg'
const Feature = () => {
  return (
    <div id='features'>
        <div className="a-container">
            <FeatureBox image={featureimg1} title="Meditation Chair"/>
            <FeatureBox image={featureimg2} title="Meditation Coushion"/>
            <FeatureBox image={featureimg3} title="Yoga Belt"/>
            <FeatureBox image={featureimg4} title="Neck Pillow "/>
        </div>
    </div>
  )
}

export default Feature
import React from 'react'
import CountUp from 'react-countup';
import "./Countup.scss";
import smile from "../../Assets/Countup/emoji.png";
import office from "../../Assets/Countup/office.png";
import delivery from "../../Assets/Countup/delivery.png";

const Countup = () => {
  return (
    <div className='countup-main'>
<div className="vegan">
<div className="counting">
<img src={smile} alt='' width={50} height={50}/>
<CountUp
  start={0}
  end={97}
  duration={5}
  suffix='%'
  enableScrollSpy={true}
/>
</div>
<h3>Satisfied Clients</h3>
</div>

<div className="awards">
<div className="counting1">
<img src={office} alt='' width={50} height={50}/>
<CountUp
  start={0}
  end={500}
  duration={5}
  suffix='+'
  enableScrollSpy={true}
/>

</div>
<h3>Projects Completed</h3>
</div>

<div className="people">
<div className="counting2">
<img src={delivery} alt='' width={50} height={50}/>
<CountUp
  start={0}
  end={100}
  duration={5}
  suffix='%'
  enableScrollSpy={true}
/>
</div>
<h3>Guaranteed Delivery</h3>
</div>


    </div>
    
  )
}

export default Countup
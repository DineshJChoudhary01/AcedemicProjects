import React from 'react'

function About() {
  
  return (
    <> 
    <div>About Us  <br />
      <section id="team" class="team">

<h1 class="heading"><br/> Our Team</h1>

<div class="row">

<div class="card">
  <div class="image">
    <img src={require("../about/1.png")}/>
  </div>
  <div class="info">
    <h5>CHOUDHARY DINESH JEEVAN</h5>
    <h5>PRN NO.: 220980720031</h5>
    <h5>CDAC Patna</h5>
  </div>
</div>

<div class="card">
  <div class="image">
    <img  src={require("../about/1.png")}/>
  </div>
  <div class="info">
    <h5>KAPIL PATIL</h5>
    <h5>PRN NO.: 220980720072</h5>
    <h5>CDAC Patna</h5>
  </div>
</div>

<div class="card">
  <div class="image">
    <img src={require("../about/1.png")} alt=""/>
  </div>
  <div class="info">
    <h5>ADARSH RAVINDRAN</h5>
    <h5>PRN NO.: 220980720005</h5>
    <h5>CDAC Patna</h5>
  </div>
</div>
<div class="card">
  <div class="image">
    <img src={require("../about/1.png")} alt=""/>
  </div>
  <div class="info">
    <h5>PANKAJ MUDE</h5>
    <h5>PRN NO.: 220980720071</h5>
    <h5>CDAC Patna</h5>
  </div>
</div>
<div class="card">
  <div class="image">
    <img src={require("../about/1.png")} alt=""/>
  </div>
  <div class="info">
    <h5>SHRIDHAR JAKKAN</h5>
    <h5>PRN NO.: 220980720104</h5>
    <h5>CDAC Patna</h5>
  </div>
</div>
</div>
</section>

    </div>
    </>
  )
}

export default About
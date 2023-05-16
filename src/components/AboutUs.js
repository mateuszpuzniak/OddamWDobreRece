import React from 'react'
import People from '../assets/People.jpg'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'
import { ReactComponent as Signature } from '../assets/Signature.svg'


function AboutUs() {
	return (
		<section id='aboutUs'>
			<div className='container' style={{display:"flex",height:"700px"}}>
				<div style={{width:"50vw", background:"#F0F1F1 0% 0% no-repeat padding-box",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",textAlign:"center"}}>
                    <h2 className='fourStepsH2' style={{fontSize:"30px", fontWeight:"normal"}}>O nas</h2>
                    <Decoration style={{margin:"40px 0px"}}/>
                    <p className='aboutUsP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea maxime mollitia ratione ex in ipsam necessitatibus iusto facilis magnam.</p>
                    <Signature style={{float: "right"}}/>
                </div>
				<div style={{width:"50vw", overflow: "hidden"}}>
					<img className='people' style={{width:"50vw", height: "auto", objectFit: "contain"}} src={People} alt='Ludzie na obrazku stoją w kółku' />
				</div>
			</div>
		</section>
	)
}

export default AboutUs

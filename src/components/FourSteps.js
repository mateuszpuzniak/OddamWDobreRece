import React from 'react'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'
import { Link } from 'react-router-dom'
import Icon1 from '../assets/Icon-1.svg'
import Icon2  from '../assets/Icon-2.svg'
import Icon3 from '../assets/Icon-3.svg'
import Icon4  from '../assets/Icon-4.svg'

function FourSteps() {
	return (
		<section id='ocochodzi' style={{ maxWidth: '100%', height: 'auto', paddingTop:"30px"}}>
            <div className='container' style={{display:"flex", flexDirection:"column",margin:"50px 0px"}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <h2 className='fourStepsH2' style={{fontSize:"30px", fontWeight:"normal"}}>Wystarczą 4 proste kroki</h2>
                    <Decoration style={{margin:"40px 0px"}}/>
                </div>
                <div className="fourIcons" style={{display:"flex", justifyContent:"center", alignItems:"center",textAlign:"center", marginBottom:"40px"}}>
                    <div style={{width:"150px", display:"flex", flexDirection:"column", margin:"0px 80px", justifyContent:"center", alignItems:"center"}}>
                        <img style={{ maxWidth: "70%", maxHeight: "60%"}} src={Icon1} alt='obrazek koszulki'/>
                        <span style={{fontSize:"18px", letterSpacing:"0px",color:"#3C3C3C", margin:"20px 0px"}}>Wybierz rzeczy</span>
                        <hr style={{width:"50px"}}/>
                        <p style={{margin:"20px 0px"}}>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div style={{width:"150px", display:"flex", flexDirection:"column", margin:"0px 80px", justifyContent:"center", alignItems:"center"}}>
                        <img style={{ maxWidth: "70%", maxHeight: "60%"}} src={Icon2} alt='obrazek pakownia'/>
                        <span style={{fontSize:"18px", letterSpacing:"0px",color:"#3C3C3C", margin:"20px 0px"}}>Spakuj je</span>
                        <hr style={{width:"50px"}}/>
                        <p style={{margin:"20px 0px"}}>skorzystaj z worków na śmieci</p>
                    </div>
                    <div style={{width:"150px", display:"flex", flexDirection:"column", margin:"0px 80px", justifyContent:"center", alignItems:"center"}}>
                        <img style={{ maxWidth: "70%", maxHeight: "60%"}} src={Icon3} alt='obrazek lupy'/>
                        <span style={{fontSize:"18px", letterSpacing:"0px",color:"#3C3C3C",marginBottom:"20px"}}>Zdecyduj komu chcesz pomóc</span>
                        <hr style={{width:"50px"}}/>
                        <p style={{margin:"20px 0px"}}>wybierz zaufane miejsce</p>
                    </div>
                    <div style={{width:"150px", display:"flex", flexDirection:"column", margin:"0px 80px", justifyContent:"center", alignItems:"center"}}>
                        <img style={{ maxWidth: "70%", maxHeight: "60%"}} src={Icon4} alt='obrazek strzałek kręcących się w koło'/>
                        <span style={{fontSize:"18px", letterSpacing:"0px",color:"#3C3C3C", margin:"20px 0px"}}>Zamów kuriera</span>
                        <hr style={{width:"50px"}}/>
                        <p style={{margin:"20px 0px"}}>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className='container'>
                <Link to='/logowanie' className='homeTextBtn'>ODDAJ RZECZY</Link>
                </div>
            </div>
        </section>
	)
}

export default FourSteps

import React from 'react'


function YellowSection() {
	return (
		<section style={{ maxWidth: '100%', height: 'auto',}}>
            <div className='container' style={{ padding:" 70px 0px", maxWidth:"100%", backgroundColor:"#ffe700", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <div style={{textAlign:"center", width:" 400px"}}>
                    <h2 className='yellowH2'>10</h2>
                    <span className='yellowSpan'>ODDANYCH WORKÓW</span>
                    <p className='yellowP'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div style={{textAlign:"center", width:" 400px"}}>
                    <h2 className='yellowH2'>5</h2>
                    <span className='yellowSpan'>WSPARTYCH ORGANIZACJI</span>
                    <p className='yellowP'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div style={{textAlign:"center", width:" 400px"}}>
                    <h2 className='yellowH2'>7</h2>
                    <span className='yellowSpan'>ZORGANIZOWANYCH ZBIÓREK</span>
                    <p className='yellowP'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </section>
	)
}

export default YellowSection

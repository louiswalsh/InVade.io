import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import React from "react";
import MyTable from './mytable'
import logo from '../ivglogo.png';


const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


class AppParallax extends React.Component {
    render() {
        return(
        <Parallax ref={(ref) => (this.Parallax = ref)} pages={3}>
 <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#3a3734' }} />
             <ParallaxLayer offset={0.5} speed={1} style={{ backgroundColor: '#3a3734' }} />
             <ParallaxLayer offset={0.5} speed={0} style={{ backgroundColor: '#3a3734' }} />


             <ParallaxLayer
              offset={.5}
              speed={0}
              style={{ background: "linear-gradient(#3a3734, #F5F0E1)" }}
             />

             <ParallaxLayer offset={1.5} speed={1} style={{ backgroundColor: '#F5F0E1' }} />

             <ParallaxLayer
              offset={1.5}
              speed={0}
              style={{ background: "linear-gradient(#F5F0E1, #f57f17)" }}
             />


             <ParallaxLayer offset={2.5} speed={1} style={{ backgroundColor: '#f57f17' }} />
             <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#f57f17' }} />




             <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />



            <ParallaxLayer 
            offset={0} 
            speed={0.1} 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={logo} className="App-logo" alt="logo"  />
                
            </ParallaxLayer>

            <ParallaxLayer 
            offset={.75} 
            speed={0.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MyTable />
            </ParallaxLayer>
            
        </Parallax>
        )}
}

export default AppParallax;
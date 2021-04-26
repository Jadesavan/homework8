import React, {Component} from "react";
import jackie from './jackie.jpg';

class Jackie extends Component{
    render() {
        return(
            //Some of the information was knowledge base since I follow her on social media and subscribed to her channel
            <div>
            <h2>Jackie Aina</h2>
            <p>Jackie Aina is a beauty and lifestyle content creator. She is a professional makeup artist
                turned Youtber. She started her Youtube channel back in 2009 due to the lack of representation
                of women of color. Since then she had acquired a loyal fanbase. She makes content that teaches,
                inspire and build confidence. She speaks up about things that are happening in the black community
                and what is happening with black women. <br/>
                Jackie Aina accomplish many things from winning a NAACP award to being in magazine. She interviewed
                the Naomi Campbell and even featured her in her video on her Youtube <br/>page. She collab with the makeup 
                brand Anastasia Beverly Hill or ABH on eyeshadow pallet that sold out. Last year she created a lifestyle
                brand called ForevrMood where she sell candles,<br/> satin pillow cases and head bands. 
            </p>
            
            <img  className="melanin"src={jackie} title="Jackie Aina" alt="Jackie Aina" />
            <div>
          <a href=  "https://jackieaina.com/about/"> Source</a>
          </div>
          <div>
           <a href= "https://yt3.ggpht.com/ytc/AAUvwngS7sViNb-g54pk-1TX8bYE-r1gvufXc7EkeJwk_A=s900-c-k-c0x00ffffff-no-rj">Jackie Aina Picture source</a>
           </div>
            </div>
        )
            
    }
}
export default Jackie;
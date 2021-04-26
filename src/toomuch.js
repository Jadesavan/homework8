import React, {Component} from "react";
import toomuch from'./toomuch.jpg';

class Toomuchmouth extends Component{
    render() {
        return(
            //Some of the information was knowledge base since I follow her on social media and subscribed to her channel
            <div>
            <h2>TooMuchMouth</h2>
            <p>Shanygne (Sha-neen)a.k.a TooMuchMouth on youtube. She is a beauty and lifestyle 
                content creator. She started her channe; back in 2015. She create videos on beauty,
                lifestyle and entertainment. <br/>She does numerous videos makeup hauls and trying new 
                makeup. She does clothing try on hauls and giving her subscribers ideas and inspiration.
                She occassionally does storytime videos about what happened in her life. She try different 
                makeup on her skin complexions since sometimes there is no representation of darker skin 
                women in the beauty industry. <br/>She has video series of her trying different foundations
                through out the week and in near the end of the year she does a video where she said she
                tried 100 foundations and give her opinion on which foundations are worth the money.
            </p>
            
            <img className="melanin" src={toomuch} title="Toomuchmouth" alt="Toomuchmouth"/>
            <div>
            <a href="https://erikavieira.net/how-to-reinvent-yourself-on-youtube-with-too-much-mouth/">Source</a>
            </div>
            <div>
            <a href="https://yt3.ggpht.com/ytc/AAUvwniti2-41QLKWX0NVg9LENDzRtCJmvv2no1lZKYoLg=s900-c-k-c0x00ffffff-no-rj">TooMuchMouth Picture source</a>
            </div>
            </div>
        )
            
    }
}
export default Toomuchmouth;
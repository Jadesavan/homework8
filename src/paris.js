import React, {Component} from "react";
import heyparis from './heyparis.jpg';
class HeyParis extends Component{
    render() {
        return(
            //Some of the information was knowledge base since I follow her on social media and subscribed to her channel
            <div>
            <h2>HeyParis</h2>
            <p>HeyParis is a content creator and she create different types of content from beauty,
                lifestyle, storytelling, and playing games. She is based in Toronto, Ontario, Canada. 
                She has four channels on Youtube, she has her main channel where she tell storytime 
                which are based on the events in her life, try-on hauls of clothing, and fragrance
                reviews/hauls, and occassionally trying food or cooking food. <br/>On her other channels, 
                like SlayParis where she does makeup revies and hauls, PlayParis where she plays the 
                PC game The Sims 4 and her couple channel with her husband called Paris and Cam. <br/>Paris 
                inspire young women and being the big sister for her subscribers. Currently she and her
                husband are raising money for the people in St.Vincent island, where her husband parents 
                resides.
        
            </p>
            <img className="melanin"  src={heyparis} title="HeyParis" alt="HeyParis"/>
            <div>
            <a href="https://yt3.ggpht.com/ytc/AAUvwniLbI6GSCf5jxg2-f438KRTrTfvG66WbyIk1oradQ=s900-c-k-c0x00ffffff-no-rj">HeyParis Picture source</a>
            </div>
            </div>
        )
            
    }
}
export default HeyParis;
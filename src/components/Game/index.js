import React, { Component } from "react";
import data from "../../line.json";
import Wrapper from "../Wrapper";
import Card from "../Card"
import Header from '../Header'



class Game extends Component{
    state ={
        data,
        score:0,
        clickeTrack:[],
        record:0,
        message:''
    };


    shuffleShit = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    shuffleImage = ()=>{
        let randArray = this.state.data;
        this.setState({data:this.shuffleShit(randArray)})
    }
   
    componentDidMount(){
        this.shuffleImage();
    }
    
    handleClick = id =>{
        const clicked = this.state.clickeTrack;
        const scoreNow = this.state.score;
        const isClicked = clicked.includes(id);
        
        if(scoreNow === 7){
            this.setState({
                score:0,
                clickeTrack:[],
                record: Math.max(scoreNow,this.state.record),
                message:'You have cap the max already, set for next round'
            })
        }else{
            if(isClicked){
                this.setState({
                    score:0,
                    clickeTrack:[],
                    record: Math.max(scoreNow,this.state.record),
                    message:'You just made incorrect click, woooo'
               })
              
              }else{
                  this.setState({
                      score:scoreNow+1,
                      record: Math.max(scoreNow+1,this.state.record),
                      clickeTrack:[...clicked,id],
                      message:'Nice move, continue'
                    })
              }
        }

        this.shuffleImage()
    } 

    render(){
        return (
            <div>
            <Header score={this.state.score} record={this.state.record} message={this.state.message}/>
            <Wrapper>
                {this.state.data.map(e =>(<Card image={e.image} id={e.id} handler={this.handleClick}/>))}
            </Wrapper>
            </div>
           
          );
    } 
}

export default Game;
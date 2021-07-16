import axios from "axios";
import React, { Component } from 'react';

import { SocialMedia, Social, Icon, SocialDesc , Span ,SpanInfo}  from './style.js'

class SocailMedia extends React.Component {

  state = {
social:[]
  }

  componentDidMount (){
    axios.get("js/data.json").then( res => { this.setState({social: res.data.social })})
  }
  render(){


    const {social} = this.state;
  
  
  const SocialList = social.map((socialItem) => {
           return(
            <Social key={socialItem.id} item={socialItem.id}>
                <Icon  className={socialItem.icon}></Icon>
                <SocialDesc>
                    <Span>{socialItem.title}</Span>
                    <Span>{socialItem.body}</Span>
                </SocialDesc>
            </Social>
  )
  })
  
    return (

            <SocialMedia>
            {SocialList}

            </SocialMedia>

)}}
  
  
  export default SocailMedia;
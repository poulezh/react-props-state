import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import App from './components/app';
import './index.css';

class WhoAmI extends Component {
   /* constructor(props) {
        super(props);
        this.state = {
            years: 26,
        }
       // this.nextYear = this.nextYear.bind(this)
       //мы биндим функцию к каждому обьекту.это первый способ
       //...
       //2 прописать функцию внутри конструктора то же самое
       /*this.nextYear = () => {
           this.setState(state => ({
               years: ++state.years
           }) )
       }*/
        state = {
            years:26
        }
       nextYear = () => {
        this.setState(state => ({
            years: ++state.years
        }) )
    }
   /* nextYear () {
       
        //this.state.years++
        this.setState(state => ({
            years: ++state.years
        }) )
    }*/
    render () {
        const {name,surname,link} = this.props;
        const {years} = this.state;
        return (
            <>
            <button onClick={this.nextYear}>++</button>
            <h1>My name is {name}, surnname - {surname}, years = {this.state.years}</h1>
            <a href={link}>My profile</a>
            </>
        )
    }
}



const All =() => {
    return (
        <>
        <WhoAmI name='fatima' surname='dada' link='123'/>
        <WhoAmI name='fatima' surname='dada' link='123'/>
        <WhoAmI name='fatima' surname='dada' link='123'/>

        </>
    )
}

ReactDOM.render(
    <div >
    <All/>
    
    
   
    </div>  
 ,document.getElementById('root')
);
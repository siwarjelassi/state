import React ,{Component } from "react";
import Billgates from './billgates.jpg' ;
import Marck from './marck.jpg';
import Jeffbezos from './jeffbezos.jpg';
import './App.css';
export class State extends Component {
    constructor(props){
        super(props)
      this.state={
          Name:'Billgates',
          Image: Billgates,
          Description:'William Henry Gates né le 28 octobre 1955 à Seattle est un informaticien et entrepreneur américain pionnier dans le domaine de la micro-informatique Il a fondé en 1975 à lâge de 20 ans avec son ami Paul Allen la société de logiciels de micro-informatique Micro-Soft.',
        }
      }

    render(){
        return(
<div>
    <center>
      
      <button onClick={()=>{
    this.setState({Name:'Billgates',Image:Billgates,Description:'Mark Elliot Zuckerberg [mɑɹk ˈeliət ˈzʌkərbɜːrɡ]1, né le 14 mai 1984 à White Plains dans lÉtat de New York, est un informaticien et chef dentreprise américain Il est le cofondateur du site web de réseau social Facebook dont il est lactionnaire majoritaire et le président-directeur général'})}}>Billgates</button>      
     <button onClick={()=>{
    this.setState({Name:'Marck',Image:Marck,Description:'Mark Elliot Zuckerberg [mɑɹk ˈeliət ˈzʌkərbɜːrɡ]1, né le 14 mai 1984 à White Plains dans lÉtat de New York, est un informaticien et chef dentreprise américain Il est le cofondateur du site web de réseau social Facebook dont il est lactionnaire majoritaire et le président-directeur général'})}}>Marck</button>
      <button onClick={()=>{
    this.setState({Name:'Jeff bezos',Image:Jeffbezos,Description:'Jeffrey Bezos, dit Jeff Bezos, né le 12 janvier 1964 à Albuquerque (Nouveau-Mexique), est un entrepreneur et investisseur américain dans les domaines des technologies et du commerce.'})}}>Jeff bezos </button>
 <h1>{this.state.Name}</h1>
  <img className="photo" src={this.state.Image}/>
      <p>{this.state.Description}</p>
      </center>
</div>
        ) }}

import React, { Component } from "react";
import api from '../../services/api';
import "./styles.css";

const urlimage = `https://api.nasa.gov/EPIC/archive/natural/2020/10/31/png/`;
const key = `i9MXfDgZBAT1WOowUnibG41WydbMHeVWeAcchH0d`;



export default class Main extends Component {

    state = {
        data: [],
        caption: [],
        identifier: [],
        image: [],

    }
    componentDidMount() {
        this.LoadImages();
    }

    LoadImages = async () => {

      
        const response = await api.get('/images?api_key=i9MXfDgZBAT1WOowUnibG41WydbMHeVWeAcchH0d') ;

        this.setState({ data: response.data });

    };

    

    render() {
      //  return <h1>Contagem de imagem: {this.state.data.length} </h1>;

       return (
           <div className="listImage">
               {this.state.data.map(list => (
                 /* <h2 key={data.identifier}>{data.image}</h2>*/
                   <article key={list.identifier}>
                     <strong>Identifier: {list.identifier}</strong>
                     <p><strong>Caption: {list.caption}</strong></p>
                     <p><strong>Image: {list.image}</strong></p>
                     <p><strong>Data: 2020-05-22{list.data}</strong></p>
                    
                    
                       <img src={`${urlimage}${list.image}.png?api_key=${key}`}
                         width="700"
                         alt={list.image}
                       />
                   
                     
                     <p></p>
                     <button href= {'https://api.nasa.gov/EPIC/archive/natural/2020/05/22/png/epic_1b_20200522002713.png?api_key=i9MXfDgZBAT1WOowUnibG41WydbMHeVWeAcchH0d'} >Acessar</button>                    
                     <p></p>
                   </article>
               ))}
           </div>
       )
    }
}

import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Free Cocktail is one of the cool services that are provided by our Resort!"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hicking",
                info: "Endless Hicking is one of the best services that are provided by our Resort!"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Free Shuttle is one of the fabulous services that are provided by our Resort!"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Strongest Beer is one of the marvelous services that are provided by our Resort!"
            }
        ]
    };
    render() {
        return (
            <section className ="services">
                <Title title="Services" />
                <div className="services-center">
                    { this.state.services.map ((item, index) =>{
                        return (
                        <article key = {index} className="services">
                            <span> {item.icon} </span>
                            <h5> {item.title} </h5>
                            <p> {item.info} </p>
                        </article>
                        )
                    } ) }
                </div>
            </section>
        );
    }
}

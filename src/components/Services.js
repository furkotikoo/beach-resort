import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Monastic been to agen yet deadly had charms pomp wrong, passion and ways childe so their chill. His nor to."
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: "Monastic been to agen yet deadly had charms pomp wrong, passion and ways childe so their chill. His nor to."
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Monastic been to agen yet deadly had charms pomp wrong, passion and ways childe so their chill. His nor to."
            },
            {
                icon: <FaBeer />,
                title: "strongest beer",
                info: "Monastic been to agen yet deadly had charms pomp wrong, passion and ways childe so their chill. His nor to."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((service, index) => {
                        return <article key={index} className="service" >
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    })}
                </div>
            </section >
        )
    }
}

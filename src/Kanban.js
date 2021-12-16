import React, { Component } from "react";
import './Kanban.css';

const showSearch = [
    {
        categories: 'Popular show',
        tvShow: 'Hawkeye'
    },
    {
        categories: 'Top Pick For You',
        tvShow: 'Marverl 616'

    },
    {
        categories: 'New show',
        tvShow: 'Called to the Wild'

    },
    {
        categories: 'Action adventure show',
        tvShow: 'Agent Carter'

    },
    {
        categories: 'Comedy',
        tvShow: '2 Broke Girls'

    },
    {
        categories: '2010s show',
        tvShow: 'Fresh Off The Boat',

    }
];

const displaySearch = showSearch.map((shows, idx) => {
    return (
        <div key={idx}>
            <article className="message is-black">
                <div className="message-header">
                    <p>{shows.categories}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    <div className="board-item">
                        <div className="board-item-content"><span>{shows.tvShow}</span></div>
                    </div>
                </div>
            </article>

        </div>

    );
});


class Kanban extends Component {
    render() {
        return (
            <div>
                <nav className="navbar has-shadow">
                    <div className="container">
                        <div className="navbar-brand"><a className="navbar-item" href="../"><img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" /></a>
                            <div className="navbar-burger burger" data-target="navMenu"><span></span><span></span><span></span></div>
                        </div>
                        <div className="navbar-menu" id="navMenu">
                            <div className="navbar-end">
                                <div className="navbar-item has-dropdown is-hoverable"><a className="navbar-link">Account</a>
                                    <div className="navbar-dropdown"><a className="navbar-item">Dashboard</a><a className="navbar-item">Profile</a><a className="navbar-item">Settings</a>
                                        <hr className="navbar-divider" />
                                        <div className="navbar-item">Logout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container">
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <div className="control has-icons-left has-icons-right">
                                            <input className="input is-large" type="search" />
                                            <span className="icon is-medium is-left">
                                                <i className="fa fa-search"></i>
                                            </span>
                                            <span className="icon is-medium is-right">
                                                <i className="fa fa-empire"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="box cta">
                    <div className="columns is-mobile is-centered">
                        <div className="field is-grouped is-grouped-multiline">
                            <div className="control"><span className="tag is-link is-large">Link</span></div>
                            <div className="control"><span className="tag is-success is-large" title="success">Success</span></div>
                            <div className="control"><span className="tag is-black is-large">Black</span></div>
                            <div className="control"><span className="tag is-warning is-large"title="warning">Warning</span></div>
                            <div className="control"><span className="tag is-danger is-large">Danger</span></div>
                            <div className="control"><span className="tag is-info is-large">Info</span></div>
                        </div>
                    </div>
                </div>
                <section className="container">
                    <div className="level-item">
                        <div className="columns is-multiline is-centered cards-container" id="sectioncontainer">
                            <div className="column is-narrow">
                               
                                        {displaySearch}
                                        
                            </div>
                            <div className="column is-narrow">
                                <article className="message is-primary">
                                    <div className="message-header">
                                        <p>Season 2</p>
                                        <button className="delete" aria-label="delete"></button>
                                    </div>
                                    <div className="message-body">
                                        <div className="board-item">
                                            <div className="board-item-content"><span>Tiger Pushes Mountain</span></div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="column is-narrow">
                                <article className="message is-link">
                                    <div className="message-header">
                                        <p>Season 3</p>
                                        <button className="delete" aria-label="delete"></button>
                                    </div>
                                    <div className="message-body">
                                        <div className="board-item">
                                            <div className="board-item-content"><span>Enter the Phoenix</span></div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="column is-narrow">
                                <article className="message is-info">
                                    <div className="message-header">
                                        <p>Info</p>
                                        <button className="delete" aria-label="delete"></button>
                                    </div>
                                    <div className="message-body">
                                        <div className="board-item">
                                            <div className="board-item-content"><span>Bronchy</span></div>
                                        </div>

                                    </div>
                                </article>
                            </div>
                            <div className="column is-narrow">
                                <article className="message is-success">
                                    <div className="message-header">
                                        <p>Success</p>
                                        <button className="delete" aria-label="delete"></button>
                                    </div>
                                    <div className="message-body">
                                        <div className="board-item">
                                            <div className="board-item-content"><span>signature</span></div>
                                        </div>

                                    </div>
                                </article>
                            </div>
                            <div className="column is-narrow">
                                <article className="message is-warning">
                                    <div className="message-header">
                                        <p>Warning</p>
                                        <button className="delete" aria-label="delete"></button>
                                    </div>
                                    <div className="message-body">
                                        <div className="board-item">
                                            <div className="board-item-content"><span>Ganimede</span></div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="columns is-mobile is-centered">
                    <div className="column is-half is-narrow"></div>
                </div>
                <footer>
                    <div className="box cta">
                        <div className="columns is-mobile is-centered">
                            <div className="field is-grouped is-grouped-multiline">
                                <div className="control">
                                    <div className="tags has-addons"><a className="tag is-link" href="https://github.com/BulmaTemplates/bulma-templates">Bulma Templates</a><span className="tag is-light">Daniel Supernault</span></div>
                                </div>
                                <div className="control">
                                    <div className="tags has-addons"><a className="tag is-link">The source code is licensed</a><span className="tag is-light">MIT  <i className="fa fa-github"></i></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Kanban;
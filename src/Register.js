import React, { Component } from "react";
import './Kanban.css';

const musicSearch = [
  {
    categories: 'Pop',
    album: 'Thriller'
  },
  {
    categories: 'Rap',
    album: 'What A Time To Be Alive'

  },
  {
    categories: 'Jazz',
    album: 'Love Supreme'

  },
  {
    categories: 'Country',
    album: 'Nellyville'

  },
  {
    categories: 'Soul',
    album: 'Whats Going On'

  },
  {
    categories: 'Classical',
    album: 'Dat Bach',

  }
];

const displaymusicList = musicList.map((c, idx) => {
    return (
        <div className="box" key={idx}>
            <h4 id="const" className="title is-3">{c.categories}</h4>
            <article className="message is-primary">
                <span className="icon has-text-primary">
                    <i className="fab fa-js"></i>
                </span>
                <div className="message-body">
                    {c.wtd}
                </div>
            </article>
            <pre><code className="language-javascript">{c.album}</code></pre>
        </div>
    );
})

class Register extends Component {
  render() {
      return (
        <div>
              <section class="container">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register">
          <div class="columns">
            <div class="column left">
              <h1 class="title is-1">Super Cool Website</h1>
              <h2 class="subtitle colored is-4">Lorem ipsum dolor sit amet.</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ex deleniti aliquam tempora libero excepturi vero soluta odio optio sed.</p>
            </div>
            <div class="column right has-text-centered">
              <h1 class="title is-4">Sign up today</h1>
              {c.album}
              <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <form>
                <div class="field">
                  <div class="control">
                    <input class="input is-medium" type="text" placeholder="Name" />
                  </div>
                </div>


                <div class="field">
                  <div class="control">
                    <input class="input is-medium" type="email" placeholder="Email" />
                  </div>
                </div>
                <button class="button is-block is-primary is-fullwidth is-medium">Submit</button>
                <br />
                <small><em>Lorem ipsum dolor sit amet consectetur.</em></small>
              </form>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
     
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-instagram"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="level-right">
              <small class="level-item" style="color: var(--textLight)">
                &copy; Super Cool Website. All Rights Reserved.
              </small>
            </div>
          </nav>
        </div>

      </div>
    </section>

        </div>



        )
      }
  }

  export default Register;
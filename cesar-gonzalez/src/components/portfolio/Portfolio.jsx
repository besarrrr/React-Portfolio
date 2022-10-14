import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Dragons and Chats',
    github: "https://github.com/Kaysie04/Project-2-DRAGONS-CHATS",
    demo: "https://dragons-chat-final.herokuapp.com/"
  },
  {
    id:2,
    image: IMG2,
    title: 'Foodle',
    github: "https://github.com/besarrrr/Foodle",
    demo: "https://kate-github.github.io/Foodle/"
  },
  {
    id:3,
    image: IMG3,
    title: 'Music Meet Up',
    github: "https://github.com/luketorv/music-meetup2",
    demo: "https://boiling-plateau-66922.herokuapp.com/"
  },
  {
    id:4,
    image: IMG1,
    title: 'Dragons and Chats',
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id:5,
    image: IMG1,
    title: 'Dragons and Chats',
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id:6,
    image: IMG1,
    title: 'Dragons and Chats',
    github: "https://github.com",
    demo: "https://github.com"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (

            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3> {title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank"> Github</a>
            <a href={demo} className="btn btn-primary" target="_blank"> Website!</a>
            </div>
            </article>
          )

        })
       }
        
      </div>
    </section>
  )
}

export default Portfolio
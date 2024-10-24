import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title:"Chess Board",
        desc:"A Python based app for visualization of chess board and helps play effectively chess",
        img: "/chess-01.jpg",
        tags: ['Python', 'DSA'],
    },
    {
        id: 1,
        title: "Tic-Tac-Toe",
        desc: "A Python game to play whenever bored, i enjoy playing when i take study breaks.",
        img: "/TicTacToe.jpg",
        tags: ['Python', 'DSA'],
    },
    {
        id: 2,
        title: "Hangman",
        desc: "A Python game that helps with English, Urdu Vocabulary.",
        img: "/hangman.jpg",
        tags: ['Python'],
    },
    {
        id: 3, 
        title: "Remove Image from backgroung",
        desc:"A Python program that will remove background of any image and i edit the image in illustrator.",
        img: "/removeimagebg.jpg", 
        tags: ['Python'],
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {data.map((el) => (<Card 
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}
          />))}  
        </div>
    </div>
  )
}

export default Projects
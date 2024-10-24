import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
           <div data-aos="zoom-in">
            <h2 className='text-4xl md:text-5xl'>Platforms I Work With</h2>
            <p className='text-gray-500 pt-2'>
            I have a strong skill set in both frontend and backend development. In Python, I am proficient in handling data structures and algorithms, allowing me to write efficient and optimized code for solving complex problems. On the frontend, I work with TypeScript and Next.js, building dynamic, responsive, and scalable web applications. I am also adept at styling with CSS to ensure visually appealing user interfaces. Additionally, I possess a solid foundation in graphic design, utilizing tools like Photoshop and Adobe Illustrator to create professional and visually engaging designs. This combination of development and design skills allows me to approach projects with both technical and creative expertise.
            </p>
            <br />
            <br />
            <br />
            </div> 
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h6 data-aos="zoom-in">Python</h6>
                        <h6 data-aos="zoom-in">DSA</h6>
                        <h6 data-aos="zoom-in">Typescript</h6>
                    </div>
                    <div className='space-y-2'>
                        <h6 data-aos="zoom-in">Next.js</h6>
                        <h6 data-aos="zoom-in">CSS</h6>
                        <h6 data-aos="zoom-in">Adobe Illustrator</h6>
                    </div>
                    <div className='space-y-2'>
                        <h6 data-aos="zoom-in">PhotoShop</h6>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
import appCss from './App.module.css'
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';


function App() {
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  const skills = [
  { name: 'HTML', description: 'Expert proficiency in markup language for the web.' },
  { name: 'CSS', description: 'Expert proficiency in styling language for web pages.' },
  { name: 'JavaScript', description: 'Expert proficiency in programming language for the web.' },
  { name: 'TypeScript', description: 'Expert proficiency in JavaScript with types.' },
  { name: 'React', description: 'Expert proficiency in using a library for building UI.' },
  { name: 'PHP', description: 'Proficient in server-side scripting language.' },
  { name: 'Laravel', description: 'Advanced level in the PHP web framework.' },
  { name: 'MySQL', description: 'Advanced level in database management system.' },
  { name: 'TailwindCSS', description: 'Advanced proficiency in utility-first CSS framework.' },
  { name: 'Git/Github', description: 'Advanced proficiency in version control.' },
  { name: 'Vite', description: 'Expert level in build tool for modern web projects.' },
  { name: 'REST APIs', description: 'Expert proficiency in web service communication.' },
  { name: 'GraphQL', description: 'Proficient in data query language.' },
  { name: 'Data structures', description: 'Intermediate knowledge in organizing data for efficiency.' },
  { name: 'Algorithms', description: 'Intermediate knowledge in steps for solving problems.' },
  { name: 'Problem Solving', description: 'Advanced capability in logical thinking for solutions.' },
  { name: 'OOP', description: 'Proficient in the object-oriented programming paradigm.' },
  { name: 'DBMS', description: 'Proficient in database management systems.' },
  { name: 'Java', description: 'Intermediate proficiency in programming language for various uses.' },
  { name: 'C++', description: 'Intermediate proficiency in general-purpose programming language.' }
];

const projects = [
  {
    image: 'assets/projects_images/storeIt.png',
    title:'storeIt',
    skills: ['HTML', 'CSS', 'TypeScript', 'PHP'],
    viewProjectLink: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_webdevelopment-fullstack-laravel-activity-7293270451366064128-xO0H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
    viewCodeLink: 'https://github.com/abdalla-sobhy/storeIt',
  },
  {
    image: 'assets/projects_images/luzura.png',
    title:'Luzura',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    viewProjectLink: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_ecommerce-webdevelopment-programming-activity-7265405877531107329-Mxxn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
    viewCodeLink: 'https://github.com/abdalla-sobhy/LUZURA',
  },
  {
    image: 'assets/projects_images/justPost.png',
    title:'JustPost',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    viewProjectLink: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_laravel-php-bigproject-activity-7243178346895839233-zGhk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
    viewCodeLink: 'https://github.com/abdalla-sobhy/JustPost',
  },
  {
    image: 'assets/projects_images/resume.png',
    title:'Resume Builder',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    viewProjectLink: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_codeclause-intermediatelevelproject-internship-activity-7232027274974269442-f3Wk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
    viewCodeLink: 'https://github.com/abdalla-sobhy/CodeClauseInternship_resume_builder',
  },
  {
    image: 'assets/projects_images/space.png',
    title:'Space Tourism',
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    viewProjectLink: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_spacetourism-html-css-activity-7225451685983191042-kqLF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
    viewCodeLink: 'https://github.com/abdalla-sobhy/space-tourism',
  },
  {
    image: 'assets/projects_images/youtube.png',
    title:'Youtube',
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    viewProjectLink: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_youtube-frontend-hardfrontendprojects-activity-7220861564856221697-a8Ci?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
    viewCodeLink: 'https://github.com/abdalla-sobhy/front_end_Youtube',
  },
]

  const form = useRef<HTMLFormElement>(null);
  const [currentSet, setCurrentSet] = useState(0);
  const skillsPerPage = 6;

  const totalPages = Math.ceil(skills.length / skillsPerPage);
  const start = currentSet * skillsPerPage;
  const end = start + skillsPerPage;
  const currentSkills = skills.slice(start, end);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const [sendState, setSendState] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  const nextSet = () => {
    setCurrentSet((prev) => {
      const newSet = Math.min(prev + 1, totalPages - 1);
      setIsAtStart(newSet === 0);
      setIsAtEnd(newSet === totalPages - 1);
      return newSet;
    });
  };

  const prevSet = () => {
    setCurrentSet((prev) => {
      const newSet = Math.max(prev - 1, 0);
      setIsAtStart(newSet === 0);
      setIsAtEnd(newSet === totalPages - 1);
      return newSet;
    });
  };

  const scrollToBottom = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  setSendState('pending');

  emailjs
    .sendForm('service_lchtlmj', 'template_hntv1of', form.current, 'UooaxKKvFCoKyKHHp')
    .then(() => {
      form.current!.reset();
      setSendState('success');
    })
    .catch(() => {
      setSendState('error');
    });
};


  return (
    <div className='flex flex-col gap-16 bg-[#242424] '>
      <header className='w-full items-center justify-center flex pt-8'>
        <div className='w-3/4 flex flex-row justify-between '>
          <h2 className={`${appCss.headerAndFooterName} text-white font-bold`}>abdullahSobhy</h2>
          <div className='flex flex-row gap-8'>
            <a
              href="https://github.com/abdalla-sobhy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${appCss.headerIcons} w-8 h-8 cursor-pointer`}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/abdallah-sobhy-6488932a1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${appCss.headerIcons} w-7 h-7 cursor-pointer`}>
                <svg fill="#000000" width="100%" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>linkedin</title>
                  <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                </svg>
              </div>
            </a>

            <a
              href="https://codeforces.com/profile/Abdalla_og"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${appCss.headerIcons} w-7 h-7 cursor-pointer`}>
                <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/></svg>
              </div>
            </a>

          <a
            href="https://wa.me/201550328625?text=Hi%20Abdullah,%20I%20saw%20your%20portfolio!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${appCss.headerIcons} w-7 h-7 cursor-pointer`}>
              <svg width="100%" height="100%" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#000000">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]"></path>
                      </g>
                    </g>
                  </g>
              </svg>
            </div>
          </a>
          </div>
        </div>
      </header>

      <main>
        {/* Intro section */}
        <section className={`${appCss.introSection} flex flex-row`}>
          {/* Intro left side */}
          <div className={`${appCss.introLeftSide} flex flex-col z-10`}>
            <div className={`${appCss.introPatternRings}`}><img src="assets/pattern-rings.png" alt="pattern-rings" /></div>
            <div className={`${appCss.introText} text-left flex flex-col items-center text-white`}>
              <div className='flex flex-col gap-12'>
                <div className='font-bold text-[5rem]'>Nice to meet you!<br/>I'm <span className="border-b-4 border-[#4CE19E] pb-1">Abdullah Sobhy</span>.</div>
                <div className={`${appCss.introParagraph} text-[#c1c1c1] text-xl`}>Based in EGY, I'm a full-stack developer <br />passionate about building accessible web apps <br />that users love.</div>
                <div className={`${appCss.contactMeButtonDiv} mt-6`}><button onClick={scrollToBottom}>CONTACT ME</button></div>
              </div>
            </div>
          </div>

          {/* Intro right side */}
          <div className={`${appCss.fightSide} flex flex-col`}>
            <div className={`${appCss.photo} z-0`}><img src="assets/photo-modified.png" alt="personal photo" /></div>
            <div className={`${appCss.singleCircle}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><circle cx="830.5" cy="585.5" r="64" fill="none" stroke="#FFF" transform="translate(-766 -521)"/></svg>
            </div>
          </div>
        </section>
        <div className='w-full flex justify-center items-center'>
          <hr className='w-3/4'/>
        </div>
        <section className={`${appCss.skillsSection} w-full justify-center items-center flex flex-row mt-16 gap-12`}>
          <div onClick={prevSet} className={`${!isAtStart?appCss.leftArrow:''} w-12 h-12 cursor-pointer`}>
            <svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512">
                <path fill="#2D2D2D" d="M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256
                  C512,114.608,397.392,0,256,0z"/>
                  <path fill={`${isAtStart?'#2D2D2D':'#FFFFFF'}`} d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.624,397.376,0,256,0L256,0z"/>
                <g opacity="0.2">
                  <polygon points="255.824,415.328 113.664,271.248 255.824,127.168 392.24,127.168 249.84,271.248 392.24,415.328 	"/>
                </g>
                <polygon className={!isAtStart?appCss.arrowLeft:''} fill="#FFFFFF" points="239.824,399.328 97.664,255.248 239.824,111.168 376.24,111.168 233.84,255.248 
                  376.24,399.328 "/>
            </svg>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-14 w-3/4 justify-center items-center'>
            {currentSkills.map((skill, index)=>(
              <div className='flex justify-center items-center'>
                <div key={index} className={`${appCss.skill} flex justify-center flex-col gap-3`}>
                  <div className={`${appCss.skillName}`}>{skill.name}</div>
                  <div className={`${appCss.skillDescription} text-[#c1c1c1] text-xl`}>{skill.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div onClick={nextSet} className={`${!isAtEnd?appCss.rightArrow:''} w-12 h-12 cursor-pointer`}>
            <svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512">
              <path fill="#2D2D2D" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
              <path fill={`${isAtEnd?'#2D2D2D':'#FFFFFF'}`} d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.624,397.376,0,256,0L256,0z"/>
              <polygon className={!isAtEnd?appCss.arrowRight:''} fill="#FFFFFF" points="272.176,111.088 414.336,255.168 272.176,399.248 135.76,399.248 278.16,255.168 
                135.76,111.088 "/>
            </svg>
          </div>
        </section>
        <div className='w-full flex justify-end ml-[17rem]'><img src="assets/pattern-rings.png" alt="pattern-rings" /></div>
        <section className='flex flex-col gap-8 w-full pb-24'>
          <div className='flex w-full justify-center'>
            <div className='flex w-3/4 justify-start flex-col gap-12'>

              <div className='flex flex-row justify-between w-[95%] items-center'>
                <div className={`${appCss.projects}`}><h1>Projects</h1></div>
                <div className={`${appCss.contactMeButtonDiv} mt-6`}><button onClick={scrollToBottom}>CONTACT ME</button></div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 w-full justify-center items-center'>
                {projects.map((project, index)=>(
                  <div key={index} className='flex flex-col gap-2 w-fit'>
                    <div className={`${appCss.projectImageContainer} w-[35rem] h-[24rem] relative`}>
                      <img className='w-full h-full' src={project.image} alt="project image" />
                      <div className={`${appCss.overlay} inset-0 flex flex-col items-center justify-center gap-7 opacity-0 transition-opacity duration-300 hover:opacity-100`}>
                        <a href={project.viewProjectLink} target="_blank" rel="noopener noreferrer">
                          <button className={`${appCss.underlineButton}`}>VIEW PROJECT</button>
                        </a>
                        <a href={project.viewCodeLink} target="_blank" rel="noopener noreferrer">
                          <button className={`${appCss.underlineButton}`}>VIEW CODE</button>
                        </a>
                      </div>
                    </div>
                    <div className={`${appCss.projectTitle}`}>{project.title}</div>
                    <div className={`${appCss.projectSkills} text-[#c1c1c1] text-[1.1rem] flex flex-row w-full gap-4`}>{project.skills.map((skill, index)=>( <div key={index}>{skill}</div> ))}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        <footer ref={contactSectionRef} className='bg-[#141414] w-full flex flex-col pt-24 gap-16 pb-24 h-fit'>
          <section className='w-full justify-center flex'>
            <div className='flex w-[80%] justify-between flex-row'>

              <div className='flex flex-col mt-[-2rem] gap-6'>
                <div className={`${appCss.footerContact}`}>Contact</div>
                <div className={`${appCss.footerText}`}>I would love to hear about your project and how I<br />could help. Please fill in the form, and I’ll get back<br />to you as soon as possible.</div>
                <div className='ml-[-22rem]'><img src="assets/pattern-rings.png" alt="pattern-rings" /></div>
              </div>

              {sendState === 'success' && (
  <div className="mb-4 text-green-400 font-semibold">
    Your message has been sent. Thank you!
  </div>
)}

{sendState === 'error' && (
  <div className="mb-4 text-red-400 font-semibold">
    Oops! Something went wrong. Please try again.
  </div>
)}

              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-16 w-1/2 max-w-md justify-end pb-8">
                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    className="w-full bg-transparent border-b-2 border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-[#4CE19E]"
                    placeholder="Name"
                    id="name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-0 text-gray-500 transition-all duration-200">
                    NAME
                  </label>
                </div>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    className="w-full bg-transparent border-b-2 border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-[#4CE19E]"
                    placeholder="Email"
                    id="email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-0 text-gray-500 transition-all duration-200">
                    EMAIL
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    className="w-full bg-transparent border-b-2 border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-[#4CE19E] h-32"
                    placeholder="Message"
                    id="message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-0 text-gray-500 transition-all duration-200">
                    MESSAGE
                  </label>
                </div>
                <div className={`${appCss.formButtonContainer} flex justify-end`}><button disabled={sendState === 'pending' || sendState === 'success'} className={`${appCss.underlineButton}`}>{sendState === 'pending' ? 'Sending…' : 'SEND MESSAGE'}</button></div>
              </form>

            </div>
          </section>
          <div className='w-full flex justify-center'><hr className='w-3/4'/></div>
          <div className='w-full flex justify-center'>
          <div className='w-3/4 flex flex-row justify-between '>
          <h2 className={`${appCss.headerAndFooterName} text-white font-bold`}>abdullahSobhy</h2>
          <div className='flex flex-row gap-8'>
            <a
              href="https://github.com/abdalla-sobhy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${appCss.headerIcons} w-8 h-8 cursor-pointer`}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/abdallah-sobhy-6488932a1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${appCss.headerIcons} w-7 h-7 cursor-pointer`}>
                <svg fill="#000000" width="100%" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>linkedin</title>
                  <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                </svg>
              </div>
            </a>

            <a
              href="https://codeforces.com/profile/Abdalla_og"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${appCss.headerIcons} w-7 h-7 cursor-pointer`}>
                <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/></svg>
              </div>
            </a>

          <a
            href="https://wa.me/201550328625?text=Hi%20Abdullah,%20I%20saw%20your%20portfolio!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${appCss.headerIcons} w-7 h-7 cursor-pointer`}>
              <svg width="100%" height="100%" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#000000">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]"></path>
                      </g>
                    </g>
                  </g>
              </svg>
            </div>
          </a>
          </div>
          </div>
        </div>
        </footer>

      </main>

    </div>
  )
}

export default App

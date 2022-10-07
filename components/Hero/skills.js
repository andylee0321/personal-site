import {useState, useEffect} from "react"
import SkillProgress from './skill-progress'

const skill_prog = [
    {
        title: 'React',
        current: 0,
        progress: 100
    },
    {
        title: 'Vue',
        current: 0,
        progress: 100
    },
    {
        title: 'Angular',
        current: 0,
        progress: 90
    },
    {
        title: 'Svelte',
        current: 0,
        progress: 90
    },
    {
        title: 'Node.js',
        current: 0,
        progress: 90
    },
    {
        title: 'PHP',
        current: 0,
        progress: 90
    },
    {
        title: 'Solidity',
        current: 0,
        progress: 90
    },
    {
        title: 'ASP.NET',
        current: 0,
        progress: 90
    },
    {
        title: 'Java',
        current: 0,
        progress: 90
    },
    {
        title: 'C++',
        current: 0,
        progress: 100
    },
    {
        title: 'D3',
        current: 0,
        progress: 100
    },
    {
        title: 'Web3',
        current: 0,
        progress: 100
    }
]

const Skills = () => {
    const [skillProg, setSkillProg] = useState(skill_prog)
    
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [])

    const updateProgress = () => {
        let bEnd = true;
        let newProg = [...skillProg]
        newProg.map((skill) => {
            if( skill.current < skill.progress ) {
                skill.current += skill.progress / 30

                if( skill.current > skill.progress )
                    skill.current = skill.progress
                bEnd = false
            }
        })
        setSkillProg(newProg)
        if( !bEnd )        
            setTimeout(updateProgress, 30);
    }

    const scrollHandler = () => {
        let bodyScroll = window.scrollY

        bodyScroll += 80;
        if( document.getElementById("about").offsetTop < bodyScroll ) {
            setTimeout(updateProgress, 200)
            window.removeEventListener('scroll', scrollHandler);
        }
    }

    return (
        <div className="skills">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4">
                        <div className="skill-items">
                            <div className="skill-title">
                                <span className="icon-pencil"></span><br/>
                                <h5 className="tit">Education</h5>
                            </div>

                            <div className="item-info mb-50">
                                <h6>Jilin University</h6>
                                <p>Bachelor of Computer Science</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3 col-sm-4">
                        <div className="skill-items">
                            <div className="skill-title">
                                <span className="icon-briefcase"></span><br/>
                                <h5 className="tit">Experience</h5>
                            </div>

                            <div className="item-info mb-50">
                                <h6>Senior Frontend Engineer</h6>
                                <p>Crosswise.Finance</p>
                            </div>

                            <div className="item-info mb-50">
                                <h6>FullStack Engineer</h6>
                                <p>DigitalSolutions</p>
                            </div>

                            <div className="item-info mb-50">
                                <h6>FullStack Engineer</h6>
                                <p>Smaugs NFT</p>
                            </div>

                            <div className="item-info mb-50">
                                <h6>Embedded Software Engineer</h6>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-4">
                        <div className="skill-items">
                            <div className="skill-title">
                                <span className="icon-tools"></span><br/>
                                <h5 className="tit">My Skills</h5>
                            </div>
                            {skillProg.map((item, idx) => (
                                <SkillProgress title={item.title} progress={item.current} key={idx}/>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  };
  
  export default Skills;
  
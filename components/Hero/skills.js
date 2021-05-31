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
        title: 'PHP',
        current: 0,
        progress: 95
    },
    {
        title: 'Node.js',
        current: 0,
        progress: 90
    },
    {
        title: 'D3',
        current: 0,
        progress: 90
    },
    {
        title: 'Web3',
        current: 0,
        progress: 80
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
                                <h6>Pace University</h6>
                                <p>Master of Science (M.S.) in Computer Science</p>
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
                                <h6>Software Developer</h6>
                                <p>Takeo Tech</p>
                            </div>

                            <div className="item-info mb-50">
                                <h6>Graduate Teaching Assistant</h6>
                                <p>Pace University</p>
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
  
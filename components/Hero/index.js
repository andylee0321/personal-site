import React from "react"
import Skills from "./skills"
import imgHero from "../../assets/img/hero.jpg";

const Hero = () => {
    return (
        <section className="hero section-padding">
			<div className="container mb-80">
				<div className="row">

					<div className="col-sm-4">
						<div className="hero-img">
							<img src={imgHero} alt="image" />
						</div>
					</div>

					<div className="col-sm-7 col-sm-offset-1">
						<div className="hero-item">
							<div className="tit">
								<h4>A passionate Software Developer focused on creative interaction</h4>
							</div>
							<div className="content mb-20">
								<p className="mb-20">Hi! I am Prakash, I understand human, machine and wizard language. Please take a look around!</p>
								<p>I am passionate about building excellect software that improves the lives of those around me. After completing my undergraduate degree in Bachelor in Information Management from Tribhuvan University, I moved to New York City, to pursue my master degree and start my career as a Software Developer. During my Master's degree at Pace University, I worked as a Graduate Teaching Assistant, and got a whole new exposure of the teaching methodology and learning practices. I now work as a Full Stack Developer</p>
							</div>

							<div className="social-icon">
								<a href="#0">
									<span><i className="fa fa-facebook" aria-hidden="true"></i></span>
								</a>
								<a href="https://twitter.com/prakashthakuri">
									<span><i className="fa fa-twitter" aria-hidden="true"></i></span>
								</a>
								<a href="https://www.linkedin.com/in/prakashthakuri/">
									<span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
								</a>
								<a href="https://github.com/prakashthakuri">
									<span><i className="fa fa-github" aria-hidden="true"></i></span>
								</a>
								<a href="mailto:info@prakashthakuri.com">
									<span><i className="fa fa-envelope" aria-hidden="true"></i></span>
								</a>
							</div>
						</div>
					</div>
					<div className="clear-fix"></div>
				</div>
            </div>

            <Skills></Skills>
        </section>
    );
  };
  
  export default Hero;
  
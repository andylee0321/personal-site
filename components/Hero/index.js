import React from "react"
import Skills from "./skills"
import imgHero from "../../assets/img/hero.png";

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
								<p className="mb-20">A top-tier, accomplished, self-motivated, and enthusiastic professional with wealth of experience of Full-Stack Developer, Web Developer and Embedded Software skills that have made me a successful and versatile individual encompassing a vast transferable skill set. I have acquired strong and effective Blockchain skills and the ability to build and lead teams to successfully achieve results. Seeking a position so that I can transfer my skills and experience into a new role where I can repeat my past performance. </p>
							</div>

							<div className="social-icon">
								<a href="live:volleyvolley321">
									<span><i className="fa fa-skype" aria-hidden="true"></i></span>
								</a>
								<a href="https://t.me/andylee0321">
									<span><i className="fa fa-telegram" aria-hidden="true"></i></span>
								</a>
								<a href="https://github.com/webtech0321">
									<span><i className="fa fa-github" aria-hidden="true"></i></span>
								</a>
								<a href="mailto:volleyvolley321@hotmail.com">
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
  
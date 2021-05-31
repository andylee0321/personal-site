import React from "react"

const Bottom = () => {
    return (
        <footer className="footer text-center">
			<p>© 2020 <span>Prakash Shahi Thakuri</span>. All rights reserved.</p>

			<div className="social-icon">
				<a href="#0">
					<span><i className="fa fa-facebook" aria-hidden="true"></i> </span>
				</a>
				<a href="https://twitter.com/prakashthakuri">
					<span><i className="fa fa-twitter" aria-hidden="true"></i> </span>
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
		</footer>
    );
  };
  
  export default Bottom;
  
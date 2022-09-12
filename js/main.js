// note: i suck at webdev, so this is probably not the best way to do this. i lied in my bio haha, "I'm a full-stack web developer with a passion for creating beautiful, functional websites and applications."
// l + rip bozo + ratio + redpilled

let contactButtons = [
	{
		"buttonName": "Email",
		"buttonLink": "mailto:thunder@lmfa.ooo",
		"buttonIcon": "email",
		"buttonHover": "thunder@lmfa.ooo",
	},
	{
		"buttonName": "GitHub",
		"buttonLink": "https://github.com/thunder-red-star",
		"buttonIcon": "github",
		"buttonHover": "thunder-red-star",
	},
	{
		"buttonName": "YouTube",
		"buttonLink": "https://www.youtube.com/channel/UCyouz92tCZ4JrHqVuv8Y_gQ",
		"buttonIcon": "youtube",
		"buttonHover": "ThunderRedStar",
	},
	{
		"buttonName": "Discord",
		"buttonLink": "https://discord.com/users/691009964570968144",
		"buttonIcon": "discord",
		"buttonHover": "ThunderRedStar#6904",
	}
]

let homeHTML = `
	<div class="home">
		<div class="home-content">
			<div class="home-content-text">
				<h1 class="home-content-text-bigtitle">Hi 👋</h1>
				<p class="home-content-text-title">I'm <span class="glow">William</span></p>
				<p class="home-content-text-subtitle">I'm a lot of things 😄</p>
				<p class="home-content-text-content">If you're coming from my <a href="https://thunderredstar.carrd.co/">carrd</a>, you probably want to go to the about page.</p>
				<p class="home-content-text-content">If you're a developer, or want my services, please look at my developer bio.</p>
			</div>
			</div>
		</div>
	</div>
`

let aboutHTML = `
	<div class="about">
		<div class="about-content">
			<div class="about-content-text">
				<h1 class="about-content-text-bigtitle">About Me</h1>
				<p class="about-content-text-title">I'm <span class="glow">William</span></p>
				<p class="about-content-text-subtitle">I'm a lot of things, including:</p>
				<p class="about-content-text-content">
					<ul class="about-content-text-content list">
						<li>15 years old</li>
						<li>Stuy '23</li>
						<li>INFJ</li>
						<li>an avid chiptunist (who can't actually make good chiptunes)</li>
						<li>bisexual 🏳️‍🌈</li>
					</ul>
				</p>
				<p class="about-content-text-content">You'll find me by the seventh floor "printing station" (probably using Discord on a school computer), or maybe in the senior bar (though I don't spend too much time there). I'm a high school senior so my life will be busy but I'll try to make time for you.</p>
				<p class="about-content-text-content">I'm still trying to figure out aspects of myself, so you might find me wanting to rant to you. Let me know if you're not comfortable about it.</p>
				</div>
			</div>
		</div>
	</div>
`

let devHTML = `
	<div class="dev">
		<div class="dev-content">
			<div class="dev-content-text">
				<h1 class="dev-content-text-bigtitle">Dev Bio</h1>
				<p class="dev-content-text-title">I'm <span class="glow">William</span></p>
				<p class="dev-content-text-subtitle">I'm a full-stack web developer with a passion for creating beautiful, functional websites and applications.</p>
				<p class="dev-content-text-content">I'm proficient or learning a variety of stacks, including:</p>
				<p class="dev-content-text-content">
					<ul class="dev-content-text-content list">
						<li>HTML, CSS, and JavaScript</li>
						<li>React</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>Python</li>
						<li>Java</li>
					  <li>C</li>
					  <li>MongoDB</li>
					  <li>Julia</li>
					  <li>Discord.js</li>
				  </ul>
				</p>
				<p class="dev-content-text-content">I'm very interested in machine learning, and have done quite a lot with TensorFlow and Keras.</p>
				<p class="dev-content-text-content">If you want to learn more about my projects, please check out my projects page.</p>
				</div>
			</div>
		</div>
	</div>
`

let projectsHTML = `
	<div class="projects">
		<div class="projects-content">
			<div class="projects-content-text">
				<h1 class="projects-content-text-bigtitle">Projects</h1>
				<!-- Big button linking to projects.html -->
				<a href="../projects.html" class="projects-content-text-button">View Projects</a>
			</div>
		</div>
	</div>
`

let contactHTML = `
	<div class="contact">
		<div class="contact-content">
			<div class="contact-content-text">
				<h1 class="contact-content-text-bigtitle">Contact Me</h1>
				<p class="contact-content-text-title">I'm <span class="glow">William</span></p>
				<p class="contact-content-text-subtitle">I'm always open to conversation, so feel free to contact me!</p>
				<p class="contact-content-text-content">You can contact me through any of the following:</p>
				<p class="contact-content-text-content">
					<div class="contact-list">
					  <button class="contact-button" title="thunder@lmfa.ooo" id="contact-email" onclick="window.open('mailto:thunder@lmfa.ooo')"><img src="/img/icon/email.svg" class="contact-button-icon" alt="email"/></button>
					  <button class="contact-button" title="ThunderRedStar#6904" id="contact-discord" onclick="window.open('https://discord.com/users/691009964570968144')"><img src="/img/icon/discord.svg" class="contact-button-icon" alt="discord"/></button>
					  <button class="contact-button" title="thunder-red-star" id="contact-github" onclick="window.open('https://github.com/thunder-red-star')"><img src="/img/icon/github.svg" class="contact-button-icon" alt="github"/></button>
					  <button class="contact-button" title="ThunderRedStar" id="contact-youtube" onclick="window.open('https://www.youtube.com/channel/UCyouz92tCZ4JrHqVuv8Y_gQ')"><img src="/img/icon/youtube.svg" class="contact-button-icon" alt="youtube"/></button>
					  </div>
				</p>
				<p class="contact-content-text-content">I'll probably respond within a day or two. Feel free to follow up if I don't.</p>
				</div>
			</div>
		</div>
	</div>
	
	<script>
	// Inject tippy tooltips into each contact button
	tippy('#content', {
		target: '.contact-button',
		arrow: true,
		trigger: 'mouseenter focus',
		popperOptions: {
    modifiers: [
      {
        name: 'preventOverflow',
        options: {
          padding: 20
        }
      }
    ]
  }
	})
</script>
`

let navList = ["home", "about", "dev", "projects", "contact"]

// Handle nav clicks
function handleNav(page) {
	if (page === 'home') {
		document.getElementById('content').innerHTML = homeHTML;
		document.getElementById('nav-home').classList.add('active');
		for (let i = 0; i < navList.length; i++) {
			if (navList[i] !== 'home') {
				document.getElementById('nav-' + navList[i]).classList.remove('active');
			}
		}
	} else if (page === 'about') {
		document.getElementById('content').innerHTML = aboutHTML;
		document.getElementById('nav-about').classList.add('active');
		for (let i = 0; i < navList.length; i++) {
			if (navList[i] !== 'about') {
				document.getElementById('nav-' + navList[i]).classList.remove('active');
			}
		}
	} else if (page === 'dev') {
		document.getElementById('content').innerHTML = devHTML;
		document.getElementById('nav-dev').classList.add('active');
		for (let i = 0; i < navList.length; i++) {
			if (navList[i] !== 'dev') {
				document.getElementById('nav-' + navList[i]).classList.remove('active');
			}
		}
	} else if (page === 'projects') {
		document.getElementById('content').innerHTML = projectsHTML;
		document.getElementById('nav-projects').classList.add('active');
		for (let i = 0; i < navList.length; i++) {
			if (navList[i] !== 'projects') {
				document.getElementById('nav-' + navList[i]).classList.remove('active');
			}
		}
	} else if (page === 'contact') {
		document.getElementById('content').innerHTML = contactHTML;
		document.getElementById('nav-contact').classList.add('active');
		for (let i = 0; i < navList.length; i++) {
			if (navList[i] !== 'contact') {
				document.getElementById('nav-' + navList[i]).classList.remove('active');
			}
		}
	}
}

handleNav('home');
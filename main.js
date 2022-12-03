function createNavBar(page){
    let navbar = document.getElementById("navbar");
    if (navbar){
        let html = 
            `
            <ul class="horizontal main-nav-list">
                <li class="nav-tab ${page === "home" ? "selected-tab": ""}">
                    <a href="index.html" tab_index = "0" class="nav-link" aria-label="home page"> 
                        Home
                    </a>
                </li> 
                <li class="nav-tab ${page === "project1" ? "selected-tab": ""}">
                    <a href="project1.html" class="nav-link" aria-label="Truss project page"> 
                        Truss Project
                    </a>
                </li> 
                <li class="nav-tab ${page === "project2" ? "selected-tab": ""}">
                    <a href="project2.html" class="nav-link" aria-label="ClockIn project page"> 
                        ClockIn Project
                    </a>
                </li> 
                <li class="nav-tab ${page === "resume" ? "selected-tab": ""}">
                    <a href="resume.html" class="nav-link" aria-label="resume page"> 
                        Resume
                    </a> 
                </li>
                <li class="nav-tab ${page === "bio" ? "selected-tab": ""}">
                    <a href="biopage.html" class="nav-link" aria-label="bio page">
                        Bio
                    </a> 
                </li>
                <li class="nav-tab ${page === "contact" ? "selected-tab": ""}">
                    <a href="contact.html" class="nav-link" aria-label="contact me page">
                        Contact
                    </a> 
                </li>
            </ul>`

        navbar.innerHTML = html;
    }
  }

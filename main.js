function createNavBar(page){
    let navbar = document.getElementById("navbar");
    if (navbar){
        let html = 
            `
            <ul class="horizontal main-nav-list">
                <li class="nav-tab ${page === "home" ? "selected-tab": ""}">
                    <a href="index.html" tab_index = "0" class="nav-link"> 
                        Home
                    </a>
                </li> 
                <li class="nav-tab ${page === "project1" ? "selected-tab": ""}">
                    <a href="project1.html" class="nav-link"> 
                        Truss Project
                    </a>
                </li> 
                <li class="nav-tab ${page === "project2" ? "selected-tab": ""}">
                    <a href="project2.html" class="nav-link"> 
                        ClockIn Project
                    </a>
                </li> 
                <li class="nav-tab ${page === "resume" ? "selected-tab": ""}">
                    <a href="resume.html" class="nav-link"> 
                        Resume
                    </a> 
                </li>
                <li class="nav-tab ${page === "bio" ? "selected-tab": ""}">
                    <a href="biopage.html" class="nav-link">
                        Bio
                    </a> 
                </li>
                <li class="nav-tab ${page === "contact" ? "selected-tab": ""}">
                    <a href="contact.html" class="nav-link">
                        Contact
                    </a> 
                </li>
            </ul>`

        navbar.innerHTML = html;
    }
  }


//   var nodeList = document.getElementsByClassName('has-submenu');
//   console.log(nodeList[0])
//   nodeList = [...nodeList];
// console.log(nodeList[0])
//   var menuItems = document.getElementsByClassName('has-submenu');
//   console.log([].slice.call(menuItems));
//   Array.prototype.forEach.call(menuItems, function(el, i){
//         console.log(el)
        //  el.querySelector('a').addEventListener("click", function(event){
        //        if (this.parentNode.className == "has-submenu") {
        //              this.parentNode.className = "has-submenu open";
        //              this.setAttribute('aria-expanded', "true");
        //        } else {
        //              this.parentNode.className = "has-submenu";
        //              this.setAttribute('aria-expanded', "false");
        //        }
        //        event.preventDefault();
        //        return false;
        //  });
//   });


//   <li aria-haspopup="true" class="has-submenu dropdown nav-tab ${page === "project" ? "selected-tab": ""}">
//                     <a href="" tab_index = "1" aria-expanded="false" class="nav-link has-submenu-link">
//                         Projects
//                     </a>
//                     <ul class="dropdown-content">
//                         <li class="tab-hidden"><a tab_index = "2" class="links-hidden" href="project1.html">Project 1</a></li>
//                         <li class="tab-hidden"><a tab_index = "3" class="links-hidden" href="project2.html">Project 2</a></li>
//                     </ul>
//                 </li>
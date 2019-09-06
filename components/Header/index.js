// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    
    // Create Elements
    let header = document.createElement("div");
    let date = document.createElement("span");
    let title = document.createElement("h1");
    let temp = document.createElement("span");

    // Add Classes
    header.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");

    // Assign children to Parent Elements & add it to .header-container
    let headerContainer = document.querySelector(".header-container");
    headerContainer.appendChild(header);
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);
    
    // Static Data given to us
    date.textContent = `SMARCH 28, 2019`; // This typo is killing me inside!
    title.textContent = "Lambda Times";
    temp.textContent = "98°";
  }
  
  Header(); 
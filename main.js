let creatEl = (el) => document.createElement(`${el}`);

let header = creatEl("header"),
  headerContainer = creatEl("div"),
  logo = creatEl("h1"),
  menu = creatEl("ul"),
  content = creatEl("div"),
  footer = creatEl("footer"),
  footerSpan = creatEl("span"),
  scrollBtn = creatEl("div");

header.className = "website-header";
headerContainer.className = "container";
headerContainer.classList.add("header-container");
logo.className = "logo";
menu.className = "menu";
content.className = "content";
footer.className = "footer";
footerSpan.innerHTML = `Designed by &copy; HaMiiD-2024`;
scrollBtn.innerHTML = "Top";

header.append(headerContainer);
headerContainer.append(logo, menu);
footer.append(footerSpan);
document.body.append(header, content, footer, scrollBtn);

for (let i = 1; i <= 16; i++) {
  if (i < 5) {
    let lists = creatEl("li");
    let links = creatEl("a");
    lists.className = "list";
    links.className = "link";
    menu.append(lists);
    lists.append(links);
    let linksText = ["Home", "about", "Products", "Contact"];
    links.innerHTML = `${linksText[i - 1]}`;
    links.setAttribute("href", `${linksText[i - 1]}`);
    lists.style.cssText = " display:inline-block;margin-left:1.5rem;";
    links.style.cssText =
      "color:#fff;font-size:1.2rem;text-decoration: none;transition:0.4s ease;";
  }
  let pro = creatEl("div"),
    proTitle = creatEl("h3"),
    proDisc = creatEl("p"),
    puyBtn = creatEl("button");

  pro.className = "product";
  proTitle.className = "title";
  proDisc.className = "discription";
  puyBtn.className = "btn";
  proTitle.innerHTML = `Product - ${i}`;
  proDisc.innerHTML = ` This is Product "${i}" Discription`;
  puyBtn.innerHTML = "BUY NOW";
  pro.append(proTitle, proDisc, puyBtn);
  content.append(pro);
  pro.style.cssText = `width:22%;height:250px;background:linear-gradient(100deg,#09999f,#fff,#09999f);
  display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;
  box-shadow: 0 0 15px #333;border-radius:10px;`;
  proTitle.style.cssText = `font-size:1.75rem;font-weight:bold;color:#04787c;`;
  proDisc.style.cssText = `color:#04787c;font-weight:bold;`;
  puyBtn.style.cssText = `width:60%;height:36px;outline:none;border:none;
  border-radius:4px;background:linear-gradient(100deg,#04787c,#055,#04787c);
  color:#fff;box-shadow:0 0 5px #333;cursor:pointer;`;
}
document.body.style.cssText =
  "margin:0;padding:0;box-sizing:border-box;background-color:#5dacaf;";
// Styling header
header.style.cssText = "width:100%;background-color:#09999f;";
headerContainer.style.cssText = `width:75%;padding:0;margin:auto;
  box-sizing:border-box;display:flex;align-items:center;
  justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.5)`;
logo.innerText = "Elzero";
logo.style.cssText = " font-size: 2rem;color:#fff;user-select:none;";

// stylind content box
content.style.cssText = `width:75%;padding:1.5rem 0;margin:auto;margin-top:2rem;box-sizing:border-box;
  display:flex;align-items:center;justify-content:space-between; flex-wrap:wrap;gap:2rem;`;
// styling footer

footer.style.cssText = `width:100%;height:50px;background-color:#09999f;display:flex;
align-items:center;justify-content:center;border-top:1px solid rgba(255,255,255,0.5);`;
footerSpan.style.cssText = `color:#fff;text-shadow:1px 0 #333,-1px 0 #333, 0 1px #333, 0 -1px #333; font-size:18px;user-select:none;`;

scrollBtn.style.cssText = `position:fixed;bottom:25px;right: 30px;width: 40px;
height: 40px;border-radius: 50%;background-color:#015d5e;color:#fff;display:flex;align-items:center;
justify-content:center;cursor:pointer;border:1px solid #fff;opacity:0;transition:0.4s ease;`;


//  hover Effect on links
let listLinks = document.querySelectorAll(".link");
listLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    listLinks.forEach((a) => {
      a.style.color = "#fff";
    });
    e.target.style.color = "#015859";
  });
});
listLinks.forEach((link) => {
  link.addEventListener("mouseout", () => {
    link.style.color = "#fff";
  });
});
// scroll to top
window.onscroll = () => {
  scrollY > 300 ? (scrollBtn.style.opacity = 1) : (scrollBtn.style.opacity = 0);
};
scrollBtn.onclick = () => {
  scroll({
    top: 0,
    behavior: "smooth",
  });
};

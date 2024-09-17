function addNavArrow() {
  const navArrow = `
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path class='arrow-nav-icon' fill-rule="evenodd" clip-rule="evenodd" d="M17.293 8.793a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 0 1 1.352-1.474l5.294 4.853z" fill="#848895"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .5h24v24H0z"/></clipPath></defs></svg>
  `;

  $('.navigation__nav-item').append(navArrow);
}

addNavArrow();

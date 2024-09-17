function addNavArrow() {
  const navArrow = `
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path class='arrow-nav-icon' fill-rule="evenodd" clip-rule="evenodd" d="M17.293 8.793a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 0 1 1.352-1.474l5.294 4.853z" fill="#848895"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .5h24v24H0z"/></clipPath></defs></svg>
  `;

  $('.navigation__nav-item').append(navArrow);
}

function addNavButtonIcon() {
  const arrowDeg45 = `
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.12 17.5 10-10m-10 0h10v10" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
  `;

  const instruction = `
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 6.843A7.95 7.95 0 0 0 12 4.5a7.95 7.95 0 0 0-5.657 2.343A7.95 7.95 0 0 0 4 12.5c0 2.137.832 4.146 2.343 5.657A7.95 7.95 0 0 0 12 20.5a7.95 7.95 0 0 0 5.657-2.343A7.95 7.95 0 0 0 20 12.5a7.95 7.95 0 0 0-2.343-5.657M12 19.438A6.946 6.946 0 0 1 5.062 12.5 6.946 6.946 0 0 1 12 5.562a6.946 6.946 0 0 1 6.938 6.938A6.946 6.946 0 0 1 12 19.438m.531-8.576v5.604a.531.531 0 1 1-1.062 0v-5.073h-.745a.531.531 0 0 1 0-1.062H12a.53.53 0 0 1 .531.53m0-2.328v.255a.531.531 0 1 1-1.062 0v-.255a.531.531 0 1 1 1.062 0" fill="#fff"/></svg>
  `;

  $('#navigation ul li button#howBtn').append(arrowDeg45);
  $('#navigation ul li button#instructionBtn').append(instruction);
}

function addIndicatorToNavItem() {
  $(document).ready(function () {
    const currentPathname = window.location.pathname;

    $('#navigation ul li a.navigation__nav-item').each(function () {
      const linkHref = $(this).attr('href');
      console.log(linkHref);
      if (linkHref === currentPathname) {
        $(this).addClass('navigation__nav-item_link_active');
        return false;
      }
    });
  });
}

addNavArrow();
addNavButtonIcon();
addIndicatorToNavItem();

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

function addSocialIconsToFooter() {
  const youTube = `
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#848895" d="M0 0h26v16H0z"/><path d="M20.533 4.867c0-.134-.2-1.2-.666-1.667-.6-.667-1.267-.733-1.6-.733H18.2c-2.067-.134-5.133-.134-5.2-.134 0 0-3.133 0-5.2.134h-.067c-.333 0-1 .066-1.6.733-.466.533-.666 1.6-.666 1.733 0 .067-.134 1.267-.134 2.534V8.6c0 1.267.134 2.467.134 2.533 0 .134.2 1.2.666 1.667.534.6 1.2.667 1.6.733h.2c1.2.134 4.867.134 5 .134 0 0 3.134 0 5.2-.134h.067c.333-.066 1-.133 1.6-.733.467-.533.667-1.6.667-1.733 0-.067.133-1.267.133-2.534V7.4c.067-1.2-.067-2.467-.067-2.533M15.6 8.133l-4 2.134c-.067 0-.067.066-.133.066-.067 0-.134 0-.134-.066-.066-.067-.133-.134-.133-.267V5.667c0-.134.067-.2.133-.267.067-.067.2-.067.334 0l4 2.133c.133.067.2.134.2.267s-.134.267-.267.333" fill="#000"/></svg>
  `;

  const twitter = `
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#848895" d="M0 0h26v16H0z"/><path d="M19.912 4.252a5.7 5.7 0 0 1-1.639.449 2.86 2.86 0 0 0 1.255-1.579 5.7 5.7 0 0 1-1.812.693 2.85 2.85 0 0 0-2.082-.9 2.852 2.852 0 0 0-2.778 3.502 8.1 8.1 0 0 1-5.88-2.98c-.253.435-.386.93-.385 1.434 0 .989.503 1.862 1.268 2.374a2.84 2.84 0 0 1-1.292-.357v.036c0 1.381.983 2.534 2.288 2.797-.42.113-.86.13-1.288.048a2.86 2.86 0 0 0 2.665 1.981 5.72 5.72 0 0 1-4.223 1.181 8.07 8.07 0 0 0 4.372 1.282c5.247 0 8.116-4.347 8.116-8.116q0-.186-.008-.37a5.8 5.8 0 0 0 1.423-1.475" fill="#000"/></svg>
  `;

  const discord = `
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="26" height="16" fill="#848895"/>
<path d="M10.3588 2.4458C9.8505 2.4458 8.31792 3.06753 8.04296 3.19178C7.768 3.31603 7.46281 3.7039 7.11651 4.34405C6.76974 4.9842 6.49148 5.73254 6.03936 6.83332C5.58771 7.93409 5.48235 10.0563 5.49747 10.704C5.51259 11.3517 5.58676 11.8577 6.25054 12.2408C6.91384 12.6235 7.5006 13.0241 8.11808 13.2651C8.73602 13.506 9.15744 13.6794 9.44373 13.4384C9.73003 13.1975 9.91853 12.7756 9.91853 12.7756C9.91853 12.7756 10.1897 12.3991 9.67759 12.1733C9.16547 11.947 8.90941 11.7887 8.93161 11.5553C8.95429 11.3219 8.99161 11.1939 9.11964 11.2241C9.24767 11.2544 9.54956 11.7963 10.7094 12.0448C11.8692 12.2933 12.9998 12.2559 12.9998 12.2559C12.9998 12.2559 14.1308 12.2937 15.2906 12.0448C16.4504 11.7963 16.7519 11.2544 16.8799 11.2241C17.0079 11.1939 17.0452 11.3219 17.0679 11.5548C17.0906 11.7887 16.8345 11.947 16.3224 12.1733C15.8103 12.3991 16.0815 12.7756 16.0815 12.7756C16.0815 12.7756 16.27 13.197 16.5563 13.4384C16.8421 13.6794 17.264 13.506 17.8814 13.2651C18.4989 13.0241 19.0862 12.624 19.7495 12.2408C20.4132 11.8577 20.4874 11.3517 20.5025 10.704C20.5176 10.0567 20.4123 7.93409 19.9602 6.83332C19.5085 5.73254 19.2298 4.9842 18.883 4.34405C18.5372 3.7039 18.2315 3.31603 17.957 3.19131C17.6821 3.06753 16.149 2.4458 15.6407 2.4458C15.1323 2.4458 14.9821 2.80013 14.9821 2.80013L14.8049 3.19178C14.8049 3.19178 13.6144 2.96548 13.0078 2.96501C12.4012 2.96501 11.1951 3.19178 11.1951 3.19178L11.0179 2.79966C11.0179 2.79966 10.8677 2.4458 10.3588 2.4458ZM10.4141 7.1456H10.433C11.1743 7.1456 11.7747 7.79425 11.7747 8.59409C11.7747 9.39439 11.1743 10.0426 10.433 10.0426C9.69176 10.0426 9.0913 9.39439 9.0913 8.59409C9.09082 7.80181 9.68042 7.15646 10.4141 7.1456ZM15.567 7.1456H15.5859C16.3196 7.15646 16.9087 7.80228 16.9087 8.59409C16.9087 9.39439 16.3082 10.0426 15.567 10.0426C14.8253 10.0426 14.2253 9.39439 14.2253 8.59409C14.2253 7.79425 14.8253 7.1456 15.567 7.1456Z" fill="black"/>
</svg>
  `;

  const reddit = `
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1101_149)">
<rect width="26" height="16" rx="8" fill="white"/>
<rect width="26" height="16" fill="#848895"/>
<path d="M19.9695 8.02704C19.969 7.60133 19.7997 7.19319 19.4987 6.89217C19.1977 6.59115 18.7895 6.42184 18.3638 6.42139C17.974 6.42093 17.5975 6.5634 17.3056 6.82182C16.2437 6.14231 14.8269 5.71423 13.2641 5.66795L14.2205 2.39741L16.5683 2.83367C16.5683 2.85286 16.5643 2.87092 16.5654 2.89011C16.5794 3.15874 16.6994 3.41085 16.8991 3.59114C17.0987 3.77143 17.3617 3.86517 17.6304 3.8518C17.899 3.83771 18.151 3.71769 18.3313 3.51805C18.5115 3.31841 18.6052 3.05545 18.5918 2.78683C18.5778 2.51819 18.4578 2.26608 18.2582 2.08579C18.0585 1.90551 17.7955 1.81176 17.5268 1.82513C17.3557 1.83424 17.1897 1.88666 17.0443 1.97748C16.8989 2.06829 16.779 2.19453 16.6958 2.34436L16.695 2.34407L13.8658 1.81836L12.739 5.66739C11.1723 5.70887 9.7509 6.13469 8.68452 6.81279C8.39388 6.55988 8.02146 6.42084 7.63619 6.42139C7.21051 6.42192 6.80241 6.59125 6.50141 6.89225C6.2004 7.19326 6.03107 7.60135 6.03055 8.02704C6.03055 8.57448 6.31245 9.07959 6.76903 9.3742C6.74049 9.53537 6.72586 9.6987 6.72529 9.86238C6.72529 12.1797 9.53475 14.0653 12.9881 14.0653C16.4416 14.0653 19.2504 12.1797 19.2504 9.8621C19.2504 9.70182 19.2358 9.54379 19.2095 9.38802C19.4413 9.24435 19.6327 9.044 19.7656 8.80589C19.8985 8.56777 19.9688 8.29973 19.9695 8.02704ZM10.0116 9.11966C10.0117 8.99009 10.0372 8.8618 10.0869 8.74211C10.1365 8.62241 10.2092 8.51366 10.3008 8.42207C10.3925 8.33047 10.5013 8.25783 10.621 8.20828C10.7407 8.15873 10.869 8.13324 10.9986 8.13328C11.1282 8.13332 11.2565 8.15887 11.3761 8.20849C11.4958 8.25811 11.6046 8.33082 11.6962 8.42247C11.7878 8.51411 11.8604 8.6229 11.91 8.74263C11.9595 8.86235 11.985 8.99066 11.985 9.12023C11.9849 9.38191 11.8809 9.63284 11.6958 9.81783C11.5107 10.0028 11.2597 10.1067 10.998 10.1066C10.7363 10.1065 10.4854 10.0025 10.3004 9.81743C10.1154 9.63234 10.0116 9.38135 10.0116 9.11966ZM15.3139 11.7886C15.2846 11.8191 14.5766 12.5395 12.9766 12.5395C11.3681 12.5395 10.7247 11.8092 10.6985 11.7781C10.6578 11.7272 10.6384 11.6624 10.6444 11.5975C10.6505 11.5326 10.6814 11.4725 10.7307 11.4299C10.7801 11.3872 10.844 11.3654 10.9091 11.3688C10.9742 11.3723 11.0355 11.4009 11.08 11.4486C11.0947 11.4644 11.6314 12.0352 12.9763 12.0352C14.3449 12.0352 14.9448 11.444 14.951 11.4384C14.9984 11.3951 15.0606 11.3714 15.1248 11.3723C15.189 11.3731 15.2505 11.3984 15.2968 11.443C15.343 11.4876 15.3705 11.5481 15.3737 11.6122C15.3769 11.6764 15.3555 11.7396 15.3139 11.7886ZM15.1178 10.1065C14.9883 10.1065 14.86 10.0811 14.7403 10.0315C14.6205 9.98201 14.5118 9.90939 14.4201 9.81783C14.3285 9.72626 14.2558 9.61753 14.2061 9.49787C14.1565 9.3782 14.1309 9.24992 14.1309 9.12037C14.1308 8.99082 14.1563 8.86252 14.2058 8.74281C14.2553 8.6231 14.3279 8.51431 14.4195 8.42267C14.5111 8.33102 14.6198 8.25831 14.7395 8.20868C14.8591 8.15905 14.9874 8.13348 15.117 8.13342C15.3786 8.13331 15.6296 8.23714 15.8147 8.42207C15.9998 8.607 16.1038 8.85788 16.1039 9.11952C16.104 9.38117 16.0002 9.63214 15.8153 9.81723C15.6303 10.0023 15.3795 10.1064 15.1178 10.1065Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1101_149">
<rect width="26" height="16" rx="8" fill="white"/>
</clipPath>
</defs>
</svg>
  `;

  const github = `
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="26" height="16" fill="#848895"/>
<g clip-path="url(#clip0_1101_153)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 0C8.58233 0 5 3.67233 5 8.20233C5 11.8267 7.29233 14.9013 10.471 15.9857C10.871 16.0617 11.0177 15.808 11.0177 15.5913C11.0177 15.3957 11.01 14.7497 11.0067 14.0643C8.781 14.5603 8.31133 13.0963 8.31133 13.0963C7.94733 12.1483 7.423 11.8963 7.423 11.8963C6.69733 11.387 7.478 11.3977 7.478 11.3977C8.28133 11.4553 8.70433 12.2427 8.70433 12.2427C9.41767 13.4967 10.5757 13.1343 11.0323 12.9247C11.104 12.3947 11.3113 12.0327 11.54 11.828C9.76333 11.6203 7.89533 10.917 7.89533 7.774C7.89533 6.87867 8.20767 6.14667 8.71967 5.57233C8.63633 5.36567 8.36267 4.53133 8.797 3.40167C8.797 3.40167 9.469 3.18133 10.9977 4.24233C11.6357 4.06067 12.3203 3.96967 13 3.96633C13.68 3.96967 14.365 4.06067 15.0043 4.24233C16.531 3.18133 17.202 3.40167 17.202 3.40167C17.6373 4.53167 17.3633 5.36567 17.2803 5.57233C17.7937 6.14667 18.1037 6.87867 18.1037 7.774C18.1037 10.9247 16.2323 11.6183 14.4507 11.8213C14.7377 12.076 14.9933 12.575 14.9933 13.3403C14.9933 14.4377 14.9843 15.321 14.9843 15.5913C14.9843 15.8097 15.1283 16.0653 15.5337 15.9847C18.7107 14.899 21 11.8253 21 8.20233C21 3.67233 17.4183 0 13 0Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.03 11.7771C8.01233 11.8181 7.95 11.8301 7.893 11.8021C7.835 11.7754 7.80233 11.7197 7.821 11.6787C7.83833 11.6367 7.901 11.6254 7.959 11.6531C8.017 11.6801 8.05 11.7364 8.03 11.7771ZM8.354 12.1477C8.316 12.1837 8.24133 12.1671 8.19067 12.1097C8.13833 12.0524 8.12867 11.9761 8.16733 11.9394C8.20667 11.9027 8.279 11.9201 8.33133 11.9771C8.38367 12.0351 8.394 12.1111 8.354 12.1477ZM8.66933 12.6201C8.62067 12.6551 8.54033 12.6224 8.49067 12.5494C8.44167 12.4761 8.44167 12.3887 8.492 12.3537C8.54167 12.3187 8.62033 12.3504 8.67067 12.4227C8.71967 12.4967 8.71967 12.5844 8.66933 12.6201ZM9.10167 13.0767C9.05767 13.1261 8.96433 13.1127 8.896 13.0451C8.826 12.9791 8.80667 12.8851 8.85067 12.8354C8.895 12.7857 8.989 12.7997 9.05767 12.8667C9.12733 12.9327 9.14833 13.0274 9.10167 13.0767ZM9.69767 13.3414C9.67833 13.4057 9.58833 13.4347 9.49767 13.4077C9.40767 13.3794 9.34833 13.3044 9.36633 13.2394C9.38533 13.1747 9.47567 13.1441 9.567 13.1734C9.657 13.2014 9.71667 13.2761 9.69767 13.3414ZM10.3527 13.3907C10.3547 13.4584 10.278 13.5141 10.1827 13.5154C10.087 13.5177 10.0097 13.4631 10.0087 13.3964C10.0087 13.3281 10.084 13.2727 10.1793 13.2711C10.2747 13.2691 10.3527 13.3234 10.3527 13.3907ZM10.9617 13.2844C10.973 13.3504 10.907 13.4181 10.8127 13.4361C10.7197 13.4534 10.6337 13.4127 10.622 13.3474C10.6103 13.2797 10.6777 13.2117 10.7703 13.1941C10.865 13.1774 10.9497 13.2177 10.9617 13.2844Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1101_153">
<rect width="16" height="16" fill="white" transform="translate(5)"/>
</clipPath>
</defs>
</svg>
  `;

  const telegram = `
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="26" height="16" rx="8" fill="white"/>
<rect width="26" height="16" fill="#848895"/>
<path d="M20.1465 3.06977L17.9772 13.3001C17.8136 14.0221 17.3868 14.2018 16.7802 13.8617L13.475 11.426L11.8802 12.96C11.7037 13.1364 11.5561 13.2841 11.2159 13.2841L11.4534 9.91777L17.5793 4.38224C17.8457 4.1448 17.5216 4.01321 17.1654 4.25067L9.59219 9.01924L6.33184 7.9988C5.62265 7.77736 5.60984 7.28958 6.47944 6.94946L19.232 2.03649C19.8224 1.81508 20.3391 2.16802 20.1465 3.06977Z" fill="black"/>
</svg>
  `;

  $('.footer-social-icons')
    .append(youTube)
    .append(twitter)
    .append(discord)
    .append(reddit)
    .append(github)
    .append(telegram);
}

function modifyHeaderDueToDevice() {
  const burgerButton = `
    <button id='burgerButton' class='burger-button flex-xCenter-yCenter burger-button_visibility_hidden'>
    </button>
  `;

  const openBurgerMenu = `
    <svg id='openBurgerMenu' width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44" height="40" rx="10" fill="#fff" fill-opacity=".15"/><rect x=".5" y=".5" width="43" height="39" rx="9.5" stroke="#fff" stroke-opacity=".15"/><path d="M10 10h24M17 20h17M10 30h24" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
  `;

  const closeBurgerMenu = `
    <svg id='closeBurgerMenu' width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="40" rx="10" fill="white" fill-opacity="0.15"/>
      <rect x="0.5" y="0.5" width="43" height="39" rx="9.5" stroke="white" stroke-opacity="0.15"/>
      <path d="M14 28.0001L30.9706 11.0296" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M14 11.0002L30.9706 27.9708" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `;

  $('#header-container').append(burgerButton);
  $('#burgerButton').append(openBurgerMenu);

  const updateBurgerVisibility = () => {
    const width = document.documentElement.clientWidth;
    if (width < 1024) {
      $('#burgerButton')
        .removeClass('burger-button_visibility_hidden')
        .addClass('burger-button_visibility_visible');
    } else {
      $('#burgerButton')
        .removeClass('burger-button_visibility_visible')
        .addClass('burger-button_visibility_hidden');

      $('#navigation').removeClass('active');
    }
  };

  $(document).ready(() => {
    updateBurgerVisibility();

    $('#burgerButton').on('click', () => {
      $('#navigation').toggleClass('active');
      const isActive = $('#navigation').hasClass('active');

      if (isActive) {
        $('#burgerButton').empty().append(closeBurgerMenu);
      } else {
        $('#burgerButton').empty().append(openBurgerMenu);
      }
    });
  });

  window.addEventListener('resize', updateBurgerVisibility);
}

addNavArrow();
addNavButtonIcon();
addIndicatorToNavItem();
modifyHeaderDueToDevice();
addSocialIconsToFooter();

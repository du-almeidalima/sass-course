const LINK_ACTIVE_CLASS = 'sidebar__item--active';

/**
 * @type {NodeListOf<HTMLAnchorElement>}
 */
const links = document.querySelectorAll('.sidebar__item')

/**
 * @param {HTMLAnchorElement} clickedLink
 * @param {NodeListOf<HTMLAnchorElement>} allLinks
 */
const handleLinkClick = (clickedLink, allLinks) => {
  allLinks.forEach(l => l.classList.remove(LINK_ACTIVE_CLASS))
  clickedLink.classList.add(LINK_ACTIVE_CLASS);
}

links.forEach(l => l.addEventListener('click', (e) => handleLinkClick(e.currentTarget, links)))

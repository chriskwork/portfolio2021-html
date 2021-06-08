const tabContainer = document.querySelector('#portfolio-tab-container')
const displayContainer = document.querySelector('#portfolio-display-container')

// uiData, webData, editData from 'portfolio-data.js'

// init func. (default: ui design)
function init() {
  return getData(uiData)
}

init()

// tab click event
tabContainer.addEventListener('click', (e) => {
  const tab = e.target.getAttribute('data-tab')

  const tags = tabContainer.querySelectorAll('.tab-item')

  function active() {
    tags.forEach((tag) => {
      tag.classList.remove('active')
    })
    e.target.classList.add('active')
  }

  if (tab != null) {
    if (tab === 'ui') {
      active()
      getData(uiData)
    } else if (tab === 'web') {
      active()
      getData(webData)
    } else {
      active()
      getData(editData)
    }
  }
})

// show portfolio gallary cards
function getData(tag) {
  displayContainer.innerHTML = ''

  return tag.map((item, i) => {
    displayContainer.innerHTML += `
          <div class="portfolio-card" style="animation: fadeIn ${i + 0.25}s">
          <div class="portfolio-card-info">
            <div class="portfolio-card-info-title">
              <p>${item.title}</p>
              <a href=${item.link} title="Demo" target='_blank'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  ></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <p class="portfolio-card-info-subtitle">
              ${item.subtitle}
            </p>

            <p class="portfolio-card-info-tool">
              ${item.tools}
            </p>
          </div>

          <img
            class="portfolio-card-img"
            src=${item.img}
            alt="portfolio image"
          />
        </div>
      `
  })
}

const cards = document.querySelectorAll('.mushroom-guide .card')
const seasonalFilter = document.querySelector('#season')
const edibleFilter = document.querySelector('#edible')
const noResultsMessage = document.querySelector('.no-matches')

const currentFilters = {
  season: 'all',
  edible: 'all',
}

seasonalFilter.addEventListener('change', updateFilter)
edibleFilter.addEventListener('change', updateFilter)

function updateFilter(event) {
  const filterType = event.target.name
  currentFilters[filterType] = event.target.value
  filterCards()
}

function filterCards() {
  let hasMatches = false

  cards.forEach((card) => {
    const season = card.querySelector('[data-season]').dataset.season
    const edible = card.querySelector('[data-edible]').dataset.edible

    const matchesSeason = currentFilters.season === season
    const matchesEdible = currentFilters.edible === edible

    if (
      (matchesEdible || currentFilters.edible === 'all') &&
      (matchesSeason || currentFilters.season === 'all')
    ) {
      card.hidden = false
      hasMatches = true
    } else {
      card.hidden = true
    }

    noResultsMessage.hidden = hasMatches
  })
}

function enableFiltering() {
  seasonalFilter.hidden = false
  edibleFilter.hidden = false
}

enableFiltering()

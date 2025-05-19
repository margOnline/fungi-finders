const mushrooms = [
  {
    'name': 'Chanterelle',
    'edible': 'edible',
    'season': 'summer',
    'description': 'Golden-yellow, funnel-shaped mushroom with false gills',
    'notesTitle': 'Important notes',
    'notes': 'Has toxic look-alikes - learn proper identification',
  },
  {
    'name': 'Morel',
    'edible': 'toxic',
    'season': 'spring',
    'description': 'Distinctive honeycomb-like cap structure',
    'notesTitle': 'Important notes',
    'notes': 'Must be cooked before eating',
  },
  {
    'name': 'Chicken of the Woods',
    'edible': 'edible',
    'season': 'summer',
    'description': 'Bright orange bracket fungus with yellow edges',
    'notesTitle': 'Important notes',
    'notes': 'Avoid if growing on certain tree species',
  },
  {
    'name': 'Death Cap',
    'edible': 'toxic',
    'season': 'summer',
    'description': 'Pale green to white cap with white gills',
    'notesTitle': 'Important notes',
    'notes': 'Extremely toxic - study for safety awareness',
  },
  {
    'name': "Lion's Mane",
    'edible': 'edible',
    'season': 'fall',
    'description': "White, shaggy appearance like a lion's mane",
    'notesTitle': 'Safety warning',
    'notes': ' No toxic look-alikes',
  },
  {
    'name': 'Oyster Mushroom',
    'edible': 'edible',
    'season': 'fall',
    'description': 'Fan-shaped caps growing in clusters',
    'notesTitle': 'Safety warning',
    'notes': ' Great beginner mushroom, few look-alikes',
  },
  {
    'name': 'Destroying Angel',
    'edible': 'toxic',
    'season': 'fall',
    'description': 'Pure white mushroom with a sack-like base',
    'notesTitle': 'Safety warning',
    'notes': 'Deadly toxic - study for safety awareness',
  },
  {
    'name': 'King Bolete',
    'edible': 'edible',
    'season': 'summer',
    'description': 'Large brown cap with thick stem',
    'notesTitle': 'Safety warning',
    'notes': 'Learn to distinguish from similar species',
  },
  {
    'name': 'Shaggy Mane',
    'edible': 'edible',
    'season': 'fall',
    'description': 'Golden-yellow, funnel-shaped mushroom with shaggy scales',
    'notesTitle': 'Safety warning',
    'notes': 'Must be harvested and eaten quickly',
  },
  {
    'name': 'Maitake',
    'edible': 'edible',
    'season': 'fall',
    'description': 'Large, feathery clusters with overlapping gray-brown caps',
    'notesTitle': 'Safety warning',
    'notes': 'Also known as Hen of the Woods - no toxic look-alikes',
  },
  {
    'name': 'False Morel',
    'edible': 'toxic',
    'season': 'spring',
    'description': 'Brain-like, reddish-brown cap with irregular shape',
    'notesTitle': 'Safety warning',
    'notes': 'Highly toxic - often confused with true morels',
  },
  {
    'name': 'Matsutake',
    'edible': 'edible',
    'season': 'fall',
    'description':
      'White to brown cap with thick stem and distinct spicy aroma',
    'notesTitle': 'Safety warning',
    'notes': 'Verify identification - has toxic look-alikes',
  },
]
const mushroomFilters = ['edible', 'season']

function createMushroomCardElement(data, cardId) {
  // create the markup for the mushroom card
  const mushroomCardElement = document.createElement('div')
  mushroomCardElement.classList.add('card')
  mushroomCardElement.style.viewTransitionName = `mushroom-card-${cardId}`

  const cardHeaderElement = document.createElement('h3')
  cardHeaderElement.classList.add('card__title')
  cardHeaderElement.textContent = data.name

  const cardFiltersListElement = document.createElement('ul')
  cardFiltersListElement.classList.add('tag-list')
  cardFiltersListElement.setAttribute('role', 'list')
  mushroomFilters
    .map((filter) => {
      const listOption = document.createElement('li')
      listOption.setAttribute(`data-${filter}`, data[filter])
      listOption.textContent = capitalize(data[filter])
      return listOption
    })
    .forEach((listOption) => cardFiltersListElement.appendChild(listOption))

  const cardDescriptionElement = document.createElement('p')
  cardDescriptionElement.textContent = data.description

  const cardNoteElement = document.createElement('div')
  cardNoteElement.classList.add('card__note')
  const noteTitleElement = document.createElement('strong')
  noteTitleElement.textContent = `${data.notesTitle}: `
  const noteElement = document.createElement('span')
  noteElement.textContent = data.notes
  cardNoteElement.appendChild(noteTitleElement)
  cardNoteElement.appendChild(noteElement)

  Array.from([
    cardHeaderElement,
    cardFiltersListElement,
    cardDescriptionElement,
    cardNoteElement,
  ]).forEach((elem) => mushroomCardElement.appendChild(elem))

  return mushroomCardElement
}

function renderMushroomCards(data) {
  const mushroomsContainer = document.querySelector('#mushrooms-grid')
  mushrooms.forEach((mushroom, index) => {
    const mushroomCardContainer = createMushroomCardElement(mushroom, index + 1)
    mushroomsContainer.appendChild(mushroomCardContainer)
  })
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substring(1)
}

renderMushroomCards(mushrooms)

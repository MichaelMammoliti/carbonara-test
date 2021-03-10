const createItem = (categoryKey, key) => ({
  title: `${categoryKey}.items.${key}.title`,
  answer: `${categoryKey}.items.${key}.answer`,
});

const createCategory = (categoryKey, items) => ({
  title: `${categoryKey}.title`,
  items: items.map((item) => createItem(categoryKey, item)),
});

export default [
  createCategory('faq.generalQuestions', [
    'includedInPrice',
    'bookingGuarantee',
    'nonRiders',
    'accomodation',
    'privateTours',
    'groupBooking',
    'dietaryRestrictions',
  ]),
  createCategory('faq.bookingATour', [
    'how',
    'singleSupplement',
    'cancelTour',
    'travelProtection',
    'travelArrangements',
  ]),
  createCategory('faq.preparingForTour', [
    'training',
    'support',
    'pack',
  ]),
  createCategory('faq.packageList', [
    'transfers',
  ]),
  createCategory('faq.bikesAndGear', [
    'bringOwnBike',
    'bikeAdjusted',
    'bringPedalOrSeat',
  ]),
];

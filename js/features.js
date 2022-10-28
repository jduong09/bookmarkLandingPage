document.addEventListener('DOMContentLoaded', () => {
  const itemsFeatureBtns = document.querySelectorAll('.list-features > li');
  const itemsFeature = document.getElementsByClassName('item-feature');
  let currentActiveIdx = 0;

  for (let i = 0; i < itemsFeatureBtns.length; i++) {
    const itemFeatureBtn = itemsFeatureBtns[i];

    itemFeatureBtn.addEventListener('click', () => {
      itemsFeatureBtns[currentActiveIdx].classList.remove('active');
      itemsFeature[currentActiveIdx].classList.add('hide');

      itemsFeatureBtns[i].classList.add('active');
      itemsFeature[i].classList.remove('hide');

      currentActiveIdx = i;
    });
  }
});
const bundles = document.querySelectorAll('.bundle');
const radios = document.querySelectorAll('input[name="bundle"]');
const total = document.getElementById('total-price');

// Map of bundle value to price
const prices = {
  1: '$10.00 USD',
  2: '$18.00 USD',
  3: '$24.00 USD'
};

bundles.forEach((bundle, index) => {
  bundle.addEventListener('click', () => {
    // Set the correct radio button
    radios[index].checked = true;

    // Hide dropdowns for all
    bundles.forEach((b) => {
      b.classList.remove('selected');
      b.querySelector('.dropdowns')?.classList.add('hidden');
    });

    // Show dropdown for clicked one
    bundle.classList.add('selected');
    bundle.querySelector('.dropdowns')?.classList.remove('hidden');

    // Update total price
    const selectedValue = radios[index].value;
    total.textContent = `Total: ${prices[selectedValue]}`;
  });
});

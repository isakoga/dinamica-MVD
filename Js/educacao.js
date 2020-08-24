const howMuchDiv = document.getElementById('how-much');
window.onload = () => {
  howMuchDiv.classList.add('hidden-div');
}

const howMuchClick = document.getElementById('how-much-title');
howMuchClick.addEventListener('click', function() {
  howMuchDiv.classList.toggle('hidden-div');
})

const buttonCalc = document.getElementById('calcule');

buttonCalc.addEventListener('click', function() {
  const rendaInput = document.getElementById('renda').value;
  const hoursInput = document.getElementById('hours').value;
  const result = Math.round((rendaInput / hoursInput) *100) / 100;
  const outputDiv = document.getElementById('output');
  return outputDiv.innerHTML = `O valor da sua hora é R$${result}.`;
});

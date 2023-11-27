import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import OtherModule from './js/otherModule.js';

function handleSampleForm() {
  event.preventDefault();
  document.getElementById("outputDiv").innerText = null;
  const pTag = document.createElement("p");
  pTag.append(document.getElementById("text-input").value);
  document.getElementById("outputDiv").append(pTag);
}

window.addEventListener("load", function() {
  document.getElementById("sample-form").addEventListener("submit", handleSampleForm);
});
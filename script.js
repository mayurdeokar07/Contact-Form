let mobileNumbers = [];

function addMobileNumber() {
  const mobileNumbersContainer = document.getElementById('mobileNumbersContainer');

  
  const mobileContainer = document.createElement('div');
  mobileContainer.classList.add('mobile-container');

  
  const input = document.createElement('input');
  input.type = 'tel';
  input.name = 'mobileNumber';
  input.placeholder = 'Enter Mobile Number';

  
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function () {
    mobileNumbersContainer.removeChild(mobileContainer);
    removeMobileNumber(input);
  });

  
  
  mobileContainer.appendChild(input);
  mobileContainer.appendChild(removeButton);


  mobileNumbersContainer.appendChild(mobileContainer);

  mobileNumbers.push(input.value);
  
}

function removeMobileNumber(inputToRemove) {
  
  mobileNumbers = mobileNumbers.filter((number) => number !== inputToRemove.value);
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const dateOfBirth = formData.get('dateOfBirth');
  const education = formData.get('education');
  const gender = formData.get('gender');
  const enteredMobileNumbers = Array.from(formData.getAll('mobileNumber'));
  const address = formData.get('address');
  
  mobileNumbers = enteredMobileNumbers;


  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Date of Birth:', dateOfBirth);
  console.log('Education:', education);
  console.log('Gender:', gender);
  console.log('Mobile Numbers:', mobileNumbers);
  console.log('Address:', address);
});

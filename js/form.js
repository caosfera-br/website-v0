const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Form submission started');
  
  const form = event.target;
  const formData = new FormData(form);
  console.log('Form data:', Object.fromEntries(formData));
  
  // Submit to Netlify Forms
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log('Form submitted successfully');
      const formSection = document.getElementById('form-section');
      const successMessage = document.getElementById('success-message');
      
      console.log('Form section found:', !!formSection);
      console.log('Success message found:', !!successMessage);
      
      // Hide form and show success message
      formSection.style.display = 'none';
      successMessage.style.display = 'block';
      
      console.log('Form hidden, success message shown');
      
      // Reset the form
      form.reset();
      console.log('Form reset');
    })
    .catch((error) => {
      console.error('Error details:', error);
      console.error('Error stack:', error.stack);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });
};

// Add event listener with error handling
try {
  const form = document.querySelector("form");
  console.log('Form element found:', !!form);
  form.addEventListener("submit", handleSubmit);
  console.log('Submit event listener added');
} catch (error) {
  console.error('Error setting up form:', error);
} 
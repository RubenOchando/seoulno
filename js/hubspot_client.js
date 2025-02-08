async function generatemessage() {
document.getElementById('hubspot-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    console.log("you have call generatemessage function")
    const formData = {
      fields: [
        { name: 'email', value: document.getElementById('email').value },
        { name: 'name', value: document.getElementById('name').value },
        { name: 'message', value: document.getElementById('message').value }
      ]
    };

    const hubspotPortalId = `${env.HUBSPOT_PORTAL_ID}`; // Replace with your portal ID ${process.env.HUBSPOT_PORTAL_ID}
    const hubspotFormGuid = `${env.HUBSPOT_FORM_GUID}`; // Replace with your form GUID ${process.env.HUBSPOT_FORM_GUID}

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormGuid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        document.getElementById('hubspot-form').reset();
      } else {
        alert('Error submitting the form.');
        console.error(await response.json());
      }

    } catch (error) {
      console.error('Network error:', error);
      alert('Network error occurred.');
    }
  });
}
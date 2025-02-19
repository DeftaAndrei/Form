document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('businessForm');
    const formData = {
        businessName: '',
        ownerName: '',
        email: '',
        phone: '',
        website: '',
        industry: '',
        // Câmpuri noi pentru locație
        primaryLocation: '',
        city: '',
        country: '',
        additionalLocations: '',
        // Câmpuri noi pentru sfera de acțiune
        operationHours: '',
        serviceDelivery: '',
        serviceRadius: '',
        targetMarkets: '',
        languages: '',
        expansionPlans: '',
        // Câmpuri existente
        yearsInBusiness: '',
        numberOfEmployees: '',
        businessDescription: '',
        products: '',
        targetAudience: '',
        priceRange: '',
        geographicScope: '',
        marketingGoals: '',
        budget: '',
        additionalNotes: ''
    };

    // Error message elements
    const errorElements = {
        businessName: document.getElementById('businessNameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError')
    };

    function validateForm() {
        let isValid = true;
        const errors = {};
        
        // Validări existente
        if (!formData.businessName.trim()) {
            errors.businessName = 'Business name is required';
            isValid = false;
        }
        
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
            isValid = false;
        }
        
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
            isValid = false;
        }

        // Validări noi pentru câmpurile de locație
        if (!formData.city.trim()) {
            errors.city = 'City is required';
            isValid = false;
        }

        if (!formData.country.trim()) {
            errors.country = 'Country is required';
            isValid = false;
        }

        // Display errors
        Object.keys(errors).forEach(field => {
            if (errorElements[field]) {
                errorElements[field].textContent = errors[field] || '';
            }
        });

        return isValid;
    }

    // Handle input changes
    form.addEventListener('input', function(e) {
        const { name, value } = e.target;
        formData[name] = value;

        // Clear error when user starts typing
        if (errorElements[name]) {
            errorElements[name].textContent = '';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            console.log('Valid data:', formData);
            
            // Aici puteți adăuga logica pentru procesarea datelor
            // De exemplu:
            const locationData = {
                primary: formData.primaryLocation,
                city: formData.city,
                country: formData.country,
                additional: formData.additionalLocations
            };

            const operationalData = {
                hours: formData.operationHours,
                delivery: formData.serviceDelivery,
                radius: formData.serviceRadius,
                markets: formData.targetMarkets,
                languages: formData.languages,
                expansion: formData.expansionPlans
            };

            console.log('Location Data:', locationData);
            console.log('Operational Data:', operationalData);
            
            // Exemplu de trimitere a datelor
            // submitFormData({ ...formData, locationData, operationalData });
            
            alert('Form submitted successfully!');
            
            // Reset form
            form.reset();
            Object.keys(formData).forEach(key => {
                formData[key] = '';
            });
        }
    });

    // Funcție pentru trimiterea datelor
    async function submitFormData(data) {
        try {
            const response = await fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error submitting form:', error);
            throw error;
        }
    }
});

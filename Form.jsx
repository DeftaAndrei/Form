import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    YourName: '',
    Email: '',
    phone: '',
    website: '',
    Location: '',
    Industry: '',
    YearsInBusiness: '',
    NumberOfEmployees: '',
    BusinessDescription: '',
    Products: '',
    TargetAudience: '',
    PriceRange: '',
    GeographicScope: '',
    MarketingGoals: '',
    Budget: '',
    AdditionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Valid data:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-4xl mx-auto my-4">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl">Business Information Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 p-2 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Business Name *
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
              {errors.businessName && (
                <p className="text-red-500 text-sm">{errors.businessName}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Owner/Contact Name *
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
             0   onChange={handleChange}
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Website (if any)
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Industry
              </label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Years in Business
              </label>
              <input
                type="number"
                name="yearsInBusiness"
                value={formData.yearsInBusiness}
                onChange={handleChange}
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Number of Employees
              </label>
              <input
                type="number"
                name="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleChange}
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base font-medium">
              Business Description
            </label>
            <textarea
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleChange}
              rows="3"
              placeholder="Please describe your business, its mission, and vision"
              className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base font-medium">
              Products/Services
            </label>
            <textarea
              name="products"
              value={formData.products}
              onChange={handleChange}
              rows="3"
              placeholder="List your main products or services"
              className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base font-medium">
              Target Audience
            </label>
            <textarea
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              rows="2"
              placeholder="Describe your ideal customer"
              className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Price Range
              </label>
              <input
                type="text"
                name="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
                placeholder="e.g., $100-$1000"
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm md:text-base font-medium">
                Geographic Scope
              </label>
              <input
                type="text"
                name="geographicScope"
                value={formData.geographicScope}
                onChange={handleChange}
                placeholder="e.g., Local, National, International"
                className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base font-medium">
              Marketing Goals
            </label>
            <textarea
              name="marketingGoals"
              value={formData.marketingGoals}
              onChange={handleChange}
              rows="2"
              placeholder="What are your main marketing objectives?"
              className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base font-medium">
              Budget Range for Website
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a budget range</option>
              <option value="under-1000">Under $1,000</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="over-10000">Over $10,000</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base font-medium">
              Additional Notes
            </label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              rows="3"
              placeholder="Any additional information or specific requirements"
              className="w-full p-2 md:p-3 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto sm:min-w-[200px] md:min-w-[250px] bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 rounded hover:bg-blue-600 transition-colors text-sm md:text-base mx-auto block"
          >
            Submit Business Information
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BusinessForm;
import React, { useState } from "react";
import './StartupForm.css'; // External CSS

const StartupForm = () => {
  const [formData, setFormData] = useState({
    startupName: "",
    tagline: "",
    logo: null,
    founders: "",
    startupType: "",
    sector: "",
    email: "",
    phoneNumber: "",
    website: "",
    address: "",
    city: "",
    state: "",
    country: "",
    foundedDate: "",
    employees: "",
    fundingStage: "",
    totalFunding: "",
    revenueModel: "",
  });

  const [currentStep, setCurrentStep] = useState(1); // Track form step

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        data.append(key, formData[key]);
      }
    }
    try {
      const response = await fetch('http://localhost:5000/startup', {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        alert('Startup data saved successfully!');
      } else {
        alert('Failed to save startup data!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSave = () => {
    alert('Data saved temporarily!'); // You can enhance this with actual save logic.
  };

  return (
    <form onSubmit={handleSubmit} className="startup-form">
      {currentStep === 1 && (
        <>
          <h2>Basic Startup Information</h2>
          <div className="form-group">
            <label>Startup Name:</label>
            <input type="text" name="startupName" value={formData.startupName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Tagline/Slogan:</label>
            <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Logo:</label>
            <input type="file" name="logo" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label>Founder(s) Name:</label>
            <input type="text" name="founders" value={formData.founders} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Startup Type:</label>
            <select name="startupType" value={formData.startupType} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Tech">Tech</option>
              <option value="Healthcare">Healthcare</option>
              <option value="FinTech">FinTech</option>
            </select>
          </div>
          <div className="form-group">
            <label>Sector:</label>
            <select name="sector" value={formData.sector} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Software">Software</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <button type="button" className="save-btn" onClick={handleSave}>Save</button>
          <button type="button" className="next-btn" onClick={handleNext}>Next</button>
        </>
      )}

      {currentStep === 2 && (
        <>
          <h2>Contact Information</h2>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Website URL:</label>
            <input type="url" name="website" value={formData.website} onChange={handleChange} />
          </div>
          <button type="button" className="back-btn" onClick={handleBack}>Back</button>
          <button type="button" className="save-btn" onClick={handleSave}>Save</button>
          <button type="button" className="next-btn" onClick={handleNext}>Next</button>
        </>
      )}

      {currentStep === 3 && (
        <>
          <h2>Location Information</h2>
          <div className="form-group">
            <label>City:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
          </div>
          <button type="button" className="back-btn" onClick={handleBack}>Back</button>
          <button type="button" className="save-btn" onClick={handleSave}>Save</button>
          <button type="button" className="next-btn" onClick={handleNext}>Next</button>
        </>
      )}

      {currentStep === 4 && (
        <>
          <h2>Business Details</h2>
          <div className="form-group">
            <label>Founded Date:</label>
            <input type="date" name="foundedDate" value={formData.foundedDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Number of Employees:</label>
            <input type="text" name="employees" value={formData.employees} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Funding Stage:</label>
            <select name="fundingStage" value={formData.fundingStage} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
            </select>
          </div>
          <div className="form-group">
            <label>Total Funding Amount:</label>
            <input type="number" name="totalFunding" value={formData.totalFunding} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Revenue Model:</label>
            <textarea name="revenueModel" value={formData.revenueModel} onChange={handleChange}></textarea>
          </div>
          <button type="button" className="back-btn" onClick={handleBack}>Back</button>
          <button type="submit" className="submit-btn">Submit</button>
        </>
      )}
    </form>
  );
};

export default StartupForm;

'use client';

import { useState } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    authorized: false,
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const positions = [
    {
      title: 'Line Cook',
      location: 'New Westminster',
      type: 'Full-time / Part-time',
      description: 'Join our kitchen team preparing our signature burgers and specialty items. Experience with grill and fryer preferred. Fast-paced environment with opportunities to learn and grow.',
    },
    {
      title: 'Server',
      location: 'New Westminster',
      type: 'Full-time / Part-time',
      description: 'Provide exceptional customer service in our fun, heaven-themed restaurant. Great for those who love working with people. Tips included. Previous serving experience is an asset but not required.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Create FormData to handle file upload
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);

      if (resume) {
        formDataToSend.append('resume', resume);
      }

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Application submitted successfully! We\'ll be in touch soon.',
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          authorized: false,
        });
        setResume(null);
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit application. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate that it's a PDF
      if (file.type !== 'application/pdf') {
        setSubmitStatus({
          type: 'error',
          message: 'Please upload a PDF file only.',
        });
        e.target.value = '';
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'Resume file size must be less than 5MB.',
        });
        e.target.value = '';
        return;
      }
      setResume(file);
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-heading text-center mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            JOIN OUR TEAM
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto font-light">
            Be part of something special. Build your career at Burger Heaven.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6 text-center">
              WHY WORK AT BURGER HEAVEN?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Competitive Pay</h3>
                <p className="text-accent-800">
                  We offer competitive wages plus tips for front-of-house staff
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Growth Opportunities</h3>
                <p className="text-accent-800">
                  We promote from within and invest in our team&apos;s development
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Fun Environment</h3>
                <p className="text-accent-800">
                  Work with a great team in a lively, positive atmosphere
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-3">⚖️</div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Flexible Scheduling</h3>
                <p className="text-accent-800">
                  We work with your schedule, perfect for students
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-3">🍔</div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Staff Meals</h3>
                <p className="text-accent-800">
                  Enjoy free meals during your shift
                </p>
              </div>
            </div>
          </div>

          {/* Current Openings */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6 text-center">
              CURRENT OPENINGS
            </h2>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="diner-card rounded-2xl p-6 animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-accent-900 group-hover:text-primary-700 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex gap-2 mt-2 md:mt-0">
                      <span className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-md">
                        {position.location}
                      </span>
                      <span className="bg-wood-200 text-accent-900 px-3 py-1.5 rounded-full text-sm font-semibold">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-accent-800 leading-relaxed">{position.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="diner-card rounded-2xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6 text-center">
              APPLY NOW
            </h2>
            <p className="text-center text-accent-800 mb-8 font-light">
              Fill out the application below or drop off your resume in person
            </p>
            {submitStatus.type && (
              <div
                className={`max-w-2xl mx-auto mb-6 p-4 rounded-xl ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border-2 border-green-500 text-green-800'
                    : 'bg-red-50 border-2 border-red-500 text-red-800'
                }`}
              >
                <p className="font-semibold">{submitStatus.message}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                required
              />
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                required
              >
                <option value="">Select Position</option>
                {positions.map((position, index) => (
                  <option key={index} value={position.title}>
                    {position.title} - {position.location}
                  </option>
                ))}
              </select>
              <div className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-wood-100">
                <p className="text-accent-900"><strong>Location:</strong> New Westminster</p>
              </div>
              <textarea
                name="experience"
                placeholder="Tell us about your experience and why you want to work at Burger Heaven"
                value={formData.experience}
                onChange={handleChange}
                rows={5}
                className="w-full px-5 py-3 border-2 border-wood-300 rounded-2xl bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                required
              ></textarea>
              <div>
                <label className="block text-sm font-semibold text-accent-900 mb-2">
                  Resume (PDF only, max 5MB) - Optional
                </label>
                <input
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleFileChange}
                  className="w-full px-5 py-3 border-2 border-wood-300 rounded-2xl bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                />
                {resume && (
                  <p className="mt-2 text-sm text-green-700 font-semibold">
                    ✓ {resume.name} ({(resume.size / 1024).toFixed(1)} KB)
                  </p>
                )}
              </div>
              <div className="text-sm text-accent-800">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="authorized"
                    checked={formData.authorized}
                    onChange={handleChange}
                    className="mt-1 accent-primary-600"
                    required
                  />
                  <span>
                    I confirm that the information provided is accurate and I am legally
                    authorized to work in Canada
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-xl text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

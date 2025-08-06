import React, { useState } from 'react';

const SalaryCalculator = () => {
  const [roleTitle, setRoleTitle] = useState('');
  const [usSalary, setUsSalary] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');

  // Predefined role presets with default salaries
  const rolePresets = [
    { title: 'Sales Development Rep (SDR)', salary: 70000 },
    { title: 'Revenue Operations Manager', salary: 90000 },
    { title: 'Customer Success Manager', salary: 85000 },
    { title: 'Executive Assistant', salary: 60000 },
    { title: 'Product Designer', salary: 80000 },
    { title: 'Software Engineer', salary: 120000 },
    { title: 'Marketing Manager', salary: 75000 },
    { title: 'Content Writer', salary: 65000 }
  ];

  const regions = [
    {
      name: 'Philippines',
      percentage: 0.20,
      flag: '🇵🇭',
      description: 'Southeast Asia',
      timezone: '12-14 hrs overlap',
      english: 'C1-C2 English'
    },
    {
      name: 'Latin America',
      percentage: 0.35,
      flag: '🌎',
      description: 'Americas',
      timezone: '6-8 hrs overlap',
      english: 'C1-C2 English'
    },
    {
      name: 'South Africa',
      percentage: 0.40,
      flag: '🇿🇦',
      description: 'Africa',
      timezone: '8-10 hrs overlap',
      english: 'Native English'
    }
  ];

  const handlePresetChange = (e) => {
    const selectedTitle = e.target.value;
    setSelectedPreset(selectedTitle);
    
    if (selectedTitle) {
      const preset = rolePresets.find(role => role.title === selectedTitle);
      if (preset) {
        setRoleTitle(preset.title);
        setUsSalary(preset.salary.toString());
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roleTitle.trim() && usSalary && parseFloat(usSalary) > 0) {
      setShowResults(true);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend/email service
    console.log('Email captured:', email);
    alert('Report sent to your inbox!');
    setShowEmailCapture(false);
    setEmail('');
  };

  const copyShareLink = () => {
    const shareText = `Check out this salary calculator from Somewhere.com! I could save ${formatPercentage(0.6)} on hiring costs: ${window.location.href}`;
    navigator.clipboard.writeText(shareText);
    alert('Link copied to clipboard!');
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(`🚀 Just discovered I could save 60-80% on hiring costs with global talent! Check out this calculator from @SomewhereTeam`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percentage) => {
    return `${Math.round((1 - percentage) * 100)}%`;
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-text">Somewhere.com</h1>
                <p className="text-gray-600 text-sm">Global Hiring Calculator</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text mb-4">
            Calculate Your Hiring Savings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how much you can save by hiring world-class talent from global markets through Somewhere.com
          </p>
        </div>

        {/* Calculator Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="rolePreset" className="block text-sm font-medium text-text mb-2">
                Choose a Role (or enter custom below)
              </label>
              <select
                id="rolePreset"
                value={selectedPreset}
                onChange={handlePresetChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors bg-white"
              >
                <option value="">Select a common SaaS role...</option>
                {rolePresets.map((preset) => (
                  <option key={preset.title} value={preset.title}>
                    {preset.title} - ${preset.salary.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="roleTitle" className="block text-sm font-medium text-text mb-2">
                Role Title
              </label>
              <input
                type="text"
                id="roleTitle"
                value={roleTitle}
                onChange={(e) => setRoleTitle(e.target.value)}
                placeholder="e.g., Senior Software Engineer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="usSalary" className="block text-sm font-medium text-text mb-2">
                U.S. Salary (Annual)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  id="usSalary"
                  value={usSalary}
                  onChange={(e) => setUsSalary(e.target.value)}
                  placeholder="120000"
                  min="0"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Calculate Savings
            </button>
          </form>
        </div>

        {/* Results Section */}
        {showResults && roleTitle && usSalary && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-text mb-2">
                Hiring Cost Comparison for {roleTitle}
              </h3>
              <p className="text-gray-600">
                Based on a U.S. salary of {formatCurrency(parseFloat(usSalary))}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {regions.map((region) => {
                const localSalary = parseFloat(usSalary) * region.percentage;
                const savings = parseFloat(usSalary) - localSalary;
                const savingsPercentage = (1 - region.percentage) * 100;
                
                return (
                  <div key={region.name} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{region.flag}</span>
                        <div>
                          <h4 className="text-lg font-semibold text-text">{region.name}</h4>
                          <p className="text-sm text-gray-500">{region.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quality indicators */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        🕐 {region.timezone}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        💬 {region.english}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Estimated Local Salary</p>
                        <p className="text-2xl font-bold text-text">{formatCurrency(localSalary)}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Annual Savings</p>
                        <p className="text-2xl font-bold text-green-600">{formatCurrency(savings)}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Cost Reduction</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-2xl font-bold text-green-600">{Math.round(savingsPercentage)}%</p>
                            <p className="text-sm text-gray-500">saved</p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${savingsPercentage}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 text-center">{Math.round(savingsPercentage)}% reduction vs U.S. hiring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Email Capture & Share Section */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-semibold text-text mb-3">
                💡 Want to save this report?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setShowEmailCapture(!showEmailCapture)}
                  className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  📧 Send to Email
                </button>
                <button
                  onClick={copyShareLink}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  📋 Copy Link
                </button>
                <button
                  onClick={shareToTwitter}
                  className="bg-blue-400 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-500 transition-colors"
                >
                  🐦 Share on Twitter
                </button>
                <button
                  onClick={shareToLinkedIn}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  💼 Share on LinkedIn
                </button>
              </div>
              
              {showEmailCapture && (
                <form onSubmit={handleEmailSubmit} className="mt-4 max-w-md mx-auto">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* CTA Section */}
            <div className="bg-primary rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Ready to Turn These Savings Into Reality?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Join 500+ SaaS companies that have cut hiring costs by 60-80% while scaling their teams globally
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  🎯 Find Your First Offshore Hire
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                  📞 Talk to a Hiring Strategist
                </button>
              </div>
              <p className="text-sm mt-4 opacity-75">
                See who we can place for you this week →
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-text font-semibold">Somewhere.com</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 Somewhere.com. Empowering global hiring.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalaryCalculator;
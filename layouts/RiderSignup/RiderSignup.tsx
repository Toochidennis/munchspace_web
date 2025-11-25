import { Bike, MapPin, Clock, DollarSign, CheckCircle, ArrowRight, Smartphone, ShieldCheck } from "lucide-react";

export default function RiderSignup() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-munchspace-yellow rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 lg:py-24">
        
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Content */}
          <div className="space-y-8 relative">
            {/* Decorative circle */}
            <div className="absolute -top-8 -left-8 w-52 h-52 opacity-60 bg-orange-100 rounded-full -z-10" />
            
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Bike className="w-4 h-4" />
              <span>Earn on Your Schedule</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-neutral-900">
              Become a <span className="text-primary">MunchSpace Rider</span>
            </h1>
            
            <p className="text-neutral-600 text-lg lg:text-xl font-medium leading-relaxed">
              Deliver happiness and earn money on your own terms. Join thousands of riders who are making great income with flexible hours.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                Sign Up Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white hover:bg-neutral-50 text-neutral-900 border-2 border-neutral-200 px-8 py-4 rounded-xl font-semibold transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="absolute top-0 right-0 w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] bg-primary/20 rounded-full"></div>
            <div className="relative z-10 w-full flex items-center justify-center">
              <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-primary to-primary-hover rounded-3xl shadow-2xl flex items-center justify-center">
                <Bike className="w-48 h-48 lg:w-64 lg:h-64 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-4">
              Why Ride with MunchSpace?
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Join a platform that values your time and effort with great benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-neutral-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Great Earnings
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Earn competitive rates plus tips and bonuses for completing deliveries
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-neutral-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Flexible Hours
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Work whenever you want. Morning, evening, or weekends - you choose
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-neutral-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Easy to Start
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Simple signup process. Get approved and start earning in days
              </p>
            </div>

            {/* Benefit Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-neutral-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Insurance & Support
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Comprehensive coverage and 24/7 support team to help you succeed
              </p>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-8 text-center">
            Requirements to Join
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Age Requirement</h4>
                  <p className="text-neutral-600 text-sm">Must be at least 18 years old</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Valid ID</h4>
                  <p className="text-neutral-600 text-sm">Government-issued identification card</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Smartphone</h4>
                  <p className="text-neutral-600 text-sm">iOS or Android device with data plan</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Vehicle</h4>
                  <p className="text-neutral-600 text-sm">Bike, scooter, motorcycle, or car</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">License</h4>
                  <p className="text-neutral-600 text-sm">Valid driver's license (if using motorized vehicle)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Background Check</h4>
                  <p className="text-neutral-600 text-sm">Pass a standard background screening</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Form Section */}
        <div className="bg-primary rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Ready to Start Earning?
              </h2>
              <p className="text-white/90 text-lg">
                Fill out the form below and we'll get you started
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">City</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input 
                    type="text" 
                    placeholder="Enter your city"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Vehicle Type</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="">Select your vehicle</option>
                  <option value="bicycle">Bicycle</option>
                  <option value="scooter">Scooter/E-Bike</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="car">Car</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Submit Application
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-white/80 text-sm text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

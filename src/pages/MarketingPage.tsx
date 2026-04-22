import { ShoppingBag, CreditCard, BarChart3, Globe, Package, Zap, ArrowRight, ExternalLink } from 'lucide-react';

const MarketingPage = () => {
  const tools = [
    {
      name: "Square",
      category: "Payments & POS",
      description: "Comprehensive payment processing and point-of-sale solutions for businesses of all sizes.",
      features: ["Contactless Payments", "Online Store Integration", "Inventory Management"],
      color: "bg-blue-500",
      icon: CreditCard
    },
    {
      name: "Toast",
      category: "Restaurant POS",
      description: "All-in-one restaurant management system built specifically for the food service industry.",
      features: ["Tableside Ordering", "Online Ordering", "Kitchen Display System"],
      color: "bg-orange-500",
      icon: Zap
    },
    {
      name: "Shopline",
      category: "E-commerce Platform",
      description: "Global smart commerce enabler that helps brands go global and sell everywhere.",
      features: ["Omnichannel Sales", "Social Commerce", "Marketing Automation"],
      color: "bg-indigo-600",
      icon: Globe
    },
    {
      name: "Clover",
      category: "Point of Sale",
      description: "Flexible POS system with powerful hardware and software tailored to your business needs.",
      features: ["Custom Rewards", "Employee Management", "Sales Tracking"],
      color: "bg-green-500",
      icon: Package
    },
    {
      name: "NCR",
      category: "Enterprise POS",
      description: "World leader in consumer transaction technologies, turning everyday interactions into exceptional experiences.",
      features: ["Enterprise Scalability", "Advanced Analytics", "Multi-channel Support"],
      color: "bg-gray-800",
      icon: BarChart3
    },
    {
      name: "Lightspeed",
      category: "Retail & Hospitality",
      description: "Cloud-based commerce platform powering small and medium-sized businesses worldwide.",
      features: ["Complex Inventory", "Customer Loyalty", "Supplier Management"],
      color: "bg-red-600",
      icon: ShoppingBag
    },
    {
      name: "Revel Systems",
      category: "iPad POS",
      description: "Intuitive POS platform designed for restaurants and retailers to help them scale and succeed.",
      features: ["Real-time Reporting", "Mobile Orders", "CRM Integration"],
      color: "bg-cyan-500",
      icon: Zap
    }
  ];

  return (
    <div className="space-y-16 animate-fade-in pb-20">
      <header className="border-b border-surface-100 pb-10">
        <div className="flex items-center gap-3 mb-4">
          <ShoppingBag className="w-8 h-8 text-brand-600" />
          <h1 className="text-4xl font-black text-surface-900 tracking-tight uppercase italic">
            Marketing & <span className="text-brand-600">E-commerce</span>
          </h1>
        </div>
        <p className="text-surface-500 font-medium max-w-2xl leading-relaxed">
          Scale your sports merchandise and fan gear business with our integrated e-commerce solutions and industry-leading POS tools.
        </p>
      </header>

      {/* E-commerce & Dropshipping Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-[40px] p-10 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4 italic uppercase">Dropshipping Hub</h2>
            <p className="text-brand-100 mb-8 max-w-md">
              Launch your fan gear store without holding inventory. We connect you with top-tier suppliers for global fulfillment.
            </p>
            <ul className="space-y-3 mb-8">
              {['Zero Inventory Risk', 'Automated Fulfillment', 'Global Shipping', 'High-Quality Prints'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm font-bold">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-[10px]">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-brand-700 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-brand-50 transition-colors inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
        </div>

        <div className="bg-surface-900 rounded-[40px] p-10 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4 italic uppercase">Marketing Engine</h2>
            <p className="text-surface-400 mb-8 max-w-md">
              Reach your fans where they are with targeted campaigns and automated engagement tools.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <p className="text-brand-400 font-black text-2xl mb-1">24%</p>
                <p className="text-[10px] uppercase font-bold text-surface-400">Avg. Conversion</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <p className="text-brand-400 font-black text-2xl mb-1">5x</p>
                <p className="text-[10px] uppercase font-bold text-surface-400">ROI Growth</p>
              </div>
            </div>
            <button className="bg-brand-600 text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-brand-500 transition-colors inline-flex items-center gap-2">
              Explore Tools <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Tool Integration Grid */}
      <section className="space-y-8">
        <div className="border-b border-surface-100 pb-4">
          <h2 className="text-3xl font-black text-surface-900 uppercase italic">Integrated <span className="text-brand-600">Business Tools</span></h2>
          <p className="text-surface-500 text-sm font-medium mt-1">Unified management for your physical and digital storefronts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="group bg-white rounded-[32px] border border-surface-100 p-8 hover:shadow-premium transition-all duration-500 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className={`${tool.color} p-4 rounded-2xl shadow-lg shadow-black/5`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-[10px] font-black text-surface-300 uppercase tracking-[0.2em]">{tool.category}</div>
              </div>

              <h3 className="text-xl font-black text-surface-900 mb-3 group-hover:text-brand-600 transition-colors">{tool.name}</h3>
              <p className="text-surface-500 text-sm mb-6 leading-relaxed">
                {tool.description}
              </p>

              <div className="space-y-2 mb-8">
                {tool.features.map(feature => (
                  <div key={feature} className="flex items-center gap-2 text-xs font-semibold text-surface-700">
                    <div className="w-1 h-1 bg-brand-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-between group/btn px-4 py-3 rounded-xl bg-surface-50 hover:bg-brand-600 hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-wider">
                Integrate Now
                <ExternalLink className="w-4 h-4 opacity-40 group-hover/btn:opacity-100 transition-opacity" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics CTA */}
      <section className="bg-surface-50 rounded-[48px] p-12 flex flex-col lg:flex-row items-center gap-12 border border-surface-100">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-black text-surface-900 leading-tight uppercase italic">
            Ready to <span className="text-brand-600">Scale</span> Your Sports Brand?
          </h2>
          <p className="text-surface-600 font-medium text-lg leading-relaxed">
            Connect your existing POS system or start fresh with our high-conversion e-commerce templates. Join 1,000+ creators who trust SportStream for their merchandise needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-surface-900 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-black transition-colors">
              Talk to an Expert
            </button>
            <button className="bg-white border border-surface-200 text-surface-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-surface-100 transition-colors">
              View Demo Store
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 aspect-square bg-gradient-to-tr from-brand-500 to-brand-300 rounded-[40px] shadow-2xl shadow-brand-500/20 flex items-center justify-center p-12">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 w-full h-full border border-white/30 flex flex-col justify-between">
             <div className="space-y-4">
                <div className="h-2 w-1/2 bg-white/40 rounded-full"></div>
                <div className="h-8 w-full bg-white/60 rounded-xl"></div>
                <div className="h-8 w-full bg-white/40 rounded-xl"></div>
             </div>
             <div className="flex items-end justify-between">
                <div className="h-12 w-12 bg-white rounded-2xl"></div>
                <div className="h-24 w-8 bg-white/60 rounded-full"></div>
                <div className="h-16 w-8 bg-white/40 rounded-full"></div>
                <div className="h-32 w-8 bg-brand-600 rounded-full shadow-lg"></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingPage;

import { CheckCircle, ArrowRight, SearchLg, Users01, BarChart03, HelpCircle, Settings01, LifeBuoy01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const PricingPage = () => {
    return (
        <div className="min-h-screen bg-primary">
            {/* Header Navigation */}
            <header className="border-b border-secondary bg-primary">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <UntitledLogo className="h-8" />
                        </div>
                        
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="/" className="text-tertiary hover:text-primary">Home</a>
                            <a href="#" className="text-tertiary hover:text-primary">Products</a>
                            <a href="#" className="text-tertiary hover:text-primary">Resources</a>
                            <a href="/pricing" className="text-primary font-medium">Pricing</a>
                        </nav>
                        
                        <div className="flex items-center gap-3">
                            <Button color="secondary" size="sm">Log in</Button>
                            <Button color="primary" size="sm">Sign up</Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="mb-4">
                            <span className="inline-flex items-center rounded-full bg-brand-secondary px-3 py-1 text-sm font-medium text-brand-primary">
                                Pricing
                            </span>
                        </div>
                        <h1 className="mx-auto max-w-4xl text-display-lg font-semibold text-primary sm:text-display-xl">
                            Simple, transparent pricing
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-tertiary">
                            We believe Untitled should be accessible to all companies, no matter the size.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-tertiary">
                            <span className="text-brand-primary cursor-pointer">Most popular</span>
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Basic Plan */}
                        <div className="bg-primary rounded-2xl p-8 ring-1 ring-secondary">
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-primary">Basic plan</h3>
                                <p className="mt-2 text-tertiary">Billed annually.</p>
                                <div className="mt-6">
                                    <span className="text-display-lg font-semibold text-primary">$10</span>
                                    <span className="text-lg text-tertiary">/mth</span>
                                </div>
                            </div>
                            
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Access to all basic features</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Basic reporting and analytics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Up to 10 individual users</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">20GB individual data each user</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Basic chat and email support</span>
                                </li>
                            </ul>
                            
                            <div className="mt-8">
                                <Button color="secondary" size="lg" className="w-full">
                                    Get started
                                </Button>
                            </div>
                        </div>

                        {/* Business Plan - Most Popular */}
                        <div className="bg-primary rounded-2xl p-8 ring-2 ring-brand-solid relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-brand-solid text-white px-4 py-2 rounded-full text-sm font-medium">
                                    Most popular
                                </span>
                            </div>
                            
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-primary">Business plan</h3>
                                <p className="mt-2 text-tertiary">Billed annually.</p>
                                <div className="mt-6">
                                    <span className="text-display-lg font-semibold text-primary">$20</span>
                                    <span className="text-lg text-tertiary">/mth</span>
                                </div>
                            </div>
                            
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">200+ integrations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Advanced reporting and analytics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Up to 20 individual users</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">40GB individual data each user</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Priority chat and email support</span>
                                </li>
                            </ul>
                            
                            <div className="mt-8">
                                <Button color="primary" size="lg" className="w-full">
                                    Get started
                                </Button>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-primary rounded-2xl p-8 ring-1 ring-secondary">
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-primary">Enterprise plan</h3>
                                <p className="mt-2 text-tertiary">Billed annually.</p>
                                <div className="mt-6">
                                    <span className="text-display-lg font-semibold text-primary">$40</span>
                                    <span className="text-lg text-tertiary">/mth</span>
                                </div>
                            </div>
                            
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Advanced custom fields</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Audit log and data history</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Unlimited individual users</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Unlimited individual data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-brand-solid mt-0.5" />
                                    <span className="text-secondary">Personalised+priority service</span>
                                </li>
                            </ul>
                            
                            <div className="mt-8">
                                <Button color="secondary" size="lg" className="w-full">
                                    Get started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-display-md font-semibold text-primary sm:text-display-lg">
                            Beautiful analytics to grow smarter
                        </h2>
                        <p className="mt-4 text-lg text-tertiary max-w-2xl mx-auto">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Share team inboxes */}
                        <div className="text-center">
                            <FeaturedIcon icon={SearchLg} color="brand" theme="light" size="lg" className="mx-auto" />
                            <h3 className="mt-6 text-xl font-semibold text-primary">Share team inboxes</h3>
                            <p className="mt-2 text-tertiary">
                                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                            </p>
                            <div className="mt-4">
                                <Button color="link-color" size="sm" iconTrailing={ArrowRight}>
                                    Learn more
                                </Button>
                            </div>
                        </div>

                        {/* Deliver instant answers */}
                        <div className="text-center">
                            <FeaturedIcon icon={Zap} color="brand" theme="light" size="lg" className="mx-auto" />
                            <h3 className="mt-6 text-xl font-semibold text-primary">Deliver instant answers</h3>
                            <p className="mt-2 text-tertiary">
                                An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                            </p>
                            <div className="mt-4">
                                <Button color="link-color" size="sm" iconTrailing={ArrowRight}>
                                    Learn more
                                </Button>
                            </div>
                        </div>

                        {/* Manage your team with reports */}
                        <div className="text-center">
                            <FeaturedIcon icon={BarChart03} color="brand" theme="light" size="lg" className="mx-auto" />
                            <h3 className="mt-6 text-xl font-semibold text-primary">Manage your team with reports</h3>
                            <p className="mt-2 text-tertiary">
                                Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                            </p>
                            <div className="mt-4">
                                <Button color="link-color" size="sm" iconTrailing={ArrowRight}>
                                    Learn more
                                </Button>
                            </div>
                        </div>

                        {/* Connect with customers */}
                        <div className="text-center">
                            <FeaturedIcon icon={Users01} color="brand" theme="light" size="lg" className="mx-auto" />
                            <h3 className="mt-6 text-xl font-semibold text-primary">Connect with customers</h3>
                            <p className="mt-2 text-tertiary">
                                Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
                            </p>
                            <div className="mt-4">
                                <Button color="link-color" size="sm" iconTrailing={ArrowRight}>
                                    Learn more
                                </Button>
                            </div>
                        </div>

                        {/* Connect the tools you already use */}
                        <div className="text-center">
                            <FeaturedIcon icon={Star01} color="brand" theme="light" size="lg" className="mx-auto" />
                            <h3 className="mt-6 text-xl font-semibold text-primary">Connect the tools you already use</h3>
                            <p className="mt-2 text-tertiary">
                                Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
                            </p>
                            <div className="mt-4">
                                <Button color="link-color" size="sm" iconTrailing={ArrowRight}>
                                    Learn more
                                </Button>
                            </div>
                        </div>

                        {/* Our people make the difference */}
                        <div className="text-center">
                            <FeaturedIcon icon={HelpCircle} color="brand" theme="light" size="lg" className="mx-auto" />
                            <h3 className="mt-6 text-xl font-semibold text-primary">Our people make the difference</h3>
                            <p className="mt-2 text-tertiary">
                                We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
                            </p>
                            <div className="mt-4">
                                <Button color="link-color" size="sm" iconTrailing={ArrowRight}>
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-secondary/30">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-display-md font-semibold text-primary">FAQs</h2>
                        <p className="mt-4 text-lg text-tertiary">
                            Everything you need to know about the product and billing. Can't find the answer you're looking for? Please <a href="#" className="text-brand-primary">chat to our friendly team</a>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Is there a free trial available?</h3>
                            <p className="text-tertiary">
                                Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Can I change my plan later?</h3>
                            <p className="text-tertiary">
                                Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">What is your cancellation policy?</h3>
                            <p className="text-tertiary">
                                We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Can other info be added to an invoice?</h3>
                            <p className="text-tertiary">
                                Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">How does billing work?</h3>
                            <p className="text-tertiary">
                                Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">How do I change my account email?</h3>
                            <p className="text-tertiary">
                                You can change the email address associated with your account in your workspace from a laptop or desktop.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <h3 className="text-lg font-semibold text-primary mb-4">Still have questions?</h3>
                        <p className="text-tertiary mb-6">
                            Can't find the answer you're looking for? Please chat to our friendly team.
                        </p>
                        <Button color="primary" size="lg">
                            Get in touch
                        </Button>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-solid rounded-2xl p-12 text-center">
                        <h2 className="text-display-md font-semibold text-white sm:text-display-lg">
                            Start your 30-day free trial
                        </h2>
                        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                            Join over 4,000+ startups already growing with Untitled.
                        </p>
                        
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button color="secondary" size="xl">
                                Learn more
                            </Button>
                            <Button 
                                size="xl" 
                                className="bg-white text-brand-solid hover:bg-gray-50"
                            >
                                Get started
                            </Button>
                        </div>

                        {/* Partner Logos */}
                        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
                            <div className="flex items-center gap-2 text-white">
                                <div className="size-6 bg-white/20 rounded"></div>
                                <span className="text-sm font-medium">Layors</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <div className="size-6 bg-white/20 rounded"></div>
                                <span className="text-sm font-medium">StayShade</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <div className="size-6 bg-white/20 rounded"></div>
                                <span className="text-sm font-medium">Circooles</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <div className="size-6 bg-white/20 rounded"></div>
                                <span className="text-sm font-medium">Catalog</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <div className="size-6 bg-white/20 rounded"></div>
                                <span className="text-sm font-medium">Quotient</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <div className="size-6 bg-white/20 rounded"></div>
                                <span className="text-sm font-medium">Hourglasses</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-secondary bg-primary">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                        <div className="col-span-2">
                            <UntitledLogo className="h-8" />
                            <p className="mt-4 text-tertiary">
                                Design amazing digital experiences that create more happy in the world.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-primary mb-4">Product</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-tertiary hover:text-primary">Overview</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Features</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Solutions</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Tutorials</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Pricing</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Releases</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-primary mb-4">Company</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-tertiary hover:text-primary">About us</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Careers</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Press</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">News</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Media kit</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-primary mb-4">Resources</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-tertiary hover:text-primary">Blog</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Newsletter</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Events</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Help centre</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Tutorials</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Support</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-primary mb-4">Use cases</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-tertiary hover:text-primary">Startups</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Enterprise</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Government</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">SaaS centre</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Marketplaces</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Ecommerce</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-primary mb-4">Social</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-tertiary hover:text-primary">Twitter</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">LinkedIn</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Facebook</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">GitHub</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">AngelList</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Dribbble</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-primary mb-4">Legal</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-tertiary hover:text-primary">Terms</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Privacy</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Cookies</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Licenses</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Settings</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-secondary flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-tertiary">&copy; 2077 Untitled UI. All rights reserved.</p>
                        <div className="mt-4 sm:mt-0 flex space-x-6">
                            <a href="#" className="text-tertiary hover:text-primary">Terms</a>
                            <a href="#" className="text-tertiary hover:text-primary">Privacy</a>
                            <a href="#" className="text-tertiary hover:text-primary">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

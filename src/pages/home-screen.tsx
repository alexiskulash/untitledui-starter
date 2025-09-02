import { Play, ArrowRight, CheckCircle, Stars02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BadgeWithImage } from "@/components/base/badges/badges";
import { RatingStars } from "@/components/foundations/rating-stars";

export const HomeScreen = () => {
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
                            <a href="#" className="text-tertiary hover:text-primary">Home</a>
                            <a href="#" className="text-tertiary hover:text-primary">Products</a>
                            <a href="#" className="text-tertiary hover:text-primary">Resources</a>
                            <a href="#" className="text-tertiary hover:text-primary">Pricing</a>
                        </nav>
                        
                        <div className="flex items-center gap-3">
                            <Button color="secondary" size="sm">Log in</Button>
                            <Button color="primary" size="sm">Sign up</Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-16 pb-20 sm:pt-24 sm:pb-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="mx-auto max-w-4xl text-display-lg font-semibold text-primary sm:text-display-xl lg:text-display-2xl">
                            Beautiful analytics to grow smarter
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-tertiary sm:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                        </p>
                        
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button color="primary" size="xl" iconTrailing={ArrowRight}>
                                Get started
                            </Button>
                            <Button color="secondary" size="xl" iconLeading={Play}>
                                View demo
                            </Button>
                        </div>
                    </div>
                    
                    {/* Dashboard Mockup */}
                    <div className="mt-16 sm:mt-24">
                        <div className="relative mx-auto max-w-5xl">
                            <div className="rounded-2xl bg-secondary p-8 shadow-2xl ring-1 ring-secondary">
                                <div className="aspect-[16/10] rounded-xl bg-primary ring-1 ring-secondary overflow-hidden">
                                    {/* Dashboard UI Mockup */}
                                    <div className="h-full bg-gradient-to-br from-primary to-secondary p-6">
                                        <div className="mb-6 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="h-8 w-32 rounded bg-brand-solid/20"></div>
                                                <div className="h-8 w-20 rounded bg-secondary"></div>
                                                <div className="h-8 w-20 rounded bg-secondary"></div>
                                            </div>
                                            <div className="h-8 w-24 rounded bg-brand-solid"></div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                            <div className="bg-primary rounded-lg p-4 ring-1 ring-secondary">
                                                <div className="h-4 w-20 bg-tertiary rounded mb-2"></div>
                                                <div className="h-8 w-16 bg-brand-solid rounded"></div>
                                            </div>
                                            <div className="bg-primary rounded-lg p-4 ring-1 ring-secondary">
                                                <div className="h-4 w-24 bg-tertiary rounded mb-2"></div>
                                                <div className="h-8 w-20 bg-success-solid rounded"></div>
                                            </div>
                                            <div className="bg-primary rounded-lg p-4 ring-1 ring-secondary">
                                                <div className="h-4 w-28 bg-tertiary rounded mb-2"></div>
                                                <div className="h-8 w-24 bg-warning-solid rounded"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-primary rounded-lg p-6 ring-1 ring-secondary">
                                            <div className="h-48 bg-gradient-to-t from-brand-solid/20 to-transparent rounded relative">
                                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-brand-solid/30 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Logos */}
            <section className="py-12 border-y border-secondary bg-secondary/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-tertiary mb-8">Join 4,000+ companies already growing</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {[
                            { name: "Layors", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=40&fit=crop&crop=center" },
                            { name: "StayShade", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=40&fit=crop&crop=center" },
                            { name: "Circados", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=40&fit=crop&crop=center" },
                            { name: "Catalog", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=40&fit=crop&crop=center" },
                            { name: "Quotient", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=40&fit=crop&crop=center" }
                        ].map((company) => (
                            <div key={company.name} className="flex items-center">
                                <BadgeWithImage 
                                    type="pill-color"
                                    color="gray"
                                    size="lg"
                                    imgSrc={company.logo}
                                >
                                    {company.name}
                                </BadgeWithImage>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-display-md font-semibold text-primary sm:text-display-lg">
                            Analytics that feels like it's from the future
                        </h2>
                        <p className="mt-4 text-lg text-tertiary max-w-2xl mx-auto">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Feature 1 */}
                        <div>
                            <FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="lg" />
                            <h3 className="mt-6 text-xl font-semibold text-primary">Share team inboxes</h3>
                            <p className="mt-2 text-tertiary">
                                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-brand-solid" />
                                    <span className="text-secondary">Leverage automation to move fast</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-brand-solid" />
                                    <span className="text-secondary">Always give customers a human to chat to</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-brand-solid" />
                                    <span className="text-secondary">Automate customer support and close leads faster</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-secondary rounded-2xl p-8 ring-1 ring-secondary">
                            <div className="aspect-[4/3] bg-primary rounded-xl ring-1 ring-secondary">
                                {/* Placeholder for feature mockup */}
                                <div className="h-full bg-gradient-to-br from-brand-solid/10 to-secondary/50 rounded-xl"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 bg-secondary rounded-2xl p-8 ring-1 ring-secondary">
                            <div className="aspect-[4/3] bg-primary rounded-xl ring-1 ring-secondary">
                                {/* Placeholder for feature mockup */}
                                <div className="h-full bg-gradient-to-br from-success-solid/10 to-secondary/50 rounded-xl"></div>
                            </div>
                        </div>
                        
                        <div className="order-1 lg:order-2">
                            <FeaturedIcon icon={Star} color="brand" theme="light" size="lg" />
                            <h3 className="mt-6 text-xl font-semibold text-primary">Deliver instant answers</h3>
                            <p className="mt-2 text-tertiary">
                                An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-brand-solid" />
                                    <span className="text-secondary">Keep your customers in the loop with live chat</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-brand-solid" />
                                    <span className="text-secondary">Embed help articles right on your website</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-brand-solid" />
                                    <span className="text-secondary">Customers never have to leave the page to find an answer</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="lg" />
                            <h3 className="mt-6 text-xl font-semibold text-primary">Manage your team with reports</h3>
                            <p className="mt-2 text-tertiary">
                                Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-brand-solid" />
                                    <span className="text-secondary">Filter, export, and drilldown on the data quickly</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-brand-solid" />
                                    <span className="text-secondary">Save, schedule, and automate reports to your inbox</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-brand-solid" />
                                    <span className="text-secondary">Connect the tools you already use with 100+ integrations</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-secondary rounded-2xl p-8 ring-1 ring-secondary">
                            <div className="aspect-[4/3] bg-primary rounded-xl ring-1 ring-secondary">
                                {/* Placeholder for feature mockup */}
                                <div className="h-full bg-gradient-to-br from-warning-solid/10 to-secondary/50 rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="py-24 bg-secondary/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-display-md font-semibold text-primary">
                            Get more value from your tools
                        </h2>
                        <p className="mt-4 text-lg text-tertiary max-w-2xl mx-auto">
                            Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favourite tools are just a click away.
                        </p>
                    </div>
                    
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="aspect-square bg-primary rounded-xl ring-1 ring-secondary p-4 flex items-center justify-center">
                                <div className="size-8 bg-brand-solid rounded opacity-20"></div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                        <Button color="secondary" size="lg">
                            View all integrations
                        </Button>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-display-md font-semibold text-primary">
                            Unleash the full power of data
                        </h2>
                        <p className="mt-4 text-lg text-tertiary max-w-2xl mx-auto">
                            Everything you need to convert, engage, and retain more users.
                        </p>
                    </div>
                    
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-display-lg font-semibold text-brand-solid">40+</div>
                            <div className="mt-2 text-lg font-medium text-primary">Integrations</div>
                            <div className="mt-1 text-tertiary">Connect your existing tools</div>
                        </div>
                        <div className="text-center">
                            <div className="text-display-lg font-semibold text-brand-solid">600%</div>
                            <div className="mt-2 text-lg font-medium text-primary">Return on investment</div>
                            <div className="mt-1 text-tertiary">Increase your revenue</div>
                        </div>
                        <div className="text-center">
                            <div className="text-display-lg font-semibold text-brand-solid">4k+</div>
                            <div className="mt-2 text-lg font-medium text-primary">Global customers</div>
                            <div className="mt-1 text-tertiary">Around the world</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-secondary/30">
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
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <blockquote className="text-xl text-primary sm:text-2xl">
                        "Untitled has saved us thousands of hours of work and has unlock data insights we never thought possible."
                    </blockquote>
                    
                    <div className="mt-8 flex flex-col items-center">
                        <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" 
                            alt="Avatar" 
                            className="size-16 rounded-full"
                        />
                        <div className="mt-4">
                            <div className="font-semibold text-primary">Koray Okumus</div>
                            <div className="text-tertiary">UX Designer, Circooles</div>
                        </div>
                        <RatingStars rating={5} className="mt-4" />
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-secondary/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-display-md font-semibold text-primary">
                            Join 4,000+ startups growing with Untitled
                        </h2>
                        <p className="mt-4 text-lg text-tertiary max-w-2xl mx-auto">
                            Start your 30-day free trial today.
                        </p>
                        
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button color="secondary" size="lg">
                                Learn more
                            </Button>
                            <Button color="primary" size="lg">
                                Get started
                            </Button>
                        </div>
                    </div>
                    
                    <div className="mt-16 bg-primary rounded-2xl p-8 ring-1 ring-secondary">
                        <div className="aspect-[16/6] bg-gradient-to-br from-brand-solid/10 to-secondary/30 rounded-xl"></div>
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
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-primary mb-4">Company</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-tertiary hover:text-primary">About us</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Careers</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Press</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">News</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-primary mb-4">Resources</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-tertiary hover:text-primary">Blog</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Newsletter</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Events</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Help centre</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-primary mb-4">Social</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-tertiary hover:text-primary">Twitter</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">LinkedIn</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">Facebook</a></li>
                                <li><a href="#" className="text-tertiary hover:text-primary">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-secondary flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-tertiary">&copy; 2024 Untitled UI. All rights reserved.</p>
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

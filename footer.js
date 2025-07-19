// footer.js - Complete Footer with Cross-Directory Navigation for O'Fallon Gyms Directory
const crossNavHTML = `
<!-- CROSS-DIRECTORY NAVIGATION SECTION -->
<section id="directories" class="other-directories" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 60px 0; margin-top: 40px;">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
        
        <!-- Section Header -->
        <div style="text-align: center; margin-bottom: 50px;">
            <h2 style="color: var(--secondary-color); font-size: 2rem; margin-bottom: 15px; font-family: 'Montserrat', sans-serif;">
                Other O'Fallon Business Directories
            </h2>
            <p style="color: #4a5568; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">
                Find the best local businesses across all categories in O'Fallon, Illinois
            </p>
        </div>
        
        <!-- Directories Grid -->
        <div class="directories-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            
            <!-- Gyms -->
            <a href="https://ofallongyms.com" class="dir-card gyms" 
               style="background: white; padding: 25px; border-radius: 10px; text-decoration: none; color: #333; transition: all 0.3s ease; box-shadow: 0 2px 15px rgba(0,0,0,0.1); border-left: 5px solid #e53e3e; display: block; position: relative;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-dumbbell" style="font-size: 2rem; color: #e53e3e; margin-right: 15px; width: 50px; text-align: center;"></i>
                        <h3 style="margin: 0; font-size: 1.3rem; color: #2c5aa0; font-weight: bold;">Gyms & Fitness</h3>
                    </div>
                    <span style="background: #e53e3e; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                        Compare 15+
                    </span>
                </div>
                <p style="margin: 0; font-size: 1rem; color: #666; line-height: 1.5;">
                    Fitness centers, personal training, CrossFit, yoga studios, and wellness facilities
                </p>
            </a>
            
            <!-- Chiropractors -->
            <a href="https://ofallonchiropractors.com" class="dir-card chiro" 
               style="background: white; padding: 25px; border-radius: 10px; text-decoration: none; color: #333; transition: all 0.3s ease; box-shadow: 0 2px 15px rgba(0,0,0,0.1); border-left: 5px solid #2c5aa0; display: block; position: relative;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-user-md" style="font-size: 2rem; color: #2c5aa0; margin-right: 15px; width: 50px; text-align: center;"></i>
                        <h3 style="margin: 0; font-size: 1.3rem; color: #2c5aa0; font-weight: bold;">Chiropractors</h3>
                    </div>
                    <span style="background: #2c5aa0; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                        Compare 15+
                    </span>
                </div>
                <p style="margin: 0; font-size: 1rem; color: #666; line-height: 1.5;">
                    Back pain, neck pain, headaches, sports injuries, and wellness chiropractic care
                </p>
            </a>
            
            <!-- Dentists -->
            <a href="https://ofallondentists.com" class="dir-card dental" 
               style="background: white; padding: 25px; border-radius: 10px; text-decoration: none; color: #333; transition: all 0.3s ease; box-shadow: 0 2px 15px rgba(0,0,0,0.1); border-left: 5px solid #38a169; display: block; position: relative;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-tooth" style="font-size: 2rem; color: #38a169; margin-right: 15px; width: 50px; text-align: center;"></i>
                        <h3 style="margin: 0; font-size: 1.3rem; color: #2c5aa0; font-weight: bold;">Dentists</h3>
                    </div>
                    <span style="background: #38a169; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                        Compare 22+
                    </span>
                </div>
                <p style="margin: 0; font-size: 1rem; color: #666; line-height: 1.5;">
                    Family dentistry, orthodontics, oral surgery, cosmetic dentistry, and specialists
                </p>
            </a>
            
            <!-- HVAC -->
            <a href="https://ofallonhvac.com" class="dir-card hvac" 
               style="background: white; padding: 25px; border-radius: 10px; text-decoration: none; color: #333; transition: all 0.3s ease; box-shadow: 0 2px 15px rgba(0,0,0,0.1); border-left: 5px solid #3182ce; display: block; position: relative;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-wind" style="font-size: 2rem; color: #3182ce; margin-right: 15px; width: 50px; text-align: center;"></i>
                        <h3 style="margin: 0; font-size: 1.3rem; color: #2c5aa0; font-weight: bold;">HVAC Services</h3>
                    </div>
                    <span style="background: #3182ce; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                        Compare 12+
                    </span>
                </div>
                <p style="margin: 0; font-size: 1rem; color: #666; line-height: 1.5;">
                    Heating, cooling, air quality, ductwork, and emergency HVAC repair services
                </p>
            </a>
            
            <!-- Auto Repair -->
            <a href="https://ofalloncarrepair.com" class="dir-card auto" 
               style="background: white; padding: 25px; border-radius: 10px; text-decoration: none; color: #333; transition: all 0.3s ease; box-shadow: 0 2px 15px rgba(0,0,0,0.1); border-left: 5px solid #d69e2e; display: block; position: relative;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-car" style="font-size: 2rem; color: #d69e2e; margin-right: 15px; width: 50px; text-align: center;"></i>
                        <h3 style="margin: 0; font-size: 1.3rem; color: #2c5aa0; font-weight: bold;">Auto Repair</h3>
                    </div>
                    <span style="background: #d69e2e; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                        Compare 18+
                    </span>
                </div>
                <p style="margin: 0; font-size: 1rem; color: #666; line-height: 1.5;">
                    Mechanics, oil changes, brake service, transmission repair, and auto diagnostics
                </p>
            </a>
            
            <!-- Real Estate -->
            <a href="https://ofallonrealtors.com" class="dir-card realestate" 
               style="background: white; padding: 25px; border-radius: 10px; text-decoration: none; color: #333; transition: all 0.3s ease; box-shadow: 0 2px 15px rgba(0,0,0,0.1); border-left: 5px solid #805ad5; display: block; position: relative;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-home" style="font-size: 2rem; color: #805ad5; margin-right: 15px; width: 50px; text-align: center;"></i>
                        <h3 style="margin: 0; font-size: 1.3rem; color: #2c5aa0; font-weight: bold;">Real Estate</h3>
                    </div>
                    <span style="background: #805ad5; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                        Compare 25+
                    </span>
                </div>
                <p style="margin: 0; font-size: 1rem; color: #666; line-height: 1.5;">
                    Buying agents, selling agents, rentals, commercial real estate, and home valuations
                </p>
            </a>
            
            <!-- Plumbers -->
            <a href="https://plumberofallon.com" class="dir-card plumbing" 
               style="background: white; padding: 25px; border-radius: 10px; text-decoration: none; color: #333; transition: all 0.3s ease; box-shadow: 0 2px 15px rgba(0,0,0,0.1); border-left: 5px solid #2b6cb0; display: block; position: relative;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-wrench" style="font-size: 2rem; color: #2b6cb0; margin-right: 15px; width: 50px; text-align: center;"></i>
                        <h3 style="margin: 0; font-size: 1.3rem; color: #2c5aa0; font-weight: bold;">Plumbers</h3>
                    </div>
                    <span style="background: #2b6cb0; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                        Compare 14+
                    </span>
                </div>
                <p style="margin: 0; font-size: 1rem; color: #666; line-height: 1.5;">
                    Emergency plumbing, water heaters, pipe repair, drain cleaning, and installations
                </p>
            </a>
            
            <!-- Lawn Services -->
            <a href="https://ofallonlawnservices.com" class="dir-card lawn" 
               style="background: white; padding: 25px; border-radius: 10px; text-decoration: none; color: #333; transition: all 0.3s ease; box-shadow: 0 2px 15px rgba(0,0,0,0.1); border-left: 5px solid #68d391; display: block; position: relative;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-leaf" style="font-size: 2rem; color: #68d391; margin-right: 15px; width: 50px; text-align: center;"></i>
                        <h3 style="margin: 0; font-size: 1.3rem; color: #2c5aa0; font-weight: bold;">Lawn Services</h3>
                    </div>
                    <span style="background: #68d391; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                        Compare 16+
                    </span>
                </div>
                <p style="margin: 0; font-size: 1rem; color: #666; line-height: 1.5;">
                    Landscaping, lawn care, tree service, snow removal, and outdoor maintenance
                </p>
            </a>
            
            <!-- Veterinarians -->
            <a href="https://ofallonvets.com" class="dir-card vet" 
               style="background: white; padding: 25px; border-radius: 10px; text-decoration: none; color: #333; transition: all 0.3s ease; box-shadow: 0 2px 15px rgba(0,0,0,0.1); border-left: 5px solid #f56565; display: block; position: relative;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center;">
                        <i class="fas fa-paw" style="font-size: 2rem; color: #f56565; margin-right: 15px; width: 50px; text-align: center;"></i>
                        <h3 style="margin: 0; font-size: 1.3rem; color: #2c5aa0; font-weight: bold;">Veterinarians</h3>
                    </div>
                    <span style="background: #f56565; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">
                        Compare 12+
                    </span>
                </div>
                <p style="margin: 0; font-size: 1rem; color: #666; line-height: 1.5;">
                    Animal hospitals, emergency vets, pet surgery, vaccinations, and pet care
                </p>
            </a>
            
        </div>
        
        <!-- Future Expansion Section -->
        <div style="text-align: center; margin-top: 50px; padding-top: 40px; border-top: 1px solid #e2e8f0;">
            <h3 style="color: var(--secondary-color); margin-bottom: 20px;">
                Directory Network Expansion
            </h3>
            <p style="color: #718096; margin-bottom: 30px; font-size: 1.1rem;">
                We're building the most comprehensive local business network in the Midwest
            </p>
            
            <!-- Future Cities Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
                
                <!-- Edwardsville - Next Target -->
                <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border: 2px solid var(--primary-color); position: relative;">
                    <div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: var(--primary-color); color: white; padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">
                        Next
                    </div>
                    <i class="fas fa-map-marker-alt" style="font-size: 1.5rem; color: var(--primary-color); margin-bottom: 10px;"></i>
                    <h4 style="margin: 0 0 5px 0; color: #4a5568;">Edwardsville, IL</h4>
                    <p style="margin: 0; font-size: 0.9rem; color: #718096;">Coming Q2 2025</p>
                </div>
                
                <!-- St. Charles -->
                <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border: 2px dashed #e2e8f0;">
                    <i class="fas fa-map-marker-alt" style="font-size: 1.5rem; color: #a0aec0; margin-bottom: 10px;"></i>
                    <h4 style="margin: 0 0 5px 0; color: #4a5568;">St. Charles, MO</h4>
                    <p style="margin: 0; font-size: 0.9rem; color: #a0aec0;">Coming Soon</p>
                </div>
                
            </div>
            
            <!-- Central Hub CTA -->
            <a href="https://findnear.me/ofallon" 
               style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 15px 30px; border-radius: 30px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 10px; transition: all 0.3s ease;">
                <i class="fas fa-th-large"></i>
                Browse All O'Fallon Directories
            </a>
        </div>
    </div>
</section>

<!-- REGULAR FOOTER -->
<footer style="background-color: var(--secondary-color); color: white; padding: 60px 0 20px;">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; margin-bottom: 40px;">
            <div style="flex: 1; min-width: 200px;">
                <h3 style="margin-bottom: 10px;">O'Fallon Gyms Directory</h3>
                <p>Your guide to fitness in the 62269 area</p>
            </div>
            
            <div style="flex: 1; min-width: 200px;">
                <h4>Quick Links</h4>
                <ul style="list-style: none; margin-top: 15px;">
                    <li style="margin-bottom: 10px;"><a href="#hero" style="color: #fbb6ce; text-decoration: none;">Home</a></li>
                    <li style="margin-bottom: 10px;"><a href="#matcher" style="color: #fbb6ce; text-decoration: none;">Find Your Match</a></li>
                    <li style="margin-bottom: 10px;"><a href="#comparison" style="color: #fbb6ce; text-decoration: none;">Comparison Chart</a></li>
                    <li style="margin-bottom: 10px;"><a href="#profiles" style="color: #fbb6ce; text-decoration: none;">Gym Profiles</a></li>
                    <li style="margin-bottom: 10px;"><a href="#featured" style="color: #fbb6ce; text-decoration: none;">Featured Gym</a></li>
                    <li style="margin-bottom: 10px;"><a href="#faq" style="color: #fbb6ce; text-decoration: none;">FAQ</a></li>
                </ul>
            </div>
            
            <div style="flex: 2; min-width: 300px;">
                <h4>Disclaimer</h4>
                <p>This directory is for informational purposes only. Information is subject to change. Please contact individual gyms for the most current memberships, pricing, and availability. We are not affiliated with any gym listed except our featured partner.</p>
            </div>
        </div>
        
        <div style="text-align: center; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 0.9rem;">
            <p>&copy; 2025 O'Fallon Gyms Directory. All rights reserved.</p>
        </div>
    </div>
</footer>
`;

// CSS for current site highlighting - Gym Color Scheme
const crossNavCSS = `
<style>
/* Cross-Navigation Styles - Gym Energy Theme */
.dir-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
}

.dir-card.current-site {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)) !important;
    color: white !important;
    border-left: 5px solid var(--accent-color) !important;
}

.dir-card.current-site h3,
.dir-card.current-site p {
    color: white !important;
}

.dir-card.current-site i {
    color: var(--accent-color) !important;
}

.dir-card.current-site span {
    background: var(--accent-color) !important;
    color: var(--secondary-color) !important;
    position: relative;
}

.dir-card.current-site span::after {
    content: "Current Page";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-color);
    color: var(--secondary-color);
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

@media (max-width: 768px) {
    .directories-grid {
        grid-template-columns: 1fr !important;
    }
}
</style>
`;

// Function to inject cross-navigation and highlight current site
function loadCrossNavigation() {
    console.log('🔗 Loading cross-navigation footer for O\'Fallon Gyms...');
    
    // Add CSS first
    document.head.insertAdjacentHTML('beforeend', crossNavCSS);
    
    // Find contact section and inject footer after it
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.insertAdjacentHTML('afterend', crossNavHTML);
        console.log('✅ Cross-navigation HTML injected');
        
        // Highlight current site (ofallongyms.com)
        const currentDomain = window.location.hostname;
        const dirCards = document.querySelectorAll('.dir-card');
        
        dirCards.forEach(card => {
            try {
                const cardUrl = new URL(card.href);
                if (cardUrl.hostname === currentDomain || 
                    (currentDomain.includes('ofallongyms') && card.href.includes('ofallongyms'))) {
                    card.classList.add('current-site');
                    console.log('🎯 Current site highlighted:', currentDomain);
                    
                    // Prevent navigation to current page
                    card.addEventListener('click', function(e) {
                        e.preventDefault();
                    });
                }
            } catch (e) {
                console.log('⚠️ URL parsing error for card:', card.href);
            }
        });
    } else {
        console.error('❌ Contact section not found - cannot inject cross-navigation');
    }
}

console.log('📦 Footer.js loaded successfully for O\'Fallon Gyms');

// Auto-execute with proper timing
function initializeFooter() {
    if (document.querySelector('#contact')) {
        loadCrossNavigation();
    } else {
        console.log('⏳ Contact section not found, retrying...');
        setTimeout(initializeFooter, 100);
    }
}

// Start the initialization
initializeFooter();
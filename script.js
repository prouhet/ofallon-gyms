document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
    
    // Sort gyms data: StudioStrong first, then by rating (descending), then alphabetically
    gymsData.sort((a, b) => {
        // StudioStrong always first
        if (a.isPreferred) return -1;
        if (b.isPreferred) return 1;
        
        // Then by rating (descending)
        if (a.rating !== b.rating) {
            return b.rating - a.rating;
        }
        
        // Then alphabetically
        return a.name.localeCompare(b.name);
    });
    
    // Populate comparison table
    populateComparisonTable();
    
    // Populate gym profiles
    populateGymProfiles();
    
    // Set up filters
    setupFilters();
    
    // Set up FAQ toggles
    setupFAQ();
    
    // Set up fitness matcher
    setupMatcher();
});

// Populate the comparison table with gym data
function populateComparisonTable() {
    const tableBody = document.querySelector('#comparison-table tbody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    gymsData.forEach(gym => {
        const row = document.createElement('tr');
        if (gym.isPremium) {
            row.classList.add('premium-row');
        }
        
        // Create gym name cell with logo
        const nameCell = document.createElement('td');
        nameCell.className = 'gym-name-cell';
        
        const nameWrapper = document.createElement('div');
        nameWrapper.className = 'name-wrapper';
        
        const logoImg = document.createElement('img');
        logoImg.src = gym.logo;
        logoImg.alt = `${gym.name} logo`;
        logoImg.className = 'gym-logo-small';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = gym.name;
        
        nameWrapper.appendChild(logoImg);
        nameWrapper.appendChild(nameSpan);
        
        if (gym.isPremium) {
            const premiumBadge = document.createElement('span');
            premiumBadge.className = 'premium-badge';
            premiumBadge.textContent = 'Preferred';
            premiumBadge.style.fontSize = '0.7rem';
            premiumBadge.style.padding = '2px 8px';
            premiumBadge.style.marginLeft = '8px';
            nameWrapper.appendChild(premiumBadge);
        }
        
        nameCell.appendChild(nameWrapper);
        
        // Create other cells
        const typeCell = document.createElement('td');
        typeCell.textContent = gym.type;
        
        const priceCell = document.createElement('td');
        priceCell.textContent = gym.price;
        
        const hoursCell = document.createElement('td');
        hoursCell.textContent = gym.hours;
        
        const featuresCell = document.createElement('td');
        const featuresList = document.createElement('ul');
        featuresList.style.margin = '0';
        featuresList.style.paddingLeft = '20px';
        
        gym.features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.textContent = feature;
            featuresList.appendChild(featureItem);
        });
        
        featuresCell.appendChild(featuresList);
        
        const ratingCell = document.createElement('td');
        const ratingStars = document.createElement('div');
        ratingStars.className = 'star-rating';
        
        // Create star rating
        const fullStars = Math.floor(gym.rating);
        const hasHalfStar = gym.rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            ratingStars.innerHTML += '★';
        }
        
        if (hasHalfStar) {
            ratingStars.innerHTML += '½';
        }
        
        const ratingText = document.createElement('div');
        ratingText.textContent = `${gym.rating} (${gym.reviews} reviews)`;
        
        ratingCell.appendChild(ratingStars);
        ratingCell.appendChild(ratingText);
        
        // Add all cells to the row
        row.appendChild(nameCell);
        row.appendChild(typeCell);
        row.appendChild(priceCell);
        row.appendChild(hoursCell);
        row.appendChild(featuresCell);
        row.appendChild(ratingCell);
        
        // Add the row to the table
        tableBody.appendChild(row);
    });
}

// Populate gym profile cards
function populateGymProfiles() {
    const profilesContainer = document.getElementById('gym-profiles');
    if (!profilesContainer) return;
    
    profilesContainer.innerHTML = '';
    
    gymsData.forEach(gym => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';
        if (gym.isPremium) {
            profileCard.classList.add('premium-card');
        }
        
        // Create profile header
        const profileHeader = document.createElement('div');
        profileHeader.className = 'profile-header';
        
        const logoImg = document.createElement('img');
        logoImg.src = gym.logo;
        logoImg.alt = `${gym.name} logo`;
        logoImg.className = 'profile-logo';
        
        const profileTitle = document.createElement('div');
        profileTitle.className = 'profile-title';
        
        const nameHeading = document.createElement('h3');
        nameHeading.textContent = gym.name;
        if (gym.isPremium) {
            const premiumBadge = document.createElement('span');
            premiumBadge.className = 'premium-badge';
            premiumBadge.textContent = 'Preferred';
            premiumBadge.style.fontSize = '0.7rem';
            premiumBadge.style.padding = '2px 8px';
            premiumBadge.style.marginLeft = '8px';
            nameHeading.appendChild(premiumBadge);
        }
        
        const typeText = document.createElement('div');
        typeText.className = 'profile-type';
        typeText.textContent = gym.type;
        
        profileTitle.appendChild(nameHeading);
        profileTitle.appendChild(typeText);
        
        profileHeader.appendChild(logoImg);
        profileHeader.appendChild(profileTitle);
        
        // Create profile body
        const profileBody = document.createElement('div');
        profileBody.className = 'profile-body';
        
        // Price info
        const priceInfo = document.createElement('div');
        priceInfo.className = 'profile-info';
        
        const priceHeading = document.createElement('h4');
        priceHeading.textContent = 'Monthly Price';
        
        const priceText = document.createElement('p');
        priceText.textContent = gym.price;
        
        priceInfo.appendChild(priceHeading);
        priceInfo.appendChild(priceText);
        
        // Hours info
        const hoursInfo = document.createElement('div');
        hoursInfo.className = 'profile-info';
        
        const hoursHeading = document.createElement('h4');
        hoursHeading.textContent = 'Hours';
        
        const hoursText = document.createElement('p');
        hoursText.textContent = gym.hours;
        
        hoursInfo.appendChild(hoursHeading);
        hoursInfo.appendChild(hoursText);
        
        // Features info
        const featuresInfo = document.createElement('div');
        featuresInfo.className = 'profile-info';
        
        const featuresHeading = document.createElement('h4');
        featuresHeading.textContent = 'Key Features';
        
        const featuresList = document.createElement('ul');
        
        gym.features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.textContent = feature;
            featuresList.appendChild(featureItem);
        });
        
        featuresInfo.appendChild(featuresHeading);
        featuresInfo.appendChild(featuresList);
        
        // Amenities info
        const amenitiesInfo = document.createElement('div');
        amenitiesInfo.className = 'profile-info';
        
        const amenitiesHeading = document.createElement('h4');
        amenitiesHeading.textContent = 'Amenities';
        
        const amenitiesList = document.createElement('ul');
        
        gym.amenities.forEach(amenity => {
            const amenityItem = document.createElement('li');
            amenityItem.textContent = amenity;
            amenitiesList.appendChild(amenityItem);
        });
        
        amenitiesInfo.appendChild(amenitiesHeading);
        amenitiesInfo.appendChild(amenitiesList);
        
        // Add all info sections to profile body
        profileBody.appendChild(priceInfo);
        profileBody.appendChild(hoursInfo);
        profileBody.appendChild(featuresInfo);
        profileBody.appendChild(amenitiesInfo);
        
        // Create profile footer
        const profileFooter = document.createElement('div');
        profileFooter.className = 'profile-footer';
        
        const ratingDiv = document.createElement('div');
        ratingDiv.className = 'profile-rating';
        
        const ratingStars = document.createElement('div');
        ratingStars.className = 'star-rating';
        
        // Create star rating
        const fullStars = Math.floor(gym.rating);
        const hasHalfStar = gym.rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            ratingStars.innerHTML += '★';
        }
        
        if (hasHalfStar) {
            ratingStars.innerHTML += '½';
        }
        
        const ratingText = document.createElement('span');
        ratingText.textContent = `${gym.rating} (${gym.reviews} reviews)`;
        
        ratingDiv.appendChild(ratingStars);
        ratingDiv.appendChild(ratingText);
        
        const linkDiv = document.createElement('div');
        linkDiv.className = 'profile-link';
        
        const websiteLink = document.createElement('a');
        websiteLink.href = gym.website;
        websiteLink.target = '_blank';
        websiteLink.textContent = 'Visit Website';
        
        linkDiv.appendChild(websiteLink);
        
        profileFooter.appendChild(ratingDiv);
        profileFooter.appendChild(linkDiv);
        
        // Assemble the complete profile card
        profileCard.appendChild(profileHeader);
        profileCard.appendChild(profileBody);
        profileCard.appendChild(profileFooter);
        
        // Add the card to the container
        profilesContainer.appendChild(profileCard);
    });
}

// Set up filter functionality
function setupFilters() {
    const typeFilter = document.getElementById('type-filter');
    const priceFilter = document.getElementById('price-filter');
    const amenityFilter = document.getElementById('amenity-filter');
    
    if (!typeFilter || !priceFilter || !amenityFilter) return;
    
    const applyFilters = () => {
        const typeValue = typeFilter.value;
        const priceValue = priceFilter.value;
        const amenityValue = amenityFilter.value;
        
        // Filter the data
        const filteredGyms = gymsData.filter(gym => {
            // Type filter
            if (typeValue !== 'all') {
                const typeMatch = typeValue === 'traditional' && gym.type.toLowerCase().includes('traditional') ||
                                 typeValue === 'boutique' && gym.type.toLowerCase().includes('boutique') ||
                                 typeValue === 'community' && gym.type.toLowerCase().includes('community') ||
                                 typeValue === 'crossfit' && gym.type.toLowerCase().includes('crossfit');
                if (!typeMatch) return false;
            }
            
            // Price filter
            if (priceValue !== 'all') {
                const priceText = gym.price.toLowerCase();
                const firstNumber = parseInt(priceText.match(/\d+/)[0]);
                
                if (priceValue === 'budget' && firstNumber > 50) return false;
                if (priceValue === 'mid' && (firstNumber < 50 || firstNumber > 100)) return false;
                if (priceValue === 'premium' && firstNumber < 100) return false;
            }
            
            // Amenity filter
            if (amenityValue !== 'all') {
                const amenities = gym.amenities.map(a => a.toLowerCase()).join(' ');
                const features = gym.features.map(f => f.toLowerCase()).join(' ');
                const allText = amenities + ' ' + features;
                
                if (amenityValue === '24-7' && !allText.includes('24/7')) return false;
                if (amenityValue === 'classes' && !allText.includes('class')) return false;
                if (amenityValue === 'training' && !allText.includes('training')) return false;
                if (amenityValue === 'recovery' && !allText.includes('recovery') && !allText.includes('massage') && !allText.includes('sauna')) return false;
            }
            
            return true;
        });
        
        // Update the table with filtered data
        const tableBody = document.querySelector('#comparison-table tbody');
        tableBody.innerHTML = '';
        
        filteredGyms.forEach(gym => {
            const row = document.createElement('tr');
            if (gym.isPremium) {
                row.classList.add('premium-row');
            }
            
            // Create gym name cell with logo
            const nameCell = document.createElement('td');
            nameCell.className = 'gym-name-cell';
            
            const logoImg = document.createElement('img');
            logoImg.src = gym.logo;
            logoImg.alt = `${gym.name} logo`;
            logoImg.className = 'gym-logo-small';
            
            const nameSpan = document.createElement('span');
            nameSpan.textContent = gym.name;
            if (gym.isPremium) {
                const premiumBadge = document.createElement('span');
                premiumBadge.className = 'premium-badge';
                premiumBadge.textContent = 'Premium';
                premiumBadge.style.fontSize = '0.7rem';
                premiumBadge.style.padding = '2px 8px';
                premiumBadge.style.marginLeft = '8px';
                nameCell.appendChild(logoImg);
                nameCell.appendChild(nameSpan);
                nameCell.appendChild(premiumBadge);
            } else {
                nameCell.appendChild(logoImg);
                nameCell.appendChild(nameSpan);
            }
            
            // Create other cells
            const typeCell = document.createElement('td');
            typeCell.textContent = gym.type;
            
            const priceCell = document.createElement('td');
            priceCell.textContent = gym.price;
            
            const hoursCell = document.createElement('td');
            hoursCell.textContent = gym.hours;
            
            const featuresCell = document.createElement('td');
            const featuresList = document.createElement('ul');
            featuresList.style.margin = '0';
            featuresList.style.paddingLeft = '20px';
            
            gym.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.textContent = feature;
                featuresList.appendChild(featureItem);
            });
            
            featuresCell.appendChild(featuresList);
            
            const ratingCell = document.createElement('td');
            const ratingStars = document.createElement('div');
            ratingStars.className = 'star-rating';
            
            // Create star rating
            const fullStars = Math.floor(gym.rating);
            const hasHalfStar = gym.rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                ratingStars.innerHTML += '★';
            }
            
            if (hasHalfStar) {
                ratingStars.innerHTML += '½';
            }
            
            const ratingText = document.createElement('div');
            ratingText.textContent = `${gym.rating} (${gym.reviews} reviews)`;
            
            ratingCell.appendChild(ratingStars);
            ratingCell.appendChild(ratingText);
            
            // Add all cells to the row
            row.appendChild(nameCell);
            row.appendChild(typeCell);
            row.appendChild(priceCell);
            row.appendChild(hoursCell);
            row.appendChild(featuresCell);
            row.appendChild(ratingCell);
            
            // Add the row to the table
            tableBody.appendChild(row);
        });
    };
    
    // Add event listeners to filters
    typeFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    amenityFilter.addEventListener('change', applyFilters);
}

// Set up FAQ toggle functionality
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
}

// Set up fitness matcher functionality
function setupMatcher() {
    const questions = document.querySelectorAll('.matcher-question');
    const result = document.getElementById('matcher-result');
    const resultContent = document.getElementById('result-content');
    const restartButton = document.getElementById('restart-matcher');
    
    if (!questions.length || !result || !resultContent || !restartButton) return;
    
    let currentQuestion = 0;
    const answers = {};
    
    // Set up option buttons
    questions.forEach((question, index) => {
        const options = question.querySelectorAll('.matcher-option');
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                // Store the answer
                answers[`question${index + 1}`] = option.getAttribute('data-value');
                
                // Hide current question
                question.classList.remove('active');
                
                // Show next question or result
                if (index < questions.length - 1) {
                    questions[index + 1].classList.add('active');
                    currentQuestion = index + 1;
                } else {
                    // Show result
                    showResult();
                    result.classList.add('active');
                }
            });
        });
    });
    
    // Restart button
    restartButton.addEventListener('click', () => {
        // Reset answers
        for (let key in answers) {
            delete answers[key];
        }
        
        // Hide result
        result.classList.remove('active');
        
        // Show first question
        questions.forEach(q => q.classList.remove('active'));
        questions[0].classList.add('active');
        currentQuestion = 0;
    });
    
    // Function to determine the best gym match based on answers
    function showResult() {
        let bestMatch;
        
        // Updated matching algorithm based on specific user requirements
        if (answers.question1 === 'weight-loss') {
            if (answers.question2 === 'small-studio') {
                if (answers.question3 === 'mid-range') {
                    // Weight Loss > small group > $50-$100
                    bestMatch = gymsData.find(gym => gym.id === 'studiostrong');
                } else if (answers.question3 === 'premium') {
                    // Weight Loss > small group > $100+
                    bestMatch = gymsData.find(gym => gym.id === 'f45');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === '9round');
                }
            } else if (answers.question2 === 'private') {
                if (answers.question3 === 'premium') {
                    // Weight Loss > private > $100+
                    bestMatch = gymsData.find(gym => gym.id === 'studiostrong');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'absoluteflow');
                }
            } else if (answers.question2 === 'group-classes') {
                if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'orangetheory');
                } else if (answers.question3 === 'mid-range') {
                    bestMatch = gymsData.find(gym => gym.id === '9round');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'clubfitness');
                }
            } else {
                // Large gym
                if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'f45');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'clubfitness');
                }
            }
        } else if (answers.question1 === 'muscle-gain') {
            if (answers.question2 === 'small-studio') {
                if (answers.question3 === 'mid-range') {
                    // Muscle Gain > small group > $50-$100
                    bestMatch = gymsData.find(gym => gym.id === 'studiostrong');
                } else if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'ironsharp');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'fitnesszone');
                }
            } else if (answers.question2 === 'private') {
                if (answers.question3 === 'premium') {
                    // Muscle Gain > private > $100+
                    bestMatch = gymsData.find(gym => gym.id === 'studiostrong');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'ironsharp');
                }
            } else if (answers.question2 === 'group-classes') {
                if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'ironsharp');
                } else if (answers.question3 === 'mid-range') {
                    bestMatch = gymsData.find(gym => gym.id === 'ymca');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'clubfitness');
                }
            } else {
                // Large gym
                if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'c1fit');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'anytimefitness');
                }
            }
        } else if (answers.question1 === 'specialized') {
            if (answers.question2 === 'private') {
                if (answers.question3 === 'premium') {
                    // Specialized training > private > $100+
                    bestMatch = gymsData.find(gym => gym.id === 'studiostrong');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'absoluteflow');
                }
            } else if (answers.question2 === 'small-studio') {
                if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'absoluteflow');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === '9round');
                }
            } else if (answers.question2 === 'group-classes') {
                if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'crossfitvoyage');
                } else if (answers.question3 === 'mid-range') {
                    bestMatch = gymsData.find(gym => gym.id === 'crossfitcheetah');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === '9round');
                }
            } else {
                // Large gym
                if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'f45');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'clubfitness');
                }
            }
        } else {
            // General fitness
            if (answers.question2 === 'group-classes') {
                if (answers.question3 === 'mid-range') {
                    // General Fitness > group setting > $50-$100
                    bestMatch = gymsData.find(gym => gym.id === 'studiostrong');
                } else if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'f45');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'ymca');
                }
            } else if (answers.question2 === 'private') {
                if (answers.question3 === 'premium') {
                    // General Fitness > private > $100+
                    bestMatch = gymsData.find(gym => gym.id === 'studiostrong');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'absoluteflow');
                }
            } else if (answers.question2 === 'small-studio') {
                if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'c1fit');
                } else if (answers.question3 === 'mid-range') {
                    bestMatch = gymsData.find(gym => gym.id === '9round');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'fitnesszone');
                }
            } else {
                // Large gym
                if (answers.question3 === 'premium') {
                    bestMatch = gymsData.find(gym => gym.id === 'c1fit');
                } else if (answers.question3 === 'mid-range') {
                    bestMatch = gymsData.find(gym => gym.id === 'ymca');
                } else {
                    bestMatch = gymsData.find(gym => gym.id === 'clubfitness');
                }
            }
        }
        
        // Default to StudioStrong if no match found
        if (!bestMatch) {
            bestMatch = gymsData.find(gym => gym.id === 'studiostrong');
        }
        
        // Create result content
        resultContent.innerHTML = '';
        
        const resultCard = document.createElement('div');
        resultCard.className = 'profile-card';
        if (bestMatch.isPremium) {
            resultCard.classList.add('premium-card');
        }
        
        // Create profile header
        const profileHeader = document.createElement('div');
        profileHeader.className = 'profile-header';
        
        const logoImg = document.createElement('img');
        logoImg.src = bestMatch.logo;
        logoImg.alt = `${bestMatch.name} logo`;
        logoImg.className = 'profile-logo';
        
        const profileTitle = document.createElement('div');
        profileTitle.className = 'profile-title';
        
        const nameHeading = document.createElement('h3');
        nameHeading.textContent = bestMatch.name;
        if (bestMatch.isPremium) {
            const premiumBadge = document.createElement('span');
            premiumBadge.className = 'premium-badge';
            premiumBadge.textContent = 'Premium';
            premiumBadge.style.fontSize = '0.7rem';
            premiumBadge.style.padding = '2px 8px';
            premiumBadge.style.marginLeft = '8px';
            nameHeading.appendChild(premiumBadge);
        }
        
        const typeText = document.createElement('div');
        typeText.className = 'profile-type';
        typeText.textContent = bestMatch.type;
        
        profileTitle.appendChild(nameHeading);
        profileTitle.appendChild(typeText);
        
        profileHeader.appendChild(logoImg);
        profileHeader.appendChild(profileTitle);
        
        // Create profile body
        const profileBody = document.createElement('div');
        profileBody.className = 'profile-body';
        
        const matchText = document.createElement('p');
        matchText.innerHTML = `Based on your preferences, <strong>${bestMatch.name}</strong> is your ideal gym match! Here's why:`;
        
        const featuresList = document.createElement('ul');
        
        bestMatch.features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.textContent = feature;
            featuresList.appendChild(featureItem);
        });
        
        const visitLink = document.createElement('a');
        visitLink.href = bestMatch.website;
        visitLink.target = '_blank';
        visitLink.className = 'btn btn-primary';
        visitLink.style.marginTop = '20px';
        visitLink.style.display = 'inline-block';
        visitLink.textContent = `Visit ${bestMatch.name}`;
        
        profileBody.appendChild(matchText);
        profileBody.appendChild(featuresList);
        profileBody.appendChild(visitLink);
        
        // Assemble the complete result card
        resultCard.appendChild(profileHeader);
        resultCard.appendChild(profileBody);
        
        resultContent.appendChild(resultCard);
    }
}

// Advanced Visitor Intelligence System
// Analyzes visitor data to extract meaningful business insights

class AdvancedVisitorIntelligence {
    constructor() {
        this.analysisResults = {};
        this.intelligenceData = {};
        this.visitorProfiles = {};
    }

    // Analyze visitor data and extract intelligence
    analyzeVisitorData(visitorData) {
        console.log('🔍 Starting advanced visitor intelligence analysis...');
        
        const analysis = {
            timestamp: new Date().toISOString(),
            visitorId: this.generateVisitorId(visitorData),
            
            // Device Intelligence
            deviceProfile: this.analyzeDeviceProfile(visitorData),
            
            // Geographic Intelligence
            locationIntelligence: this.analyzeLocationIntelligence(visitorData),
            
            // Behavioral Intelligence
            behaviorProfile: this.analyzeBehaviorProfile(visitorData),
            
            // Professional Context
            professionalContext: this.analyzeProfessionalContext(visitorData),
            
            // Risk Assessment
            riskProfile: this.analyzeRiskProfile(visitorData),
            
            // Lead Quality Assessment
            leadQuality: this.assessLeadQuality(visitorData),
            
            // Business Intelligence
            businessIntelligence: this.analyzeBusinessIntelligence(visitorData),
            
            // Technical Intelligence
            technicalProfile: this.analyzeTechnicalProfile(visitorData),
            
            // Engagement Intelligence
            engagementProfile: this.analyzeEngagementProfile(visitorData)
        };

        this.analysisResults = analysis;
        return analysis;
    }

    // Generate unique visitor ID based on fingerprinting
    generateVisitorId(visitorData) {
        const fingerprint = [
            visitorData.fingerprintId,
            visitorData.canvasFingerprint?.substring(0, 20),
            visitorData.audioFingerprint,
            visitorData.screenResolution,
            visitorData.userAgent?.substring(0, 50)
        ].filter(Boolean).join('_');
        
        return this.hashString(fingerprint);
    }

    // Analyze device profile for professional context
    analyzeDeviceProfile(visitorData) {
        const profile = {
            deviceType: this.classifyDevice(visitorData),
            professionalGrade: this.assessProfessionalGrade(visitorData),
            hardwareCapabilities: this.analyzeHardwareCapabilities(visitorData),
            displayQuality: this.analyzeDisplayQuality(visitorData),
            performanceTier: this.assessPerformanceTier(visitorData)
        };

        return profile;
    }

    // Analyze display quality
    analyzeDisplayQuality(visitorData) {
        const { screenResolution, colorDepth, pixelRatio } = visitorData;
        
        let qualityScore = 0;
        
        // Resolution assessment
        const [width, height] = screenResolution.split('x').map(Number);
        if (width >= 1920 && height >= 1080) qualityScore += 30;
        else if (width >= 1440 && height >= 900) qualityScore += 25;
        else if (width >= 1366 && height >= 768) qualityScore += 20;
        else if (width >= 1024 && height >= 768) qualityScore += 15;
        
        // Color depth assessment
        if (colorDepth >= 30) qualityScore += 25;
        else if (colorDepth >= 24) qualityScore += 20;
        else if (colorDepth >= 16) qualityScore += 15;
        
        // Pixel ratio assessment
        if (pixelRatio >= 2) qualityScore += 25;
        else if (pixelRatio >= 1.5) qualityScore += 20;
        else if (pixelRatio >= 1) qualityScore += 15;
        
        if (qualityScore >= 70) return 'Professional Grade';
        if (qualityScore >= 50) return 'High Quality';
        if (qualityScore >= 30) return 'Standard Quality';
        return 'Basic Quality';
    }

    // Assess performance tier
    assessPerformanceTier(visitorData) {
        const { hardwareConcurrency, deviceMemory, colorDepth, pixelRatio } = visitorData;
        
        let score = 0;
        score += (hardwareConcurrency / 16) * 30; // Max 30 points for CPU
        score += (deviceMemory / 16) * 30; // Max 30 points for RAM
        score += (colorDepth / 32) * 20; // Max 20 points for color depth
        score += Math.min(pixelRatio, 3) * 10; // Max 20 points for pixel ratio
        
        if (score >= 80) return 'High Performance';
        if (score >= 60) return 'Medium Performance';
        if (score >= 40) return 'Standard Performance';
        return 'Basic Performance';
    }

    // Classify device type and quality
    classifyDevice(visitorData) {
        const { device, screenResolution, pixelRatio, colorDepth, hardwareConcurrency, deviceMemory } = visitorData;
        
        // MacBook Pro detection
        if (device === 'Desktop' && screenResolution === '1512x982' && pixelRatio === 2) {
            return 'Apple MacBook Pro (M1 Pro)';
        }
        
        // Professional desktop detection
        if (hardwareConcurrency >= 8 && deviceMemory >= 8 && colorDepth >= 24) {
            return 'Professional Workstation';
        }
        
        // High-end mobile detection
        if (device === 'Mobile' && pixelRatio >= 2) {
            return 'High-End Mobile Device';
        }
        
        return 'Standard Device';
    }

    // Assess professional grade of device
    assessProfessionalGrade(visitorData) {
        const { hardwareConcurrency, deviceMemory, colorDepth, pixelRatio, screenResolution } = visitorData;
        
        let score = 0;
        
        // CPU assessment
        if (hardwareConcurrency >= 8) score += 25;
        else if (hardwareConcurrency >= 4) score += 15;
        
        // Memory assessment
        if (deviceMemory >= 8) score += 25;
        else if (deviceMemory >= 4) score += 15;
        
        // Display assessment
        if (colorDepth >= 30) score += 20;
        else if (colorDepth >= 24) score += 15;
        
        // Resolution assessment
        if (pixelRatio >= 2) score += 15;
        else if (pixelRatio >= 1.5) score += 10;
        
        // Screen size assessment
        const [width, height] = screenResolution.split('x').map(Number);
        if (width >= 1440 && height >= 900) score += 15;
        
        if (score >= 80) return 'Professional Grade';
        if (score >= 60) return 'High-End Consumer';
        if (score >= 40) return 'Mid-Range';
        return 'Basic';
    }

    // Analyze hardware capabilities
    analyzeHardwareCapabilities(visitorData) {
        const { hardwareConcurrency, deviceMemory, maxTouchPoints, webglSupport, canvasSupport } = visitorData;
        
        return {
            cpuCores: hardwareConcurrency,
            memoryGB: deviceMemory,
            touchCapable: maxTouchPoints > 0,
            graphicsCapable: webglSupport && canvasSupport,
            performanceScore: this.calculatePerformanceScore(visitorData)
        };
    }

    // Calculate performance score
    calculatePerformanceScore(visitorData) {
        const { hardwareConcurrency, deviceMemory, colorDepth, pixelRatio } = visitorData;
        
        let score = 0;
        score += (hardwareConcurrency / 16) * 30; // Max 30 points for CPU
        score += (deviceMemory / 16) * 30; // Max 30 points for RAM
        score += (colorDepth / 32) * 20; // Max 20 points for color depth
        score += Math.min(pixelRatio, 3) * 10; // Max 20 points for pixel ratio
        
        return Math.min(Math.round(score), 100);
    }

    // Analyze location intelligence
    analyzeLocationIntelligence(visitorData) {
        const { city, region, country, isp, postal, latitude, longitude } = visitorData;
        
        return {
            geographicContext: this.assessGeographicContext(visitorData),
            businessDistrict: this.isBusinessDistrict(postal, city),
            techHub: this.isTechHub(city, country),
            networkQuality: this.assessNetworkQuality(visitorData),
            marketOpportunity: this.assessMarketOpportunity(visitorData)
        };
    }

    // Assess network quality
    assessNetworkQuality(visitorData) {
        const { connectionType, connectionSpeed, connectionRTT, isp } = visitorData;
        
        let quality = 0;
        
        // Connection type
        if (connectionType === '4g' || connectionType === 'wifi') quality += 30;
        else if (connectionType === '3g') quality += 20;
        else if (connectionType === '2g') quality += 10;
        
        // Connection speed
        if (connectionSpeed >= 10) quality += 30;
        else if (connectionSpeed >= 5) quality += 20;
        else if (connectionSpeed >= 2) quality += 15;
        
        // Connection latency
        if (connectionRTT <= 50) quality += 20;
        else if (connectionRTT <= 100) quality += 15;
        else if (connectionRTT <= 200) quality += 10;
        
        // ISP quality
        if (isp && isp.includes('Limited')) quality += 20;
        else if (isp && isp.includes('Corp')) quality += 15;
        
        if (quality >= 80) return 'Excellent Network Quality';
        if (quality >= 60) return 'Good Network Quality';
        if (quality >= 40) return 'Average Network Quality';
        if (quality >= 20) return 'Poor Network Quality';
        return 'Very Poor Network Quality';
    }

    // Assess geographic context
    assessGeographicContext(visitorData) {
        const { city, country, postal } = visitorData;
        
        // Delhi business district detection
        if (city === 'Delhi' && postal === '110001') {
            return 'Major Business District';
        }
        
        // Tech hub detection
        const techHubs = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];
        if (techHubs.includes(city)) {
            return 'Technology Hub';
        }
        
        // Metropolitan area detection
        if (city && country === 'India') {
            return 'Indian Metropolitan Area';
        }
        
        return 'Standard Location';
    }

    // Check if location is business district
    isBusinessDistrict(postal, city) {
        // Delhi business district postal codes
        const businessPostals = ['110001', '110002', '110003', '110004', '110005'];
        return businessPostals.includes(postal);
    }

    // Check if location is tech hub
    isTechHub(city, country) {
        const techHubs = {
            'India': ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'],
            'United States': ['San Francisco', 'New York', 'Seattle', 'Austin', 'Boston'],
            'United Kingdom': ['London', 'Manchester', 'Birmingham'],
            'Canada': ['Toronto', 'Vancouver', 'Montreal']
        };
        
        return techHubs[country]?.includes(city) || false;
    }

    // Analyze behavior profile
    analyzeBehaviorProfile(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements, clicksDetected, sectionsVisited } = visitorData;
        
        return {
            engagementLevel: this.assessEngagementLevel(visitorData),
            intentLevel: this.assessIntentLevel(visitorData),
            behaviorPattern: this.classifyBehaviorPattern(visitorData),
            attentionSpan: this.assessAttentionSpan(visitorData),
            interactionQuality: this.assessInteractionQuality(visitorData)
        };
    }

    // Classify behavior pattern
    classifyBehaviorPattern(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements, clicksDetected, sectionsVisited } = visitorData;
        
        // Deep researcher pattern
        if (timeOnPage >= 300 && scrollPercentage >= 75 && sectionsVisited >= 4) {
            return 'Deep Researcher - Comprehensive Exploration';
        }
        
        // Casual browser pattern
        if (timeOnPage >= 60 && scrollPercentage >= 25 && sectionsVisited >= 2) {
            return 'Casual Browser - Moderate Interest';
        }
        
        // Quick scanner pattern
        if (timeOnPage >= 30 && scrollPercentage >= 10 && sectionsVisited >= 1) {
            return 'Quick Scanner - Basic Interest';
        }
        
        // Bounce pattern
        if (timeOnPage < 30 && scrollPercentage < 10) {
            return 'Bounce - No Interest';
        }
        
        return 'Unknown Pattern';
    }

    // Assess attention span
    assessAttentionSpan(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements } = visitorData;
        
        if (timeOnPage < 10) return 'Very Short (Under 10s)';
        if (timeOnPage < 30) return 'Short (10-30s)';
        if (timeOnPage < 120) return 'Medium (30s-2min)';
        if (timeOnPage < 300) return 'Long (2-5min)';
        return 'Very Long (5min+)';
    }

    // Assess interaction quality
    assessInteractionQuality(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements, clicksDetected } = visitorData;
        
        let quality = 0;
        
        // Time quality
        if (timeOnPage >= 300) quality += 30;
        else if (timeOnPage >= 120) quality += 20;
        else if (timeOnPage >= 60) quality += 15;
        else if (timeOnPage >= 30) quality += 10;
        
        // Scroll quality
        if (scrollPercentage >= 75) quality += 25;
        else if (scrollPercentage >= 50) quality += 20;
        else if (scrollPercentage >= 25) quality += 15;
        else if (scrollPercentage >= 10) quality += 10;
        
        // Mouse activity quality
        if (mouseMovements >= 100) quality += 25;
        else if (mouseMovements >= 50) quality += 20;
        else if (mouseMovements >= 25) quality += 15;
        else if (mouseMovements >= 10) quality += 10;
        
        // Click quality
        if (clicksDetected >= 5) quality += 20;
        else if (clicksDetected >= 3) quality += 15;
        else if (clicksDetected >= 1) quality += 10;
        
        if (quality >= 80) return 'Excellent Interaction Quality';
        if (quality >= 60) return 'Good Interaction Quality';
        if (quality >= 40) return 'Average Interaction Quality';
        if (quality >= 20) return 'Poor Interaction Quality';
        return 'Very Poor Interaction Quality';
    }

    // Assess engagement level
    assessEngagementLevel(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements, clicksDetected } = visitorData;
        
        let score = 0;
        
        // Time on page (max 40 points)
        if (timeOnPage >= 300) score += 40; // 5+ minutes
        else if (timeOnPage >= 120) score += 30; // 2+ minutes
        else if (timeOnPage >= 60) score += 20; // 1+ minute
        else if (timeOnPage >= 30) score += 10; // 30+ seconds
        
        // Scroll depth (max 30 points)
        if (scrollPercentage >= 90) score += 30;
        else if (scrollPercentage >= 75) score += 25;
        else if (scrollPercentage >= 50) score += 20;
        else if (scrollPercentage >= 25) score += 10;
        
        // Mouse movements (max 20 points)
        if (mouseMovements >= 100) score += 20;
        else if (mouseMovements >= 50) score += 15;
        else if (mouseMovements >= 25) score += 10;
        else if (mouseMovements >= 10) score += 5;
        
        // Clicks (max 10 points)
        if (clicksDetected >= 5) score += 10;
        else if (clicksDetected >= 3) score += 7;
        else if (clicksDetected >= 1) score += 5;
        
        if (score >= 80) return 'Very High Engagement';
        if (score >= 60) return 'High Engagement';
        if (score >= 40) return 'Medium Engagement';
        if (score >= 20) return 'Low Engagement';
        return 'Very Low Engagement';
    }

    // Assess intent level
    assessIntentLevel(visitorData) {
        const { timeOnPage, scrollPercentage, clicksDetected, sectionsVisited } = visitorData;
        
        // High intent indicators
        const highIntent = timeOnPage >= 120 && scrollPercentage >= 50 && clicksDetected >= 2;
        const mediumIntent = timeOnPage >= 60 && scrollPercentage >= 25;
        const lowIntent = timeOnPage < 30 && scrollPercentage < 10;
        
        if (highIntent) return 'High Intent';
        if (mediumIntent) return 'Medium Intent';
        if (lowIntent) return 'Low Intent';
        return 'Unknown Intent';
    }

    // Analyze professional context
    analyzeProfessionalContext(visitorData) {
        const { device, isp, screenResolution, hardwareConcurrency, deviceMemory } = visitorData;
        
        return {
            likelyProfession: this.guessProfession(visitorData),
            companySize: this.estimateCompanySize(visitorData),
            industrySector: this.guessIndustry(visitorData),
            decisionMakingAuthority: this.assessDecisionAuthority(visitorData),
            technicalSophistication: this.assessTechnicalSophistication(visitorData)
        };
    }

    // Assess decision-making authority
    assessDecisionAuthority(visitorData) {
        const { device, hardwareConcurrency, deviceMemory, isp } = visitorData;
        
        // Professional device indicators
        if (device === 'Desktop' && hardwareConcurrency >= 8 && deviceMemory >= 8) {
            return 'High Authority - Professional Setup';
        }
        
        // Corporate network indicators
        if (isp && isp.includes('Limited') && device === 'Desktop') {
            return 'Medium Authority - Corporate Network';
        }
        
        // Standard professional indicators
        if (device === 'Desktop' && hardwareConcurrency >= 4) {
            return 'Medium Authority - Professional User';
        }
        
        return 'Low Authority - Standard User';
    }

    // Assess technical sophistication
    assessTechnicalSophistication(visitorData) {
        const { browser, browserVersion, os, osVersion, webglSupport, canvasSupport } = visitorData;
        
        let sophistication = 0;
        
        // Browser sophistication
        if (browser === 'Chrome' && browserVersion >= '100') sophistication += 25;
        else if (browser === 'Firefox' && browserVersion >= '100') sophistication += 20;
        else if (browser === 'Safari' && browserVersion >= '15') sophistication += 20;
        
        // OS sophistication
        if (os === 'macOS' && osVersion >= '10.15') sophistication += 25;
        else if (os === 'Windows' && osVersion.includes('10')) sophistication += 20;
        else if (os === 'Linux') sophistication += 25;
        
        // Technical capabilities
        if (webglSupport && canvasSupport) sophistication += 25;
        else if (canvasSupport) sophistication += 15;
        
        // Security awareness
        if (visitorData.httpsEnabled && visitorData.secureContext) sophistication += 25;
        
        if (sophistication >= 80) return 'Very High - Technical Expert';
        if (sophistication >= 60) return 'High - Technical Professional';
        if (sophistication >= 40) return 'Medium - Technical User';
        if (sophistication >= 20) return 'Low - Basic User';
        return 'Very Low - Non-Technical User';
    }

    // Guess profession based on device and behavior
    guessProfession(visitorData) {
        const { device, screenResolution, colorDepth, hardwareConcurrency, browser } = visitorData;
        
        // Developer indicators
        if (device === 'Desktop' && hardwareConcurrency >= 8 && browser?.includes('Chrome')) {
            return 'Software Developer';
        }
        
        // Designer indicators
        if (colorDepth >= 30 && screenResolution.includes('1512')) {
            return 'Design Professional';
        }
        
        // Business professional indicators
        if (device === 'Desktop' && hardwareConcurrency >= 4) {
            return 'Business Professional';
        }
        
        return 'General User';
    }

    // Estimate company size based on network and device
    estimateCompanySize(visitorData) {
        const { isp, device, hardwareConcurrency, deviceMemory } = visitorData;
        
        // Large company indicators
        if (isp?.includes('Limited') && device === 'Desktop' && hardwareConcurrency >= 8) {
            return 'Large Enterprise';
        }
        
        // Medium company indicators
        if (device === 'Desktop' && hardwareConcurrency >= 4) {
            return 'Medium Business';
        }
        
        // Small company indicators
        if (device === 'Desktop') {
            return 'Small Business';
        }
        
        return 'Individual/Startup';
    }

    // Guess industry based on ISP and location
    guessIndustry(visitorData) {
        const { isp, city, country } = visitorData;
        
        if (isp?.includes('Jio')) {
            return 'Telecommunications/Technology';
        }
        
        if (city === 'Delhi' && country === 'India') {
            return 'Technology/Consulting';
        }
        
        return 'General Business';
    }

    // Analyze risk profile
    analyzeRiskProfile(visitorData) {
        const { proxy, hosting, mobile, isp } = visitorData;
        
        return {
            riskLevel: this.assessRiskLevel(visitorData),
            threatIndicators: this.identifyThreatIndicators(visitorData),
            trustScore: this.calculateTrustScore(visitorData),
            securityAssessment: this.assessSecurity(visitorData)
        };
    }

    // Identify threat indicators
    identifyThreatIndicators(visitorData) {
        const { proxy, hosting, mobile, isp } = visitorData;
        const indicators = [];
        
        if (proxy) indicators.push('Proxy detected');
        if (hosting) indicators.push('Hosting/VPN detected');
        if (!visitorData.httpsEnabled) indicators.push('Insecure connection');
        if (visitorData.webdriver) indicators.push('Automated browser detected');
        
        return indicators.length > 0 ? indicators.join(', ') : 'No threats detected';
    }

    // Assess security
    assessSecurity(visitorData) {
        const { httpsEnabled, secureContext, proxy, hosting } = visitorData;
        
        if (httpsEnabled && secureContext && !proxy && !hosting) {
            return 'High Security - Clean Connection';
        }
        
        if (httpsEnabled && secureContext) {
            return 'Medium Security - Secure but with indicators';
        }
        
        if (httpsEnabled) {
            return 'Low Security - Basic HTTPS only';
        }
        
        return 'Very Low Security - Insecure connection';
    }

    // Assess risk level
    assessRiskLevel(visitorData) {
        const { proxy, hosting, mobile } = visitorData;
        
        if (proxy || hosting) return 'Medium Risk';
        if (mobile) return 'Low Risk';
        return 'Very Low Risk';
    }

    // Calculate trust score
    calculateTrustScore(visitorData) {
        const { proxy, hosting, mobile, httpsEnabled, secureContext } = visitorData;
        
        let score = 100;
        
        if (proxy) score -= 30;
        if (hosting) score -= 20;
        if (!httpsEnabled) score -= 20;
        if (!secureContext) score -= 15;
        
        return Math.max(score, 0);
    }

    // Assess lead quality
    assessLeadQuality(visitorData) {
        const engagementLevel = this.assessEngagementLevel(visitorData);
        const professionalGrade = this.assessProfessionalGrade(visitorData);
        const geographicContext = this.assessGeographicContext(visitorData);
        
        let qualityScore = 0;
        
        // Engagement quality (40%)
        if (engagementLevel.includes('Very High')) qualityScore += 40;
        else if (engagementLevel.includes('High')) qualityScore += 30;
        else if (engagementLevel.includes('Medium')) qualityScore += 20;
        else if (engagementLevel.includes('Low')) qualityScore += 10;
        
        // Professional grade (30%)
        if (professionalGrade === 'Professional Grade') qualityScore += 30;
        else if (professionalGrade === 'High-End Consumer') qualityScore += 20;
        else if (professionalGrade === 'Mid-Range') qualityScore += 10;
        
        // Geographic context (30%)
        if (geographicContext.includes('Business District')) qualityScore += 30;
        else if (geographicContext.includes('Technology Hub')) qualityScore += 25;
        else if (geographicContext.includes('Metropolitan')) qualityScore += 15;
        
        if (qualityScore >= 80) return 'High-Quality Lead';
        if (qualityScore >= 60) return 'Medium-Quality Lead';
        if (qualityScore >= 40) return 'Low-Quality Lead';
        return 'Poor Lead';
    }

    // Analyze business intelligence
    analyzeBusinessIntelligence(visitorData) {
        return {
            marketOpportunity: this.assessMarketOpportunity(visitorData),
            competitiveLandscape: this.analyzeCompetitiveLandscape(visitorData),
            revenuePotential: this.assessRevenuePotential(visitorData),
            conversionProbability: this.assessConversionProbability(visitorData)
        };
    }

    // Analyze competitive landscape
    analyzeCompetitiveLandscape(visitorData) {
        const { city, country, device } = visitorData;
        
        if (city === 'Delhi' && country === 'India') {
            return 'High Competition - Major Tech Hub';
        }
        
        if (country === 'India' && device === 'Desktop') {
            return 'Medium Competition - Growing Market';
        }
        
        return 'Standard Competition';
    }

    // Assess revenue potential
    assessRevenuePotential(visitorData) {
        const { device, city, country, timeOnPage, scrollPercentage } = visitorData;
        
        let potential = 0;
        
        // Device quality
        if (device === 'Desktop') potential += 30;
        else if (device === 'Mobile') potential += 15;
        
        // Geographic value
        if (city === 'Delhi' && country === 'India') potential += 25;
        else if (country === 'India') potential += 15;
        
        // Engagement quality
        if (timeOnPage >= 300 && scrollPercentage >= 75) potential += 25;
        else if (timeOnPage >= 120 && scrollPercentage >= 50) potential += 15;
        
        if (potential >= 70) return 'High Revenue Potential';
        if (potential >= 50) return 'Medium Revenue Potential';
        return 'Low Revenue Potential';
    }

    // Assess conversion probability
    assessConversionProbability(visitorData) {
        const { timeOnPage, scrollPercentage, clicksDetected, device } = visitorData;
        
        let probability = 0;
        
        // Engagement factors
        if (timeOnPage >= 300) probability += 30;
        else if (timeOnPage >= 120) probability += 20;
        else if (timeOnPage >= 60) probability += 10;
        
        // Interaction factors
        if (scrollPercentage >= 75) probability += 25;
        else if (scrollPercentage >= 50) probability += 15;
        else if (scrollPercentage >= 25) probability += 10;
        
        // Click factors
        if (clicksDetected >= 5) probability += 25;
        else if (clicksDetected >= 3) probability += 15;
        else if (clicksDetected >= 1) probability += 10;
        
        // Device factors
        if (device === 'Desktop') probability += 20;
        else if (device === 'Mobile') probability += 10;
        
        if (probability >= 80) return 'Very High (80%+)';
        if (probability >= 60) return 'High (60-79%)';
        if (probability >= 40) return 'Medium (40-59%)';
        if (probability >= 20) return 'Low (20-39%)';
        return 'Very Low (<20%)';
    }

    // Assess market opportunity
    assessMarketOpportunity(visitorData) {
        const { city, country, isp, device } = visitorData;
        
        if (city === 'Delhi' && country === 'India' && device === 'Desktop') {
            return 'High Market Opportunity';
        }
        
        if (country === 'India' && device === 'Desktop') {
            return 'Medium Market Opportunity';
        }
        
        return 'Standard Market Opportunity';
    }

    // Analyze technical profile
    analyzeTechnicalProfile(visitorData) {
        const { browser, browserVersion, os, osVersion, webglSupport, canvasSupport } = visitorData;
        
        return {
            browserCapabilities: this.assessBrowserCapabilities(visitorData),
            osCapabilities: this.assessOSCapabilities(visitorData),
            graphicsCapabilities: this.assessGraphicsCapabilities(visitorData),
            securityProfile: this.assessSecurityProfile(visitorData)
        };
    }

    // Assess browser capabilities
    assessBrowserCapabilities(visitorData) {
        const { browser, browserVersion } = visitorData;
        
        if (browser === 'Chrome' && browserVersion >= '100') return 'Modern Browser - Full Support';
        if (browser === 'Firefox' && browserVersion >= '100') return 'Modern Browser - Full Support';
        if (browser === 'Safari' && browserVersion >= '15') return 'Modern Browser - Full Support';
        if (browser === 'Edge' && browserVersion >= '100') return 'Modern Browser - Full Support';
        
        return 'Legacy Browser - Limited Support';
    }

    // Assess OS capabilities
    assessOSCapabilities(visitorData) {
        const { os, osVersion } = visitorData;
        
        if (os === 'macOS' && osVersion >= '10.15') return 'Modern OS - Full Support';
        if (os === 'Windows' && osVersion.includes('10')) return 'Modern OS - Full Support';
        if (os === 'Linux') return 'Modern OS - Full Support';
        
        return 'Legacy OS - Limited Support';
    }

    // Assess graphics capabilities
    assessGraphicsCapabilities(visitorData) {
        const { webglSupport, canvasSupport } = visitorData;
        
        if (webglSupport && canvasSupport) return 'Advanced Graphics - Full Support';
        if (canvasSupport) return 'Basic Graphics - Limited Support';
        return 'No Graphics Support';
    }

    // Assess security profile
    assessSecurityProfile(visitorData) {
        const { httpsEnabled, secureContext } = visitorData;
        
        if (httpsEnabled && secureContext) return 'Secure Connection - High Security';
        if (httpsEnabled) return 'Secure Connection - Medium Security';
        return 'Insecure Connection - Low Security';
    }

    // Analyze engagement profile
    analyzeEngagementProfile(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements, clicksDetected } = visitorData;
        
        return {
            attentionSpan: this.calculateAttentionSpan(visitorData),
            interactionPattern: this.analyzeInteractionPattern(visitorData),
            bounceRisk: this.assessBounceRisk(visitorData),
            retentionPotential: this.assessRetentionPotential(visitorData)
        };
    }

    // Analyze interaction pattern
    analyzeInteractionPattern(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements, clicksDetected } = visitorData;
        
        if (timeOnPage >= 300 && scrollPercentage >= 75 && clicksDetected >= 5) {
            return 'Highly Engaged - Deep Interaction';
        }
        
        if (timeOnPage >= 120 && scrollPercentage >= 50 && clicksDetected >= 2) {
            return 'Moderately Engaged - Good Interaction';
        }
        
        if (timeOnPage >= 60 && scrollPercentage >= 25 && clicksDetected >= 1) {
            return 'Lightly Engaged - Basic Interaction';
        }
        
        return 'Minimally Engaged - Poor Interaction';
    }

    // Assess retention potential
    assessRetentionPotential(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements, clicksDetected } = visitorData;
        
        let potential = 0;
        
        // Time-based retention
        if (timeOnPage >= 300) potential += 30;
        else if (timeOnPage >= 120) potential += 20;
        else if (timeOnPage >= 60) potential += 10;
        
        // Engagement-based retention
        if (scrollPercentage >= 75) potential += 25;
        else if (scrollPercentage >= 50) potential += 15;
        else if (scrollPercentage >= 25) potential += 10;
        
        // Interaction-based retention
        if (clicksDetected >= 5) potential += 25;
        else if (clicksDetected >= 3) potential += 15;
        else if (clicksDetected >= 1) potential += 10;
        
        // Activity-based retention
        if (mouseMovements >= 100) potential += 20;
        else if (mouseMovements >= 50) potential += 15;
        else if (mouseMovements >= 25) potential += 10;
        
        if (potential >= 80) return 'Very High Retention Potential';
        if (potential >= 60) return 'High Retention Potential';
        if (potential >= 40) return 'Medium Retention Potential';
        if (potential >= 20) return 'Low Retention Potential';
        return 'Very Low Retention Potential';
    }

    // Calculate attention span
    calculateAttentionSpan(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements } = visitorData;
        
        if (timeOnPage < 10) return 'Very Short (Under 10s)';
        if (timeOnPage < 30) return 'Short (10-30s)';
        if (timeOnPage < 120) return 'Medium (30s-2min)';
        if (timeOnPage < 300) return 'Long (2-5min)';
        return 'Very Long (5min+)';
    }

    // Assess bounce risk
    assessBounceRisk(visitorData) {
        const { timeOnPage, scrollPercentage, mouseMovements } = visitorData;
        
        if (timeOnPage < 10 && scrollPercentage < 5) return 'Very High Bounce Risk';
        if (timeOnPage < 30 && scrollPercentage < 10) return 'High Bounce Risk';
        if (timeOnPage < 60 && scrollPercentage < 25) return 'Medium Bounce Risk';
        return 'Low Bounce Risk';
    }

    // Generate comprehensive intelligence report
    generateIntelligenceReport(visitorData) {
        const analysis = this.analyzeVisitorData(visitorData);
        
        return {
            summary: this.generateSummary(analysis),
            recommendations: this.generateRecommendations(analysis),
            insights: this.generateInsights(analysis),
            actions: this.generateActions(analysis)
        };
    }

    // Generate summary
    generateSummary(analysis) {
        const { deviceProfile, leadQuality, behaviorProfile, locationIntelligence } = analysis;
        
        return {
            visitorType: deviceProfile && deviceProfile.deviceType ? `${deviceProfile.deviceType} User` : 'Unknown Device User',
            leadQuality: leadQuality || 'Unknown',
            engagementLevel: behaviorProfile && behaviorProfile.engagementLevel ? behaviorProfile.engagementLevel : 'Unknown',
            geographicContext: locationIntelligence && locationIntelligence.geographicContext ? locationIntelligence.geographicContext : 'Unknown',
            professionalGrade: deviceProfile && deviceProfile.professionalGrade ? deviceProfile.professionalGrade : 'Unknown'
        };
    }

    // Generate recommendations
    generateRecommendations(analysis) {
        const recommendations = [];
        
        if (analysis.behaviorProfile && analysis.behaviorProfile.engagementLevel && analysis.behaviorProfile.engagementLevel.includes('Low')) {
            recommendations.push('Optimize first 10 seconds to capture attention');
        }
        
        if (analysis.deviceProfile && analysis.deviceProfile.professionalGrade === 'Professional Grade') {
            recommendations.push('Target with professional development content');
        }
        
        if (analysis.locationIntelligence && analysis.locationIntelligence.geographicContext && analysis.locationIntelligence.geographicContext.includes('Business District')) {
            recommendations.push('Focus on B2B messaging and corporate solutions');
        }
        
        if (analysis.behaviorProfile && analysis.behaviorProfile.bounceRisk && analysis.behaviorProfile.bounceRisk.includes('High')) {
            recommendations.push('A/B test hero section and loading speed');
        }
        
        if (analysis.locationIntelligence && analysis.locationIntelligence.techHub) {
            recommendations.push('Target with technology-focused content');
        }
        
        return recommendations;
    }

    // Generate insights
    generateInsights(analysis) {
        return {
            deviceInsights: analysis.deviceProfile && analysis.deviceProfile.deviceType ? `Professional ${analysis.deviceProfile.deviceType} with ${analysis.deviceProfile.performanceTier || 'standard'} performance` : 'Device analysis unavailable',
            locationInsights: analysis.locationIntelligence && analysis.locationIntelligence.geographicContext ? `${analysis.locationIntelligence.geographicContext} in ${analysis.locationIntelligence.marketOpportunity || 'standard'} market` : 'Location analysis unavailable',
            behaviorInsights: analysis.behaviorProfile && analysis.behaviorProfile.engagementLevel ? `${analysis.behaviorProfile.engagementLevel} with ${analysis.behaviorProfile.intentLevel || 'unknown'} intent` : 'Behavior analysis unavailable',
            professionalInsights: analysis.professionalContext && analysis.professionalContext.likelyProfession ? `${analysis.professionalContext.likelyProfession} at ${analysis.professionalContext.companySize || 'unknown company'}` : 'Professional context unavailable'
        };
    }

    // Generate actions
    generateActions(analysis) {
        const actions = [];
        
        if (analysis.leadQuality === 'High-Quality Lead') {
            actions.push('Prioritize for immediate follow-up');
        }
        
        if (analysis.behaviorProfile && analysis.behaviorProfile.bounceRisk && analysis.behaviorProfile.bounceRisk.includes('High')) {
            actions.push('A/B test hero section and loading speed');
        }
        
        if (analysis.locationIntelligence && analysis.locationIntelligence.techHub) {
            actions.push('Target with technology-focused content');
        }
        
        if (analysis.deviceProfile && analysis.deviceProfile.deviceType && analysis.deviceProfile.deviceType.includes('MacBook Pro')) {
            actions.push('Optimize for professional desktop experience');
        }
        
        if (analysis.behaviorProfile && analysis.behaviorProfile.engagementLevel && analysis.behaviorProfile.engagementLevel.includes('Low')) {
            actions.push('Improve content relevance and loading speed');
        }
        
        return actions;
    }

    // Hash string for ID generation
    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash).toString(36);
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedVisitorIntelligence;
} else {
    window.AdvancedVisitorIntelligence = AdvancedVisitorIntelligence;
}

// Automatic initialization - runs when page loads
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function initializeVisitorIntelligence() {
        console.log('🚀 Initializing Advanced Visitor Intelligence System...');
        
        // Create global instance
        window.visitorIntelligence = new AdvancedVisitorIntelligence();
        
        // Set up automatic analysis when visitor data is available
        let analysisInterval;
        let analysisAttempts = 0;
        const maxAttempts = 10;
        
        function runAutomaticAnalysis() {
            analysisAttempts++;
            
            // Check if visitor data is available
            if (window.visitorData && Object.keys(window.visitorData).length > 0) {
                console.log('📊 Running automatic visitor intelligence analysis...');
                console.log('🔍 Found visitor data with', Object.keys(window.visitorData).length, 'fields');
                
                try {
                    // Run the analysis
                    const analysis = window.visitorIntelligence.analyzeVisitorData(window.visitorData);
                    
                    // Store results globally
                    window.visitorIntelligenceResults = analysis;
                    
                    // Generate and store the full report
                    const fullReport = window.visitorIntelligence.generateIntelligenceReport(window.visitorData);
                    window.visitorIntelligenceReport = fullReport;
                    
                    // Make results easily accessible in console
                    console.log('🎯 QUICK ACCESS - Type in console:');
                    console.log('   window.visitorIntelligenceResults - Full analysis');
                    console.log('   window.visitorIntelligenceReport - Full report with recommendations');
                    console.log('   window.visitorData - Raw visitor data');
                    
                    console.log('✅ Visitor intelligence analysis completed automatically');
                    console.log('📈 Analysis Results:', analysis);
                    console.log('📋 Full Report:', fullReport);
                    console.log('🎯 Lead Quality:', analysis.leadQuality);
                    console.log('💼 Professional Grade:', analysis.deviceProfile?.professionalGrade);
                    console.log('🌍 Geographic Context:', analysis.locationIntelligence?.geographicContext);
                    console.log('📱 Device Type:', analysis.deviceProfile?.deviceType);
                    
                    // Detailed console output for better visibility
                    console.log('🔍 DETAILED INTELLIGENCE ANALYSIS:');
                    console.log('   📊 Device Profile:', analysis.deviceProfile);
                    console.log('   🌍 Location Intelligence:', analysis.locationIntelligence);
                    console.log('   🎭 Behavior Profile:', analysis.behaviorProfile);
                    console.log('   💼 Professional Context:', analysis.professionalContext);
                    console.log('   ⚠️ Risk Profile:', analysis.riskProfile);
                    console.log('   🎯 Business Intelligence:', analysis.businessIntelligence);
                    console.log('   💻 Technical Profile:', analysis.technicalProfile);
                    console.log('   📈 Engagement Profile:', analysis.engagementProfile);
                    
                    // Show recommendations and actions
                    console.log('💡 RECOMMENDATIONS:', fullReport.recommendations);
                    console.log('🎯 ACTIONS:', fullReport.actions);
                    console.log('🔍 INSIGHTS:', fullReport.insights);
                    
                    // Clear the interval since we got the data
                    if (analysisInterval) {
                        clearInterval(analysisInterval);
                    }
                    
                    // Trigger email with intelligence data if EmailJS is available
                    if (window.emailjs && window.visitorData) {
                        setTimeout(() => {
                            sendIntelligenceEmail(window.visitorData, fullReport);
                        }, 2000); // Small delay to ensure everything is loaded
                    }
                    
                } catch (error) {
                    console.error('❌ Error in automatic visitor intelligence analysis:', error);
                }
                
            } else if (analysisAttempts < maxAttempts) {
                console.log(`⏳ Waiting for visitor data... (attempt ${analysisAttempts}/${maxAttempts})`);
            } else {
                console.log('⏰ Visitor data not available after maximum attempts, stopping automatic analysis');
                if (analysisInterval) {
                    clearInterval(analysisInterval);
                }
            }
        }
        
        // Start checking for visitor data every 2 seconds
        analysisInterval = setInterval(runAutomaticAnalysis, 2000);
        
        // Also run immediately in case data is already available
        runAutomaticAnalysis();
    }
    
    // Function to send email with intelligence data
    function sendIntelligenceEmail(visitorData, intelligenceReport) {
        if (!window.emailjs) {
            console.log('📧 EmailJS not available for intelligence email');
            return;
        }
        
        try {
            // Use the same template as the main visitor notification system
            // but add intelligence data to the existing parameters
            const templateParams = {
                to_email: 'your-email@example.com', // This will be overridden by the template
                subject: `🧠 INTELLIGENCE: ${intelligenceReport.summary.visitorType || 'Unknown'} from ${visitorData.city || 'Unknown'}, ${visitorData.country || 'Unknown'}`,
                
                // Add intelligence data to existing visitor data
                ...visitorData,
                
                // Intelligence summary fields
                intelligence_summary: JSON.stringify(intelligenceReport.summary, null, 2),
                intelligence_recommendations: intelligenceReport.recommendations.join('\n'),
                intelligence_insights: JSON.stringify(intelligenceReport.insights, null, 2),
                intelligence_actions: intelligenceReport.actions.join('\n'),
                
                // Enhanced visitor identification with intelligence
                visitor_status: `🧠 INTELLIGENCE ANALYZED - ${intelligenceReport.summary.leadQuality || 'Unknown'} Lead`,
                visitor_name: `${intelligenceReport.summary.visitorType || 'Unknown'} (Intelligence Enhanced)`,
                visitor_email: 'Unknown (RB2B Pro required)',
                visitor_company: 'Unknown (RB2B Pro required)',
                visitor_linkedin: 'Check RB2B dashboard',
                
                // Intelligence-enhanced location data
                visitor_location: `${visitorData.city || 'Unknown'}, ${visitorData.region || ''}, ${visitorData.country || 'Unknown'} - ${intelligenceReport.summary.geographicContext || 'Unknown'}`,
                
                // Intelligence-enhanced device data
                visitor_device: `${intelligenceReport.summary.visitorType || visitorData.device} (${intelligenceReport.summary.professionalGrade || 'Unknown'} Grade)`,
                
                // Add intelligence fields to existing template
                lead_quality: intelligenceReport.summary.leadQuality || 'Unknown',
                professional_grade: intelligenceReport.summary.professionalGrade || 'Unknown',
                engagement_level: intelligenceReport.summary.engagementLevel || 'Unknown',
                visitor_type: intelligenceReport.summary.visitorType || 'Unknown',
                geographic_context: intelligenceReport.summary.geographicContext || 'Unknown',
                
                // Additional intelligence fields for the template
                intelligence_device_profile: JSON.stringify(intelligenceReport.deviceProfile, null, 2),
                intelligence_location_intelligence: JSON.stringify(intelligenceReport.locationIntelligence, null, 2),
                intelligence_behavior_profile: JSON.stringify(intelligenceReport.behaviorProfile, null, 2),
                intelligence_professional_context: JSON.stringify(intelligenceReport.professionalContext, null, 2),
                intelligence_risk_profile: JSON.stringify(intelligenceReport.riskProfile, null, 2),
                intelligence_business_intelligence: JSON.stringify(intelligenceReport.businessIntelligence, null, 2),
                intelligence_technical_profile: JSON.stringify(intelligenceReport.technicalProfile, null, 2),
                intelligence_engagement_profile: JSON.stringify(intelligenceReport.engagementProfile, null, 2),
                
                // Individual intelligence metrics
                intelligence_device_type: intelligenceReport.deviceProfile?.deviceType || 'Unknown',
                intelligence_professional_grade: intelligenceReport.deviceProfile?.professionalGrade || 'Unknown',
                intelligence_performance_tier: intelligenceReport.deviceProfile?.performanceTier || 'Unknown',
                intelligence_display_quality: intelligenceReport.deviceProfile?.displayQuality || 'Unknown',
                intelligence_hardware_capabilities: JSON.stringify(intelligenceReport.deviceProfile?.hardwareCapabilities, null, 2),
                
                intelligence_geographic_context: intelligenceReport.locationIntelligence?.geographicContext || 'Unknown',
                intelligence_market_opportunity: intelligenceReport.locationIntelligence?.marketOpportunity || 'Unknown',
                intelligence_network_quality: intelligenceReport.locationIntelligence?.networkQuality || 'Unknown',
                intelligence_tech_hub: intelligenceReport.locationIntelligence?.techHub ? 'YES' : 'NO',
                
                intelligence_engagement_level: intelligenceReport.behaviorProfile?.engagementLevel || 'Unknown',
                intelligence_intent_level: intelligenceReport.behaviorProfile?.intentLevel || 'Unknown',
                intelligence_bounce_risk: intelligenceReport.behaviorProfile?.bounceRisk || 'Unknown',
                intelligence_behavior_pattern: intelligenceReport.behaviorProfile?.behaviorPattern || 'Unknown',
                intelligence_attention_span: intelligenceReport.behaviorProfile?.attentionSpan || 'Unknown',
                intelligence_interaction_quality: intelligenceReport.behaviorProfile?.interactionQuality || 'Unknown',
                
                intelligence_likely_profession: intelligenceReport.professionalContext?.likelyProfession || 'Unknown',
                intelligence_company_size: intelligenceReport.professionalContext?.companySize || 'Unknown',
                intelligence_industry_guess: intelligenceReport.professionalContext?.industryGuess || 'Unknown',
                intelligence_decision_authority: intelligenceReport.professionalContext?.decisionAuthority || 'Unknown',
                intelligence_technical_sophistication: intelligenceReport.professionalContext?.technicalSophistication || 'Unknown',
                
                intelligence_risk_level: intelligenceReport.riskProfile?.riskLevel || 'Unknown',
                intelligence_trust_score: intelligenceReport.riskProfile?.trustScore || 'Unknown',
                intelligence_threat_indicators: JSON.stringify(intelligenceReport.riskProfile?.threatIndicators, null, 2),
                intelligence_security_assessment: intelligenceReport.riskProfile?.securityAssessment || 'Unknown',
                
                intelligence_revenue_potential: intelligenceReport.businessIntelligence?.revenuePotential || 'Unknown',
                intelligence_conversion_probability: intelligenceReport.businessIntelligence?.conversionProbability || 'Unknown',
                intelligence_competitive_landscape: JSON.stringify(intelligenceReport.businessIntelligence?.competitiveLandscape, null, 2),
                intelligence_market_opportunity: intelligenceReport.businessIntelligence?.marketOpportunity || 'Unknown',
                
                intelligence_browser_capabilities: intelligenceReport.technicalProfile?.browserCapabilities || 'Unknown',
                intelligence_os_capabilities: intelligenceReport.technicalProfile?.osCapabilities || 'Unknown',
                intelligence_graphics_capabilities: intelligenceReport.technicalProfile?.graphicsCapabilities || 'Unknown',
                intelligence_security_profile: intelligenceReport.technicalProfile?.securityProfile || 'Unknown',
                
                intelligence_retention_potential: intelligenceReport.engagementProfile?.retentionPotential || 'Unknown',
                intelligence_interaction_pattern: intelligenceReport.engagementProfile?.interactionPattern || 'Unknown',
                intelligence_attention_span: intelligenceReport.engagementProfile?.attentionSpan || 'Unknown',
                intelligence_bounce_risk: intelligenceReport.engagementProfile?.bounceRisk || 'Unknown'
            };
            
            console.log('📧 Sending intelligence-enhanced email with', Object.keys(templateParams).length, 'parameters...');
            
            // Send email using the same service and template as main system
            emailjs.send('service_visitor_tracking', 'template_visitor_tracking', templateParams)
                .then(function(response) {
                    console.log('📧 Intelligence-enhanced email sent successfully:', response);
                }, function(error) {
                    console.error('❌ Error sending intelligence email:', error);
                    console.error('❌ Error details:', error.text || error.message);
                });
                
        } catch (error) {
            console.error('❌ Error preparing intelligence email:', error);
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeVisitorIntelligence);
    } else {
        initializeVisitorIntelligence();
    }
    
    // Also initialize when window loads (fallback)
    window.addEventListener('load', function() {
        if (!window.visitorIntelligence) {
            console.log('🔄 Fallback initialization of Visitor Intelligence System...');
            initializeVisitorIntelligence();
        }
    });
    
})(); 
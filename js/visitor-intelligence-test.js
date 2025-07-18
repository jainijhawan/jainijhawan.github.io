// Visitor Intelligence Testing Framework
// Test the advanced visitor intelligence system

class VisitorIntelligenceTester {
    constructor() {
        this.intelligence = new AdvancedVisitorIntelligence();
        this.testResults = {};
        this.isTestMode = false;
    }

    // Initialize testing framework
    init() {
        console.log('🧪 Initializing Visitor Intelligence Testing Framework...');
        
        // Add test panel (button removed for production)
        this.addTestPanel();
        
        // Listen for test mode
        this.listenForTestMode();
        
        console.log('✅ Testing framework initialized');
    }

    // Add test button to page
    addTestButton() {
        const testButton = document.createElement('button');
        testButton.id = 'visitor-intelligence-test-btn';
        testButton.innerHTML = '🧪 Test Visitor Intelligence';
        testButton.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;
        
        testButton.addEventListener('click', () => {
            this.runFullTest();
        });
        
        document.body.appendChild(testButton);
    }

    // Add test panel
    addTestPanel() {
        const panel = document.createElement('div');
        panel.id = 'visitor-intelligence-test-panel';
        panel.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            width: 400px;
            max-height: 600px;
            background: white;
            border: 2px solid #007bff;
            border-radius: 10px;
            padding: 20px;
            z-index: 10000;
            display: none;
            overflow-y: auto;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            font-family: Arial, sans-serif;
            font-size: 12px;
        `;
        
        panel.innerHTML = `
            <h3 style="margin: 0 0 15px 0; color: #007bff;">🧪 Visitor Intelligence Test Results</h3>
            <div id="test-results-content"></div>
            <div style="margin-top: 15px; text-align: center;">
                <button id="close-test-panel" style="background: #dc3545; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Close</button>
            </div>
        `;
        
        document.body.appendChild(panel);
        
        // Close button functionality
        document.getElementById('close-test-panel').addEventListener('click', () => {
            panel.style.display = 'none';
        });
    }

    // Run comprehensive test
    async runFullTest() {
        console.log('🧪 Starting comprehensive visitor intelligence test...');
        
        this.isTestMode = true;
        
        // Collect current visitor data
        const visitorData = await this.collectTestData();
        
        // Run intelligence analysis
        const analysis = this.intelligence.analyzeVisitorData(visitorData);
        
        // Generate comprehensive report
        const report = this.intelligence.generateIntelligenceReport(visitorData);
        
        // Display results
        this.displayTestResults(visitorData, analysis, report);
        
        this.isTestMode = false;
    }

    // Collect test data
    async collectTestData() {
        console.log('📊 Collecting test visitor data...');
        
        // Simulate the data collection process
        const testData = {
            // Basic visitor info
            url: window.location.href,
            title: document.title,
            referrer: document.referrer,
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            
            // Device info
            device: this.getDeviceType(navigator.userAgent),
            browser: this.getBrowser(navigator.userAgent),
            browserVersion: this.getBrowserVersion(navigator.userAgent),
            os: this.getOS(navigator.userAgent),
            osVersion: this.getOSVersion(navigator.userAgent),
            
            // Screen info
            screenResolution: `${screen.width}x${screen.height}`,
            colorDepth: screen.colorDepth,
            pixelRatio: window.devicePixelRatio,
            viewportSize: `${window.innerWidth}x${window.innerHeight}`,
            
            // Hardware info
            hardwareConcurrency: navigator.hardwareConcurrency,
            deviceMemory: navigator.deviceMemory,
            maxTouchPoints: navigator.maxTouchPoints,
            
            // Capabilities
            webglSupport: this.hasWebGL(),
            canvasSupport: this.hasCanvas(),
            localStorage: typeof Storage !== 'undefined',
            sessionStorage: typeof Storage !== 'undefined',
            
            // Security
            httpsEnabled: window.location.protocol === 'https:',
            secureContext: window.isSecureContext,
            
            // Behavior (simulated for testing)
            timeOnPage: Math.floor(Math.random() * 300) + 10, // 10-310 seconds
            scrollPercentage: Math.floor(Math.random() * 100), // 0-100%
            mouseMovements: Math.floor(Math.random() * 200) + 5, // 5-205 movements
            clicksDetected: Math.floor(Math.random() * 10), // 0-10 clicks
            sectionsVisited: Math.floor(Math.random() * 5) + 1, // 1-6 sections
            
            // Location (simulated for testing)
            city: 'Delhi',
            region: 'National Capital Territory of Delhi',
            country: 'India',
            countryCode: 'IN',
            isp: 'Reliance Jio Infocomm Limited',
            postal: '110001',
            latitude: 28.6542,
            longitude: 77.2373,
            asn: 'AS55836',
            ip: '2409:40d0:11f5:7e6c:3c05:7b24:6caf:a1ba',
            ipVersion: 'IPv6',
            
            // Fingerprinting (simulated)
            fingerprintId: 'test_fingerprint_' + Math.random().toString(36).substr(2, 9),
            canvasFingerprint: 'data:image/png;base64,test_canvas_fingerprint',
            audioFingerprint: 'test_audio_fingerprint',
            webglVendor: 'Google Inc. (Apple)',
            webglRenderer: 'ANGLE (Apple, ANGLE Metal Renderer: Apple M1 Pro)',
            webglExtensions: 39,
            audioSampleRate: 48000,
            fontsCount: 5,
            fontsList: 'Arial, Times New Roman, Helvetica, Georgia, Verdana',
            
            // Network
            connectionType: '4g',
            connectionSpeed: 6.5,
            connectionRTT: 200,
            
            // Performance
            pageLoadTime: Math.floor(Math.random() * 5000) + 1000, // 1-6 seconds
            domReadyTime: Math.floor(Math.random() * 2000) + 500, // 0.5-2.5 seconds
            
            // Analytics
            googleAnalytics: true,
            measurementId: 'G-JZ2VC64MQE',
            dataLayerEvents: Math.floor(Math.random() * 20) + 5,
            
            // Timestamps
            visitTime: new Date().toISOString(),
            sessionStart: new Date(Date.now() - 30000).toISOString(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            timezoneOffset: new Date().getTimezoneOffset()
        };
        
        console.log('✅ Test data collected:', Object.keys(testData).length, 'fields');
        return testData;
    }

    // Display test results
    displayTestResults(visitorData, analysis, report) {
        const panel = document.getElementById('visitor-intelligence-test-panel');
        const content = document.getElementById('test-results-content');
        
        content.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h4 style="color: #007bff; margin: 0 0 10px 0;">📊 Test Summary</h4>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <strong>Visitor Type:</strong> ${report.summary.visitorType}<br>
                    <strong>Lead Quality:</strong> ${report.summary.leadQuality}<br>
                    <strong>Engagement Level:</strong> ${report.summary.engagementLevel}<br>
                    <strong>Geographic Context:</strong> ${report.summary.geographicContext}<br>
                    <strong>Professional Grade:</strong> ${report.summary.professionalGrade}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h4 style="color: #28a745; margin: 0 0 10px 0;">🎯 Device Intelligence</h4>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <strong>Device Type:</strong> ${analysis.deviceProfile.deviceType}<br>
                    <strong>Professional Grade:</strong> ${analysis.deviceProfile.professionalGrade}<br>
                    <strong>Performance Tier:</strong> ${analysis.deviceProfile.performanceTier}<br>
                    <strong>CPU Cores:</strong> ${analysis.deviceProfile.hardwareCapabilities.cpuCores}<br>
                    <strong>Memory:</strong> ${analysis.deviceProfile.hardwareCapabilities.memoryGB}GB<br>
                    <strong>Performance Score:</strong> ${analysis.deviceProfile.hardwareCapabilities.performanceScore}/100
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h4 style="color: #ffc107; margin: 0 0 10px 0;">🌍 Geographic Intelligence</h4>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <strong>Geographic Context:</strong> ${analysis.locationIntelligence.geographicContext}<br>
                    <strong>Business District:</strong> ${analysis.locationIntelligence.businessDistrict ? 'Yes' : 'No'}<br>
                    <strong>Tech Hub:</strong> ${analysis.locationIntelligence.techHub ? 'Yes' : 'No'}<br>
                    <strong>Market Opportunity:</strong> ${analysis.locationIntelligence.marketOpportunity}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h4 style="color: #dc3545; margin: 0 0 10px 0;">📱 Behavioral Analysis</h4>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <strong>Engagement Level:</strong> ${analysis.behaviorProfile.engagementLevel}<br>
                    <strong>Intent Level:</strong> ${analysis.behaviorProfile.intentLevel}<br>
                    <strong>Time on Page:</strong> ${visitorData.timeOnPage} seconds<br>
                    <strong>Scroll Depth:</strong> ${visitorData.scrollPercentage}%<br>
                    <strong>Mouse Movements:</strong> ${visitorData.mouseMovements}<br>
                    <strong>Clicks:</strong> ${visitorData.clicksDetected}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h4 style="color: #6f42c1; margin: 0 0 10px 0;">🏢 Professional Context</h4>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <strong>Likely Profession:</strong> ${analysis.professionalContext.likelyProfession}<br>
                    <strong>Company Size:</strong> ${analysis.professionalContext.companySize}<br>
                    <strong>Industry Sector:</strong> ${analysis.professionalContext.industrySector}<br>
                    <strong>Technical Sophistication:</strong> ${analysis.professionalContext.technicalSophistication}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h4 style="color: #fd7e14; margin: 0 0 10px 0;">🎯 Lead Quality Assessment</h4>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <strong>Lead Quality:</strong> ${analysis.leadQuality}<br>
                    <strong>Risk Level:</strong> ${analysis.riskProfile.riskLevel}<br>
                    <strong>Trust Score:</strong> ${analysis.riskProfile.trustScore}/100<br>
                    <strong>Market Opportunity:</strong> ${analysis.businessIntelligence.marketOpportunity}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h4 style="color: #20c997; margin: 0 0 10px 0;">💡 Recommendations</h4>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    ${report.recommendations.map(rec => `• ${rec}`).join('<br>')}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h4 style="color: #6c757d; margin: 0 0 10px 0;">🔍 Key Insights</h4>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <strong>Device:</strong> ${report.insights.deviceInsights}<br>
                    <strong>Location:</strong> ${report.insights.locationInsights}<br>
                    <strong>Behavior:</strong> ${report.insights.behaviorInsights}<br>
                    <strong>Professional:</strong> ${report.insights.professionalInsights}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h4 style="color: #e83e8c; margin: 0 0 10px 0;">⚡ Actions</h4>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px;">
                    ${report.actions.map(action => `• ${action}`).join('<br>')}
                </div>
            </div>
        `;
        
        panel.style.display = 'block';
        
        console.log('✅ Test results displayed');
    }

    // Test specific components
    testDeviceClassification() {
        console.log('🧪 Testing device classification...');
        
        const testCases = [
            {
                device: 'Desktop',
                screenResolution: '1512x982',
                pixelRatio: 2,
                colorDepth: 30,
                hardwareConcurrency: 8,
                deviceMemory: 8
            },
            {
                device: 'Mobile',
                screenResolution: '375x667',
                pixelRatio: 2,
                colorDepth: 24,
                hardwareConcurrency: 4,
                deviceMemory: 4
            },
            {
                device: 'Desktop',
                screenResolution: '1920x1080',
                pixelRatio: 1,
                colorDepth: 24,
                hardwareConcurrency: 4,
                deviceMemory: 8
            }
        ];
        
        testCases.forEach((testCase, index) => {
            const deviceType = this.intelligence.classifyDevice(testCase);
            const professionalGrade = this.intelligence.assessProfessionalGrade(testCase);
            
            console.log(`Test Case ${index + 1}:`);
            console.log(`  Device: ${deviceType}`);
            console.log(`  Professional Grade: ${professionalGrade}`);
        });
    }

    testGeographicIntelligence() {
        console.log('🧪 Testing geographic intelligence...');
        
        const testCases = [
            { city: 'Delhi', postal: '110001', country: 'India' },
            { city: 'Mumbai', postal: '400001', country: 'India' },
            { city: 'New York', postal: '10001', country: 'United States' }
        ];
        
        testCases.forEach((testCase, index) => {
            const context = this.intelligence.assessGeographicContext(testCase);
            const businessDistrict = this.intelligence.isBusinessDistrict(testCase.postal, testCase.city);
            const techHub = this.intelligence.isTechHub(testCase.city, testCase.country);
            
            console.log(`Test Case ${index + 1}:`);
            console.log(`  Geographic Context: ${context}`);
            console.log(`  Business District: ${businessDistrict}`);
            console.log(`  Tech Hub: ${techHub}`);
        });
    }

    testBehaviorAnalysis() {
        console.log('🧪 Testing behavior analysis...');
        
        const testCases = [
            { timeOnPage: 300, scrollPercentage: 90, mouseMovements: 150, clicksDetected: 8 },
            { timeOnPage: 60, scrollPercentage: 50, mouseMovements: 50, clicksDetected: 3 },
            { timeOnPage: 10, scrollPercentage: 5, mouseMovements: 2, clicksDetected: 0 }
        ];
        
        testCases.forEach((testCase, index) => {
            const engagementLevel = this.intelligence.assessEngagementLevel(testCase);
            const intentLevel = this.intelligence.assessIntentLevel(testCase);
            const bounceRisk = this.intelligence.assessBounceRisk(testCase);
            
            console.log(`Test Case ${index + 1}:`);
            console.log(`  Engagement Level: ${engagementLevel}`);
            console.log(`  Intent Level: ${intentLevel}`);
            console.log(`  Bounce Risk: ${bounceRisk}`);
        });
    }

    // Utility functions
    getDeviceType(userAgent) {
        if (/Mobile|Android|iPhone/.test(userAgent)) return 'Mobile';
        if (/Tablet|iPad/.test(userAgent)) return 'Tablet';
        return 'Desktop';
    }

    getBrowser(userAgent) {
        if (userAgent.includes('Chrome')) return 'Chrome';
        if (userAgent.includes('Firefox')) return 'Firefox';
        if (userAgent.includes('Safari')) return 'Safari';
        if (userAgent.includes('Edge')) return 'Edge';
        return 'Unknown';
    }

    getBrowserVersion(userAgent) {
        const match = userAgent.match(/(Chrome|Firefox|Safari|Edge)\/(\d+\.\d+)/);
        return match ? match[2] : 'Unknown';
    }

    getOS(userAgent) {
        if (userAgent.includes('Mac OS X')) return 'macOS';
        if (userAgent.includes('Windows')) return 'Windows';
        if (userAgent.includes('Linux')) return 'Linux';
        if (userAgent.includes('Android')) return 'Android';
        if (userAgent.includes('iOS')) return 'iOS';
        return 'Unknown';
    }

    getOSVersion(userAgent) {
        const match = userAgent.match(/Mac OS X (\d+_\d+)/);
        return match ? match[1].replace('_', '.') : 'Unknown';
    }

    hasWebGL() {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    }

    hasCanvas() {
        try {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext && canvas.getContext('2d'));
        } catch (e) {
            return false;
        }
    }

    // Listen for test mode
    listenForTestMode() {
        // Add keyboard shortcut for testing
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'T') {
                console.log('🧪 Keyboard shortcut detected - running test...');
                this.runFullTest();
            }
        });
    }
}

// Initialize testing framework when page loads
document.addEventListener('DOMContentLoaded', () => {
    const tester = new VisitorIntelligenceTester();
    tester.init();
    
    // Make tester globally available for console testing
    window.visitorIntelligenceTester = tester;
    
    console.log('🧪 Visitor Intelligence Testing Framework ready!');
    console.log('📋 Testing Commands:');
    console.log('  • Click the "🧪 Test Visitor Intelligence" button');
    console.log('  • Press Ctrl+Shift+T for keyboard shortcut');
    console.log('  • Use window.visitorIntelligenceTester.runFullTest() in console');
    console.log('  • Use window.visitorIntelligenceTester.testDeviceClassification() in console');
    console.log('  • Use window.visitorIntelligenceTester.testGeographicIntelligence() in console');
    console.log('  • Use window.visitorIntelligenceTester.testBehaviorAnalysis() in console');
}); 
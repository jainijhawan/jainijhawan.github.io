// Enhanced Visitor Tracking System - Maximum Data Collection
// Integrates multiple analytics services for comprehensive visitor insights

class EnhancedVisitorTracking {
    constructor(config) {
        this.config = {
            emailjsPublicKey: config.emailjsPublicKey || 'YOUR_EMAILJS_PUBLIC_KEY',
            emailjsServiceId: config.emailjsServiceId || 'YOUR_EMAILJS_SERVICE_ID',
            emailjsTemplateId: config.emailjsTemplateId || 'YOUR_EMAILJS_TEMPLATE_ID',
            rb2bApiKey: config.rb2bApiKey || 'YOUR_RB2B_API_KEY',
            hotjarId: config.hotjarId || 'YOUR_HOTJAR_ID',
            clarityId: config.clarityId || 'YOUR_CLARITY_ID',
            yourEmail: config.yourEmail || 'jainijhawan@gmail.com',
            enablePersonalData: config.enablePersonalData || false,
            enableRealTimeAlerts: config.enableRealTimeAlerts || true
        };
        
        this.visitorData = {};
        this.init();
    }

    async init() {
        // Initialize all tracking services
        await this.initializeEmailJS();
        this.initializeGoogleAnalytics();
        this.initializeHotjar();
        this.initializeClarity();
        this.initializeRB2B();
        
        // Start comprehensive tracking
        await this.startTracking();
    }

    // Initialize EmailJS for notifications
    async initializeEmailJS() {
        if (typeof emailjs !== 'undefined') {
            emailjs.init({ publicKey: this.config.emailjsPublicKey });
        }
    }

    // Initialize Google Analytics 4
    initializeGoogleAnalytics() {
        // Enhanced GA4 with custom events
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                custom_map: { 
                    'custom_parameter_1': 'visitor_quality',
                    'custom_parameter_2': 'engagement_score' 
                },
                user_properties: {
                    visitor_type: 'portfolio_visitor',
                    tracking_enabled: true
                }
            });
        }
    }

    // Initialize Hotjar for behavior tracking
    initializeHotjar() {
        if (this.config.hotjarId && this.config.hotjarId !== 'YOUR_HOTJAR_ID') {
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid: this.config.hotjarId, hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        }
    }

    // Initialize Microsoft Clarity
    initializeClarity() {
        if (this.config.clarityId && this.config.clarityId !== 'YOUR_CLARITY_ID') {
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", this.config.clarityId);
        }
    }

    // Initialize RB2B for person identification
    initializeRB2B() {
        if (this.config.rb2bApiKey && this.config.rb2bApiKey !== 'YOUR_RB2B_API_KEY') {
            // RB2B pixel implementation
            const script = document.createElement('script');
            script.src = 'https://cdn.rb2b.com/rb2b.js';
            script.setAttribute('data-api-key', this.config.rb2bApiKey);
            document.head.appendChild(script);
        }
    }

    // Comprehensive visitor data collection
    async collectVisitorData() {
        const visitorInfo = {
            // Timestamp and session info
            timestamp: new Date().toISOString(),
            sessionId: this.generateSessionId(),
            
            // Browser and device information
            userAgent: navigator.userAgent,
            language: navigator.language,
            languages: navigator.languages,
            platform: navigator.platform,
            cookieEnabled: navigator.cookieEnabled,
            onlineStatus: navigator.onLine,
            
            // Screen and viewport information
            screenResolution: `${screen.width}x${screen.height}`,
            screenColorDepth: screen.colorDepth,
            viewportSize: `${window.innerWidth}x${window.innerHeight}`,
            pixelRatio: window.devicePixelRatio,
            
            // Page and navigation information
            url: window.location.href,
            title: document.title,
            referrer: document.referrer || 'Direct visit',
            pathname: window.location.pathname,
            search: window.location.search,
            hash: window.location.hash,
            
            // Time and location information
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            timezoneOffset: new Date().getTimezoneOffset(),
            
            // Performance information
            connectionType: this.getConnectionType(),
            pageLoadTime: this.getPageLoadTime(),
            
            // Engagement tracking
            timeOnPage: 0,
            scrollDepth: 0,
            clickCount: 0,
            mouseMovements: 0,
            
            // UTM parameters
            utmSource: this.getURLParameter('utm_source'),
            utmMedium: this.getURLParameter('utm_medium'),
            utmCampaign: this.getURLParameter('utm_campaign'),
            utmTerm: this.getURLParameter('utm_term'),
            utmContent: this.getURLParameter('utm_content')
        };

        // Get IP and location data
        try {
            const locationData = await this.getLocationData();
            Object.assign(visitorInfo, locationData);
        } catch (error) {
            console.log('Could not fetch location data:', error);
        }

        // Get device information
        visitorInfo.deviceInfo = this.getDeviceInfo();
        visitorInfo.browserInfo = this.getBrowserInfo();

        return visitorInfo;
    }

    // Enhanced location data collection
    async getLocationData() {
        try {
            // Try multiple IP services for better reliability
            const services = [
                'https://ipapi.co/json/',
                'https://api.ipify.org?format=json',
                'https://ipinfo.io/json'
            ];

            for (const service of services) {
                try {
                    const response = await fetch(service);
                    const data = await response.json();
                    
                    return {
                        ip: data.ip,
                        city: data.city,
                        region: data.region || data.region_name,
                        country: data.country_name || data.country,
                        countryCode: data.country_code || data.country,
                        latitude: data.latitude || data.lat,
                        longitude: data.longitude || data.lon,
                        isp: data.org || data.isp,
                        timezone: data.timezone,
                        postal: data.postal,
                        asn: data.asn
                    };
                } catch (err) {
                    continue; // Try next service
                }
            }
        } catch (error) {
            return { locationError: 'Could not fetch location data' };
        }
    }

    // Enhanced engagement tracking
    startEngagementTracking() {
        let startTime = Date.now();
        let scrollPercent = 0;
        let clickCount = 0;
        let mouseMovements = 0;

        // Scroll depth tracking
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = Math.round(scrollTop / (docHeight - winHeight) * 100);
            
            this.visitorData.scrollDepth = Math.max(this.visitorData.scrollDepth || 0, scrollPercent);
        });

        // Click tracking
        document.addEventListener('click', (e) => {
            clickCount++;
            this.visitorData.clickCount = clickCount;
            
            // Track specific element clicks
            const element = e.target;
            this.trackElementClick(element);
        });

        // Mouse movement tracking
        let mouseMoveThrottle;
        document.addEventListener('mousemove', () => {
            if (!mouseMoveThrottle) {
                mouseMoveThrottle = setTimeout(() => {
                    mouseMovements++;
                    this.visitorData.mouseMovements = mouseMovements;
                    mouseMoveThrottle = null;
                }, 100);
            }
        });

        // Time on page tracking
        setInterval(() => {
            this.visitorData.timeOnPage = Math.round((Date.now() - startTime) / 1000);
        }, 1000);

        // Page visibility tracking
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.trackPageVisibility('hidden');
            } else {
                this.trackPageVisibility('visible');
            }
        });
    }

    // Track specific element interactions
    trackElementClick(element) {
        const elementData = {
            tagName: element.tagName,
            id: element.id,
            className: element.className,
            text: element.textContent?.substring(0, 100),
            href: element.href,
            timestamp: new Date().toISOString()
        };

        // Store click data
        if (!this.visitorData.elementClicks) {
            this.visitorData.elementClicks = [];
        }
        this.visitorData.elementClicks.push(elementData);

        // Send real-time notification for important clicks
        if (this.isImportantElement(element)) {
            this.sendRealTimeAlert('important_click', elementData);
        }
    }

    // Identify important elements (CTAs, contact info, etc.)
    isImportantElement(element) {
        const importantSelectors = [
            'a[href*="mailto"]',
            'a[href*="tel"]',
            'a[href*="download"]',
            '.cta', '.button', '.btn',
            '[data-track="important"]'
        ];

        return importantSelectors.some(selector => element.matches(selector));
    }

    // Send comprehensive visitor notification
    async sendVisitorNotification() {
        try {
            const visitorInfo = await this.collectVisitorData();
            
            // Enhanced template parameters
            const templateParams = {
                to_email: this.config.yourEmail,
                subject: `🚨 New Website Visitor - ${visitorInfo.city || 'Unknown'}, ${visitorInfo.country || 'Unknown'}`,
                
                // Basic info
                visitor_timestamp: visitorInfo.timestamp,
                visitor_ip: visitorInfo.ip || 'Unknown',
                visitor_location: `${visitorInfo.city || 'Unknown'}, ${visitorInfo.region || ''} ${visitorInfo.country || 'Unknown'}`,
                
                // Technical info
                visitor_browser: this.getBrowserInfo(visitorInfo.userAgent),
                visitor_os: this.getOSInfo(visitorInfo.userAgent),
                visitor_device: this.getDeviceType(visitorInfo.userAgent),
                visitor_screen: visitorInfo.screenResolution,
                visitor_viewport: visitorInfo.viewportSize,
                
                // Engagement info
                visitor_referrer: visitorInfo.referrer,
                visitor_url: visitorInfo.url,
                visitor_language: visitorInfo.language,
                visitor_timezone: visitorInfo.timezone,
                visitor_isp: visitorInfo.isp || 'Unknown',
                
                // Engagement metrics
                time_on_page: this.visitorData.timeOnPage || 0,
                scroll_depth: this.visitorData.scrollDepth || 0,
                click_count: this.visitorData.clickCount || 0,
                
                // UTM data
                utm_source: visitorInfo.utmSource || 'None',
                utm_campaign: visitorInfo.utmCampaign || 'None',
                
                // Full visitor data
                visitor_details: JSON.stringify({...visitorInfo, ...this.visitorData}, null, 2)
            };

            // Send email notification
            if (typeof emailjs !== 'undefined') {
                const response = await emailjs.send(
                    this.config.emailjsServiceId,
                    this.config.emailjsTemplateId,
                    templateParams
                );
                console.log('Visitor notification sent successfully:', response);
            }

            // Send to webhook if configured
            if (this.config.webhookUrl) {
                await this.sendWebhookNotification({...visitorInfo, ...this.visitorData});
            }

        } catch (error) {
            console.error('Failed to send visitor notification:', error);
        }
    }

    // Real-time alerts for high-value actions
    async sendRealTimeAlert(alertType, data) {
        if (!this.config.enableRealTimeAlerts) return;

        const alertData = {
            type: alertType,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            data: data,
            visitor: this.visitorData
        };

        // Send immediate notification
        try {
            if (typeof emailjs !== 'undefined') {
                await emailjs.send(
                    this.config.emailjsServiceId,
                    'real_time_alert_template', // You'll need to create this template
                    {
                        to_email: this.config.yourEmail,
                        alert_type: alertType,
                        alert_data: JSON.stringify(alertData, null, 2)
                    }
                );
            }
        } catch (error) {
            console.error('Failed to send real-time alert:', error);
        }
    }

    // Utility functions
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    getURLParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    getConnectionType() {
        return navigator.connection?.effectiveType || 'unknown';
    }

    getPageLoadTime() {
        return performance.timing ? performance.timing.loadEventEnd - performance.timing.navigationStart : 0;
    }

    getBrowserInfo(userAgent = navigator.userAgent) {
        if (userAgent.includes('Chrome')) return 'Chrome';
        if (userAgent.includes('Firefox')) return 'Firefox';
        if (userAgent.includes('Safari')) return 'Safari';
        if (userAgent.includes('Edge')) return 'Edge';
        if (userAgent.includes('Opera')) return 'Opera';
        return 'Unknown Browser';
    }

    getOSInfo(userAgent = navigator.userAgent) {
        if (userAgent.includes('Windows')) return 'Windows';
        if (userAgent.includes('Mac OS')) return 'macOS';
        if (userAgent.includes('Linux')) return 'Linux';
        if (userAgent.includes('Android')) return 'Android';
        if (userAgent.includes('iOS')) return 'iOS';
        return 'Unknown OS';
    }

    getDeviceType(userAgent = navigator.userAgent) {
        if (/Mobile|Android|iPhone|iPad/.test(userAgent)) return 'Mobile';
        if (/Tablet|iPad/.test(userAgent)) return 'Tablet';
        return 'Desktop';
    }

    getDeviceInfo() {
        return {
            type: this.getDeviceType(),
            memory: navigator.deviceMemory || 'unknown',
            cores: navigator.hardwareConcurrency || 'unknown',
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }

    trackPageVisibility(state) {
        this.visitorData.visibilityChanges = this.visitorData.visibilityChanges || [];
        this.visitorData.visibilityChanges.push({
            state: state,
            timestamp: new Date().toISOString()
        });
    }

    // Start comprehensive tracking
    async startTracking() {
        // Collect initial visitor data
        this.visitorData = await this.collectVisitorData();
        
        // Start engagement tracking
        this.startEngagementTracking();
        
        // Send initial notification after a delay
        setTimeout(() => {
            this.sendVisitorNotification();
        }, 3000);

        // Send periodic updates for long sessions
        setInterval(() => {
            if (this.visitorData.timeOnPage > 60) { // More than 1 minute
                this.sendVisitorNotification();
            }
        }, 300000); // Every 5 minutes
    }
}

// Initialize enhanced tracking when page loads
window.addEventListener('load', () => {
    const tracker = new EnhancedVisitorTracking({
        emailjsPublicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
        emailjsServiceId: 'YOUR_EMAILJS_SERVICE_ID', 
        emailjsTemplateId: 'YOUR_EMAILJS_TEMPLATE_ID',
        rb2bApiKey: 'YOUR_RB2B_API_KEY',
        hotjarId: 'YOUR_HOTJAR_ID',
        clarityId: 'YOUR_CLARITY_ID',
        yourEmail: 'jainijhawan@gmail.com',
        enableRealTimeAlerts: true
    });
}); 
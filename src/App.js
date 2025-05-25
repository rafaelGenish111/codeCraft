import React, { useState, useEffect } from 'react';
import { Globe, Code, Palette, Smartphone, ArrowRight, Mail, Phone, MapPin, Star, Menu, X, ExternalLink, Facebook, Instagram, Linkedin, Github, Twitter } from 'lucide-react';

const translations = {
  he: {
    nav: {
      home: 'בית',
      about: 'אודות',
      services: 'שירותים',
      portfolio: 'פרויקטים',
      contact: 'צור קשר'
    },
    hero: {
      title: 'פתרונות דיגיטליים מותאמים אישית',
      subtitle: 'CodeCraft יוצרת אתרים מקצועיים ומערכות דיגיטליות מתקדמות לעסקים קטנים ומטפלים',
      cta: 'בואו נתחיל לבנות',
      stats: {
        projects: 'פרויקטים הושלמו',
        clients: 'לקוחות מרוצים',
        experience: 'שנות ניסיון'
      }
    },
    about: {
      title: 'על CodeCraft',
      subtitle: 'סטודיו לפיתוח דיגיטלי עם התמחות ביצירת פתרונות מותאמים אישית',
      description: 'CodeCraft מתמחה בפיתוח אתרים מקצועיים ומערכות דיגיטליות מתקדמות בטכנולוגיות כמו React ו-Node.js. אנחנו מתמחים בתחום הטיפול והקוסמטיקה, ויוצרים פתרונות מלאים הכוללים אתרי תדמית, מערכות CRM ואפליקציות מותאמות.',
      skills: 'הטכנולוגיות שלנו',
      approach: {
        title: 'הגישה שלנו',
        items: [
          'הבנה מעמיקה של הצרכים הייחודיים בתחום הטיפול',
          'עיצוב מקצועי המותאם לקהל היעד שלכם',
          'פיתוח מערכות מלאות - מאתר תדמית ועד CRM מתקדם',
          'תמיכה מלאה ועדכונים שוטפים'
        ]
      }
    },
    services: {
      title: 'השירותים שלנו',
      subtitle: 'פתרונות דיגיטליים מלאים המותאמים לעולם הטיפול והעסקים הקטנים',
      items: [
        {
          title: 'אתרי תדמית לטיפול',
          description: 'אתרים מקצועיים המותאמים לתחום הטיפול והקוסמטיקה',
          features: ['עיצוב מותאם לקהל יעד', 'מערכת הזמנת תורים', 'גלריית טיפולים וביקורות']
        },
        {
          title: 'מערכות CRM מתקדמות',
          description: 'פלטפורמה מלאה לניהול מטפלים וקליניקות',
          features: ['ניהול תורים וזמנים', 'הצהרות בריאות דיגיטליות', 'מעקב אחר טיפולים ותשלומים']
        },
        {
          title: 'אפליקציות ווב מותאמות',
          description: 'מערכות מורכבות לצרכים ייחודיים של המטפלים',
          features: ['ממשקי ניהול אינטואיטיביים', 'אינטגרציות עם מערכות קיימות', 'אבטחה ופרטיות מלאה']
        }
      ]
    },
    portfolio: {
      title: 'פרויקטים שביצענו',
      subtitle: 'דוגמאות לעבודות CodeCraft',
      projects: [
        {
          title: 'קליניקת יופי דלמטיה',
          description: 'אתר תדמית מקצועי עם מערכת הזמנת תורים אונליין',
          tech: 'React, Node.js, MongoDB',
          link: '#'
        },
        {
          title: 'מערכת ניהול מטפלות',
          description: 'CRM מתקדם עם הצהרות בריאות ומעקב טיפולים',
          tech: 'Next.js, TypeScript, PostgreSQL',
          link: '#'
        },
        {
          title: 'סטודיו עיצוב פנים',
          description: 'פורטפוליו דיגיטלי אינטראקטיבי עם גלריית פרויקטים',
          tech: 'React, Tailwind CSS, Framer Motion',
          link: '#'
        }
      ]
    },
    contact: {
      title: 'בואו נדבר',
      subtitle: 'מוכן להתחיל את הפרויקט הבא שלך?',
      form: {
        name: 'שם מלא',
        email: 'אימייל',
        message: 'הודעה',
        send: 'שלח הודעה'
      },
      info: {
        phone: '052-8553431',
        email: 'rafaelgenish111@gmail.com',
        location: 'פתח תקווה, ישראל'
      },
      social: {
        title: 'עקבו אחריי ברשתות החברתיות',
        links: {
          facebook: 'https://facebook.com/yourprofile',
          instagram: 'https://instagram.com/yourprofile',
          linkedin: 'https://linkedin.com/in/yourprofile',
          github: 'https://github.com/yourusername',
          twitter: 'https://twitter.com/yourhandle'
        }
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact'
    },
    hero: {
      title: 'Custom Digital Solutions for Your Business',
      subtitle: 'CodeCraft creates professional websites and advanced digital systems for small businesses and healthcare professionals',
      cta: "Let's Start Building",
      stats: {
        projects: 'Projects Completed',
        clients: 'Happy Clients',
        experience: 'Years Experience'
      }
    },
    about: {
      title: 'About CodeCraft',
      subtitle: 'Digital development studio specializing in custom-built solutions',
      description: 'CodeCraft specializes in developing professional websites and advanced digital systems using technologies like React and Node.js. We focus on healthcare and beauty industries, creating complete solutions including business websites, CRM systems, and custom applications.',
      skills: 'Our Technologies',
      approach: {
        title: 'Our Approach',
        items: [
          'Deep understanding of unique needs in healthcare industry',
          'Professional design tailored to your target audience',
          'Complete system development - from business website to advanced CRM',
          'Full support and ongoing updates'
        ]
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete digital solutions tailored for healthcare and small businesses',
      items: [
        {
          title: 'Healthcare Business Websites',
          description: 'Professional websites tailored for healthcare and beauty industries',
          features: ['Target audience design', 'Appointment booking system', 'Treatment gallery and reviews']
        },
        {
          title: 'Advanced CRM Systems',
          description: 'Complete platform for managing therapists and clinics',
          features: ['Appointment and schedule management', 'Digital health declarations', 'Treatment and payment tracking']
        },
        {
          title: 'Custom Web Applications',
          description: 'Complex systems for unique needs of healthcare professionals',
          features: ['Intuitive management interfaces', 'Integrations with existing systems', 'Complete security and privacy']
        }
      ]
    },
    portfolio: {
      title: 'Our Projects',
      subtitle: 'Examples of CodeCraft work',
      projects: [
        {
          title: 'Delmatia Beauty Clinic',
          description: 'Professional business website with online appointment booking',
          tech: 'React, Node.js, MongoDB',
          link: '#'
        },
        {
          title: 'Therapist Management System',
          description: 'Advanced CRM with health declarations and treatment tracking',
          tech: 'Next.js, TypeScript, PostgreSQL',
          link: '#'
        },
        {
          title: 'Interior Design Studio',
          description: 'Interactive digital portfolio with project gallery',
          tech: 'React, Tailwind CSS, Framer Motion',
          link: '#'
        }
      ]
    },
    contact: {
      title: "Let's Talk",
      subtitle: 'Ready to start your next project?',
      form: {
        name: 'Full Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        phone: '052-8553431',
        email: 'rafaelgenish111@gmail.com',
        location: 'Petah Tikva, Israel'
      },
      social: {
        title: 'Follow me on social media',
        links: {
          facebook: 'https://facebook.com/yourprofile',
          instagram: 'https://instagram.com/yourprofile',
          linkedin: 'https://linkedin.com/in/yourprofile',
          github: 'https://github.com/yourusername',
          twitter: 'https://twitter.com/yourhandle'
        }
      }
    }
  }
};

function App() {
  const [language, setLanguage] = useState('he');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const t = translations[language];
  const isRTL = language === 'he';

  useEffect(() => {
    document.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(language === 'he' ? 'תודה על פנייתך! אחזור אליך בקרוב.' : 'Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const CodeCraftLogo = ({ size = "medium" }) => {
    const sizeClass = size === "large" ? "w-12 h-12" : size === "small" ? "w-8 h-8" : "w-10 h-10";
    const iconSize = size === "large" ? "w-7 h-7" : size === "small" ? "w-4 h-4" : "w-6 h-6";
    const textSize = size === "large" ? "text-xl" : size === "small" ? "text-sm" : "text-lg";
    const spacing = language === 'he' ? "space-x-reverse space-x-3" : "space-x-3";
    
    return (
      <div className={`flex items-center ${spacing}`}>
        <div className={`${sizeClass} bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center relative overflow-hidden shadow-lg`}>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent"></div>
          <Code className={`${iconSize} text-gray-900 relative z-10`} />
        </div>
        <span className={`${textSize} font-bold text-yellow-400`}>
          CodeCraft
        </span>
      </div>
    );
  };

  const SocialLinks = ({ size = 'medium' }) => {
    const iconSize = size === 'large' ? 'w-6 h-6' : 'w-5 h-5';
    const containerSize = size === 'large' ? 'w-12 h-12' : 'w-10 h-10';
    
    const socialIcons = [
      { icon: Facebook, url: t.contact.social.links.facebook, color: 'hover:bg-blue-600' },
      { icon: Instagram, url: t.contact.social.links.instagram, color: 'hover:bg-pink-600' },
      { icon: Linkedin, url: t.contact.social.links.linkedin, color: 'hover:bg-blue-700' },
      { icon: Github, url: t.contact.social.links.github, color: 'hover:bg-gray-600' },
      { icon: Twitter, url: t.contact.social.links.twitter, color: 'hover:bg-blue-400' }
    ];

    return (
      <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
        {socialIcons.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${containerSize} bg-gray-800 ${social.color} text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 flex-shrink-0 border border-gray-700 hover:border-yellow-400`}
            >
              <IconComponent className={iconSize} />
            </a>
          );
        })}
      </div>
    );
  };

  const NavBar = () => {
    return (
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CodeCraftLogo />
              </div>
            </div>

            <div className="hidden md:block">
              <div className={`flex items-center ${language === 'he' ? 'space-x-8 space-x-reverse' : 'space-x-8'}`}>
                {Object.entries(t.nav).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      activeSection === key
                        ? 'text-yellow-400'
                        : 'text-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    {label}
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                      activeSection === key ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'he' ? 'EN' : 'עב'}</span>
              </button>

              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-md text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-300 ${
                    activeSection === key
                      ? 'text-yellow-400 bg-gray-800'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  };

  const HomePage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/10 via-transparent to-yellow-400/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-yellow-500/15 to-amber-600/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent mb-6 leading-tight">
              <span className="block">{language === 'he' ? 'פתרונות דיגיטליים' : 'DIGITAL SOLUTIONS'}</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">{language === 'he' ? 'מותאמים אישית' : 'TAILORED FOR YOU'}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              {t.hero.subtitle}
            </p>
            <button
              onClick={() => setActiveSection('contact')}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-900 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 rounded-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-300 transition-all transform hover:scale-105 shadow-xl hover:shadow-yellow-400/25"
            >
              {t.hero.cta}
              <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </button>
          </div>

          <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { number: '50+', label: t.hero.stats.projects },
              { number: '40+', label: t.hero.stats.clients },
              { number: '3+', label: t.hero.stats.experience }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-xl border border-gray-600 hover:border-yellow-400 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-300 text-base sm:text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-24">
            <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-2xl flex items-center justify-center border border-gray-600 group hover:border-yellow-400 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <Code className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 text-lg sm:text-xl px-4">
                  {language === 'he' ? 'פרויקטים שיוצגו כאן בקרוב' : 'Projects showcase coming soon'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AboutPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-gray-800 to-black py-16 sm:py-20 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-500/10 to-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-600/8 to-amber-500/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent mb-4 sm:mb-6">{t.about.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">{t.about.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mb-8 border border-gray-600 group hover:border-yellow-400 transition-all duration-300 relative overflow-hidden max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/0 via-yellow-400/15 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-12 h-12 sm:w-16 sm:h-16 text-gray-900" />
                  </div>
                  <p className="text-gray-400 text-base sm:text-lg">
                    {language === 'he' ? 'התמונה שלך כאן' : 'Your photo here'}
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {t.about.description}
              </p>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent mb-4 sm:mb-6">{t.about.skills}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Express'].map((skill, index) => (
                    <div key={index} className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600 hover:border-yellow-400 transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 relative z-10 flex-shrink-0"></div>
                      <span className="font-medium text-gray-300 relative z-10 text-sm sm:text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent mb-4 sm:mb-6">{t.about.approach.title}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {t.about.approach.items.map((item, index) => (
                    <div key={index} className="flex items-start p-3 sm:p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600 hover:border-yellow-400 transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 relative z-10" />
                      <span className="text-gray-300 relative z-10 text-sm sm:text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ServicesPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 py-16 sm:py-20 relative">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-r from-yellow-500/15 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-yellow-400/12 to-amber-600/8 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent mb-4 sm:mb-6">{t.services.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.services.items.map((service, index) => {
              const icons = [Globe, Smartphone, Palette];
              const IconComponent = icons[index];
              
              return (
                <div key={index} className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 sm:p-8 rounded-xl border border-gray-600 hover:border-yellow-400 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-3 sm:mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300 text-sm sm:text-base">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const PortfolioPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-yellow-500/10 to-orange-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-tl from-yellow-400/8 to-amber-500/12 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent mb-4 sm:mb-6">{t.portfolio.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">{t.portfolio.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.portfolio.projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-xl overflow-hidden border border-gray-600 hover:border-yellow-400 transition-all duration-300 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 flex items-center justify-center group-hover:from-gray-600 group-hover:via-gray-500 group-hover:to-gray-400 transition-all duration-300">
                    <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-2 sm:mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    <div className="text-xs sm:text-sm bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3 sm:mb-4 font-medium">{project.tech}</div>
                    <button className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300 group text-sm sm:text-base">
                      {language === 'he' ? 'צפה בפרויקט' : 'View Project'}
                      <ExternalLink className={`w-3 h-3 sm:w-4 sm:h-4 ${isRTL ? 'mr-1' : 'ml-1'} group-hover:scale-110 transition-transform duration-300`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-gray-800 to-black py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-yellow-500/12 to-orange-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-yellow-400/10 to-amber-600/15 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent mb-4 sm:mb-6">{t.contact.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">{t.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 sm:p-8 rounded-xl border border-gray-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/10 opacity-50"></div>
              <form onSubmit={handleFormSubmit} className="relative z-10 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-900 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 rounded-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-300 transition-all duration-300 transform hover:scale-105"
                >
                  {t.contact.form.send}
                </button>
              </form>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 rounded-xl border border-gray-600 hover:border-yellow-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a 
                  href="tel:052-8553431"
                  className="flex items-center hover:bg-gray-800/50 p-2 sm:p-3 rounded-lg transition-colors cursor-pointer group relative z-10"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white text-sm sm:text-base">{language === 'he' ? 'טלפון' : 'Phone'}</div>
                    <div className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base">{t.contact.info.phone}</div>
                  </div>
                </a>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 rounded-xl border border-gray-600 hover:border-yellow-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a 
                  href="mailto:rafaelgenish111@gmail.com"
                  className="flex items-center hover:bg-gray-800/50 p-2 sm:p-3 rounded-lg transition-colors cursor-pointer group relative z-10"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-white text-sm sm:text-base">{language === 'he' ? 'אימייל' : 'Email'}</div>
                    <div className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base break-all">{t.contact.info.email}</div>
                  </div>
                </a>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 rounded-xl border border-gray-600 hover:border-yellow-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a 
                  href="https://maps.google.com/?q=פתח תקווה, ישראל"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:bg-gray-800/50 p-2 sm:p-3 rounded-lg transition-colors cursor-pointer group relative z-10"
                >
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white text-sm sm:text-base">{language === 'he' ? 'מיקום' : 'Location'}</div>
                    <div className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base">{t.contact.info.location}</div>
                  </div>
                </a>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 rounded-xl border border-gray-600 hover:border-yellow-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="font-medium text-white mb-4 text-sm sm:text-base">{t.contact.social.title}</h3>
                  <SocialLinks size="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <footer className="bg-black text-white py-8 sm:py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <CodeCraftLogo />
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {language === 'he' 
                  ? 'יוצרים פתרונות דיגיטליים מותאמים אישית לעסקים ומטפלים'
                  : 'Creating custom digital solutions for businesses and healthcare professionals'
                }
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-yellow-400">
                {language === 'he' ? 'קישורים מהירים' : 'Quick Links'}
              </h3>
              <div className="space-y-2">
                {Object.entries(t.nav).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className="block text-gray-400 hover:text-yellow-400 transition-colors duration-300 group text-sm sm:text-base w-full text-center md:text-left"
                  >
                    <span className="relative">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-yellow-400">{t.contact.social.title}</h3>
              <div className="flex justify-center md:justify-start">
                <SocialLinks size="medium" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              {language === 'he' 
                ? '© 2025 CodeCraft. כל הזכויות שמורות. נבנה בגאווה עם React ו-Node.js'
                : '© 2025 CodeCraft. All rights reserved. Built with pride using React and Node.js'
              }
            </p>
          </div>
        </div>
      </footer>
    );
  };

  const renderCurrentPage = () => {
    switch (activeSection) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'portfolio': return <PortfolioPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen ${isRTL ? 'font-sans' : 'font-sans'}`}>
      <NavBar />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}

export default App;
export const getEmploymentData = (t) => [
    {
        company: "C3.ai",
        logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.stocktitan.net%2Fcompany-logo%2Fai-lg.png&f=1&nofb=1&ipt=17492e811a7608e6601228b826a6b7ff1b80c162df26bdb6794fc7b667d0d670",
        date: "Nov 2024 – May 2025",
        type: t('aboutMe.employment.positions.c3ai.type'),
        positions: [
            {
                title: t('aboutMe.employment.positions.c3ai.positions.0.title'),
                description: t('aboutMe.employment.positions.c3ai.positions.0.description', { returnObjects: true })
            }
        ]
    },
    {
        company: "Tata Consultancy Services",
        logo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frunninglife.com.mx%2Fwp-content%2Fuploads%2F2021%2F07%2F970.jpg&f=1&nofb=1&ipt=ea48bf28a3d0fb89b3d27dc0580023599913707d336b26968b996ea5633733c4",
        date: "Jan 2023 – Nov 2024",
        location: t('aboutMe.employment.positions.tcs.location'),
        type: t('aboutMe.employment.positions.tcs.type'),
        positions: [
            {
                title: t('aboutMe.employment.positions.tcs.positions.0.title'),
                date: "Nov 2023 – Nov 2024",
                description: t('aboutMe.employment.positions.tcs.positions.0.description', { returnObjects: true })
            },
            {
                title: t('aboutMe.employment.positions.tcs.positions.1.title'),
                date: "Jan 2023 – Nov 2023",
                description: t('aboutMe.employment.positions.tcs.positions.1.description', { returnObjects: true })
            }
        ]
    },
    {
        company: "NextLine",
        logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnextline.cl%2Flib%2Fimg%2Fnextline-background.jpg&f=1&nofb=1&ipt=a35aad91d56045cf8f6393a385731522f5f5dc0fc4cb8aae7001ce82a920627a",
        date: "Oct 2022 – Dec 2022",
        location: t('aboutMe.employment.positions.nextline.location'),
        type: t('aboutMe.employment.positions.nextline.type'),
        positions: [
            {
                title: t('aboutMe.employment.positions.nextline.positions.0.title'),
                description: t('aboutMe.employment.positions.nextline.positions.0.description', { returnObjects: true })
            }
        ]
    }
];

export const getEducationData = (t) => {
    const educationData = [
        {
            company: "Tec de Monterrey",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l7-ED38XcwKwiqauuL6Ps7nkQyVlDesbohBfGA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=ea972cd53f4cdb7761e810d84e3536fa389c7bf9eb78d722132fef177efc458c",
            date: "Jan 2024 - Present",
            location: t('aboutMe.education.institutions.tec.location'),
            type: t('aboutMe.education.institutions.tec.type'),
            positions: [
                {
                    title: "Master in Applied Artificial Intelligence",
                    description: []
                }
            ]
        },
        {
            company: "LearnQuest",
            logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/91/3ae3bf6d924c9180182672d7302dab/LearnQuest-logo_1200x1200.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
            date: "Mar 2025 - Apr 2025",
            location: t('aboutMe.certifications.institutions.learnquest.location'),
            type: t('aboutMe.certifications.institutions.learnquest.type'),
            positions: [
                {
                    title: "Specialization in Machine Learning for Supply Chains",
                    description: []
                }
            ]
        },
        {
            company: "Tec de Monterrey",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l7-ED38XcwKwiqauuL6Ps7nkQyVlDesbohBfGA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=ea972cd53f4cdb7761e810d84e3536fa389c7bf9eb78d722132fef177efc458c",
            date: "Aug 2019 - Jun 2023",
            location: t('aboutMe.education.institutions.tec.location'),
            type: t('aboutMe.education.institutions.tec.type'),
            positions: [
                {
                    title: "B.S. in Computer Science and Technology",
                    description: []
                }
            ]
        },
        {
            company: "Tec de Monterrey",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l7-ED38XcwKwiqauuL6Ps7nkQyVlDesbohBfGA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=ea972cd53f4cdb7761e810d84e3536fa389c7bf9eb78d722132fef177efc458c",
            date: "Aug 2022 - Dec 2022",
            location: t('aboutMe.education.institutions.tec.location'),
            type: t('aboutMe.education.institutions.tec.type'),
            positions: [
                {
                    title: "Minor in Advanced Artificial Intelligence for Data Science",
                    description: []
                }
            ]
        }
    ];

    // Sort by date (newest first)
    return educationData.sort((a, b) => {
        const getStartDate = (dateStr) => {
            if (dateStr.includes('Present')) return new Date('2099-12-31'); // Present dates go first
            
            // Handle different date formats
            if (dateStr.includes(' – ')) {
                // Range format like "May 5 – 9, 2025"
                const startDate = dateStr.split(' – ')[0];
                const [month, day, year] = startDate.split(' ');
                return new Date(`${year}-${getMonthNumber(month)}-${day.padStart(2, '0')}`);
            } else {
                // Single date format like "Apr 2025" or "May 18, 2022"
                const parts = dateStr.split(' ');
                if (parts.length === 2) {
                    // Format: "Apr 2025"
                    const [month, year] = parts;
                    return new Date(`${year}-${getMonthNumber(month)}-01`);
                } else if (parts.length === 3) {
                    // Format: "May 18, 2022"
                    const [month, day, year] = parts;
                    return new Date(`${year}-${getMonthNumber(month)}-${day.replace(',', '').padStart(2, '0')}`);
                }
            }
            return new Date('1900-01-01'); // Fallback
        };
        
        return getStartDate(b.date) - getStartDate(a.date);
    });
};

export const getCertificationsData = (t) => {
    const certificationsData = [
        {
            company: "Massachusetts Institute of Technology",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",
            date: "May 2025",
            location: t('aboutMe.certifications.institutions.mit.location'),
            type: t('aboutMe.certifications.institutions.mit.type'),
            positions: [
                {
                    title: "2025 NanoLab (Online Portion)",
                    description: []
                }
            ]
        },
        {
            company: "Duke University",
            logo: "https://media.licdn.com/dms/image/v2/C4E0BAQE4nsLlSnlh0A/company-logo_100_100/company-logo_100_100/0/1630588381669?e=1758153600&v=beta&t=ddP_af0-4D7BaO-1qiPkGe05lsiut-EVHB8pKpnj8aM",
            date: "Apr 2025",
            location: t('aboutMe.certifications.institutions.duke.location'),
            type: t('aboutMe.certifications.institutions.duke.type'),
            positions: [
                {
                    title: "Programming Foundations with JavaScript, HTML and CSS",
                    description: []
                }
            ]
        },
        {
            company: "IBM",
            logo: "https://images.credly.com/size/400x400/images/854d76bf-4f74-4d51-98a0-d969214bfba7/IBM%2BLogo%2Bfor%2BAcclaim%2BProfile.png",
            date: "Mar 2024",
            location: t('aboutMe.certifications.institutions.ibm.location'),
            type: t('aboutMe.certifications.institutions.ibm.type'),
            positions: [
                {
                    title: "Data Analysis Using Python",
                    description: []
                }
            ]
        },
        {
            company: "IBM",
            logo: "https://images.credly.com/size/400x400/images/854d76bf-4f74-4d51-98a0-d969214bfba7/IBM%2BLogo%2Bfor%2BAcclaim%2BProfile.png",
            date: "Mar 2024",
            location: t('aboutMe.certifications.institutions.ibm.location'),
            type: t('aboutMe.certifications.institutions.ibm.type'),
            positions: [
                {
                    title: "Getting Started with Enterprise Data Science",
                    description: []
                }
            ]
        },
        {
            company: "CT University AWS Academy",
            logo: "https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png",
            date: "Apr 2023",
            location: t('aboutMe.certifications.institutions.aws.location'),
            type: t('aboutMe.certifications.institutions.aws.type'),
            positions: [
                {
                    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
                    description: []
                }
            ]
        },
        {
            company: "SCRUMstudy",
            logo: "https://www.scrumstudy.com/Scrum-Images/logo-64.png",
            date: "May 18 2022",
            location: t('aboutMe.certifications.institutions.scrumstudy.location'),
            type: t('aboutMe.certifications.institutions.scrumstudy.type'),
            positions: [
                {
                    title: "Scrum Fundamentals Certified",
                    description: []
                }
            ]
        }
    ];

    // Sort by date (newest first)
    return certificationsData.sort((a, b) => {
        const getStartDate = (dateStr) => {
            if (dateStr.includes('Present')) return new Date('2099-12-31'); // Present dates go first
            
            // Handle different date formats
            if (dateStr.includes(' – ')) {
                // Range format like "May 5 – 9, 2025"
                const startDate = dateStr.split(' – ')[0];
                const [month, day, year] = startDate.split(' ');
                return new Date(`${year}-${getMonthNumber(month)}-${day.padStart(2, '0')}`);
            } else {
                // Single date format like "Apr 2025" or "May 18, 2022"
                const parts = dateStr.split(' ');
                if (parts.length === 2) {
                    // Format: "Apr 2025" or "May, 2025"
                    const [month, year] = parts;
                    return new Date(`${year}-${getMonthNumber(month)}-01`);
                } else if (parts.length === 3) {
                    // Format: "May 18, 2022"
                    const [month, day, year] = parts;
                    return new Date(`${year}-${getMonthNumber(month)}-${day.replace(',', '').padStart(2, '0')}`);
                }
            }
            return new Date('1900-01-01'); // Fallback
        };
        
        return getStartDate(b.date) - getStartDate(a.date);
    });
};

// Helper function to convert month names to numbers
const getMonthNumber = (month) => {
    const months = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
        'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
        'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    };
    return months[month] || '01';
};

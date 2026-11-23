export const profile = {
    name: 'Bryle',
    handle: '@dojobinkz',
    role : 'Computer Engineering',
    status: 'Open to work',
    location: 'Dvo City, Philippines',
    timezone: 'Asia/Manila',
    email: 'bryleuyn@gmail.com',
    resume: '#',
    socials:{
        linkedin: 'https://www.linkedin.com/in/bryleuyn/',
        github: 'https://github.com/dojobinks',
    },
};


export const projects  = [
    {
        kind: 'Personal Project',
        year: '2026',
        title: 'Portfolio Website',
        body: 'A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase my skills and projects.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        url: 'bryle.vercel.app'
    },
    
];


export const experience = [
    {
        title: 'Non-Prior',
        org: 'Holy Cross of Davao College',
        year: '2026',
        body: 'LARP',
    },
    
];


export const skills = [
    {
        group: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS","TypeScript"],
    },
    {
        group: "Backend",
        items: ["Rust", "MySQL"]
    },
    {
        group: "Tools",
        items: ["Git" , "Docker"]
    }
];


export const contact = [
    {label:  "Availability", value: "Open to work"},
    {label:  "Response Time", value: "Replies within 24 hours on weekends"},
    {label:  "Location", value: "Remote preferred, on-site open to discussion"},
];


export const sections = [
    {id: "experience", label: "Experience"},
    {id: "projects", label: "Projects"},
    {id: "skills", label: "Skills"},
    {id: "contact", label: "Contact"},
]as const;


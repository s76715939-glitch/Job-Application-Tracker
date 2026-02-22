let jobs = [{
    companyName: "Mobile First Cord",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: {
        from: 130000,
        to: 175000
    },
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "interview"
}, {
    companyName: "TechHive Solutions",
    position: "Web Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: {
        from: 60000,
        to: 90000
    },
    description: "Develop responsive websites and optimize performance for local and international clients.",
    status: "interview"
}, {
    companyName: "CloudNest Ltd.",
    position: "Full Stack Developer",
    location: "Remote",
    type: "Contract",
    salary: {
        from: 95000,
        to: 120000
    },
    description: "Work on scalable backend APIs and modern frontend frameworks to deliver SaaS products.",
    status: "rejected"
}, {
    companyName: "BrightApps Inc.",
    position: "Android App Developer",
    location: "Chittagong",
    type: "Full-time",
    salary: {
        from: 70000,
        to: 100000
    },
    description: "Design and maintain Android applications with a focus on user experience and performance.",
    status: "rejected"
}, {
    companyName: "NextGen Webworks",
    position: "Frontend Engineer",
    location: "Remote",
    type: "Part-time",
    salary: {
        from: 40000,
        to: 60000
    },
    description: "Implement pixel-perfect UI designs using React and Tailwind CSS.",
    status: false
}, {
    companyName: "DataBridge Analytics",
    position: "Backend Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: {
        from: 80000,
        to: 110000
    },
    description: "Develop and optimize APIs, ensuring secure and efficient data flow across systems.",
    status: false
}, {
    companyName: "GameForge Studios",
    position: "Unity Developer",
    location: "Remote",
    type: "Contract",
    salary: {
        from: 90000,
        to: 130000
    },
    description: "Create immersive gaming experiences using Unity and C# for mobile and desktop platforms.",
    status: false
}, {
    companyName: "FinTech Innovators",
    position: "Full Stack Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: {
        from: 100000,
        to: 140000
    },
    description: "Build secure financial applications integrating payment gateways and analytics dashboards.",
    status: false
}, {
    companyName: "EduTech Global",
    position: "Web Application Developer",
    location: "Remote",
    type: "Full-time",
    salary: {
        from: 75000,
        to: 105000
    },
    description: "Develop online learning platforms with interactive features and scalable architecture.",
    status: false
}, {
    companyName: "HealthSync Systems",
    position: "iOS Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: {
        from: 85000,
        to: 120000
    },
    description: "Build healthcare apps for iOS devices, ensuring compliance with medical data standards.",
    status: "rejected"
}];
const totalJobs = document.querySelector('#total-job-count');
const interviewJobs = document.querySelector('#total-interview-count');
const rejectedJobs = document.querySelector('#total-reject-count');
const renderTotalCount = () => {
    totalJobs.innerHTML = jobs.length;
}
const renderInterviewJobCount = () => {
    interviewJobs.innerHTML = jobs.filter(e => e.status === "interview").length;
}
const renderRejecedJobCount = () => {
    rejectedJobs.innerHTML = jobs.filter(e => e.status === "rejected").length;
}
renderTotalCount();
renderInterviewJobCount();
renderRejecedJobCount();
const cardSection = document.querySelector('.card-section');
const jobCountOf = document.querySelector('.jobs-count-of');

const menuContainer = document.querySelector('.menu-items');
const menuItem = menuContainer.querySelectorAll(".menu-item");
menuContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-item')) {
        menuItem.forEach(i => i.classList.remove("menu-active"));
    }
    if (e.target.getAttribute("id") === "all") {
        renderJobs();
    } else if ((e.target.getAttribute("id") === "interview")) {
        renderInterviewJobs();
    } else if ((e.target.getAttribute("id") === "rejected")) {
        renderRejectedJobs();
    }
});

const renderJobs = () => {
    menuItem.forEach((menu) => {
        if (menu.getAttribute('id') === "all") {
            menu.classList.add('menu-active');
        }
    });
    jobCountOf.innerHTML = `${jobs.length} jobs`;
    cardSection.innerHTML = "";
    if (jobs.length === 0) {
        cardSection.innerHTML = `
        <div class="no-job-card">
        <img src="./jobs.png" alt="">
        <h2>No jobs available</h2>
        <p>Check back soon for new job opportunities</p>
        </div>
        `;
        return;
    }
    jobs.forEach((job, i) => {
        const originalIndex = jobs.indexOf(job);
        const html = `
            <div class="job-card ${job.status === "interview" ? "job-card-interview" : ""} ${job.status === "rejected" ? "job-card-rejected" : ""}" data-index="${originalIndex}">
            <h2 class="company-name">${job.companyName}</h2>
            <p class="job-post">${job.position}</p>
            <div class="job-details">${job.location}  •  ${job.type}  •  $${job.salary.from} - $${job.salary.to}</div>
            <button class="status ${job.status === "interview" ? "status-green" : ""} ${job.status === "rejected" ? "status-red" : ""}"> ${(job.status === false) ? "not applied" : job.status} </button>
            <p class="job-description">${job.description}</p>
            <div class="button-container">
                ${
                job.status === "interview"
                ? `<button class="btn btn-hover-red">rejected</button>`
                : job.status === "rejected"
                    ? `<button class="btn btn-hover-green">interview</button>`
                    : `
                    <button class="btn btn-hover-green">interview</button>
                    <button class="btn btn-hover-red">rejected</button>
                    `
                }
            </div>
            <div class="delete-card">
                <img src="./trash.png" alt="">
            </div>
            </div>
    `
        cardSection.innerHTML += html;
    })
}
renderJobs();

const renderInterviewJobs = () => {
    menuItem.forEach((menu) => {
        if (menu.getAttribute('id') === "interview") {
            menu.classList.add('menu-active');
        }
    });
    const interviewJobCount = jobs.filter(c => c.status === "interview");
    jobCountOf.innerHTML = `${interviewJobCount.length} of ${jobs.length} jobs`;
    cardSection.innerHTML = "";
    if (interviewJobCount.length === 0) {
        jobCountOf.innerHTML = '0 jobs';
        cardSection.innerHTML = `
        <div class="no-job-card">
        <img src="./jobs.png" alt="">
        <h2>No jobs available</h2>
        <p>Check back soon for new job opportunities</p>
        </div>
        `;
        return;
    }
    jobs.filter((job) => job.status === "interview").forEach((job, i) => {
        const originalIndex = jobs.indexOf(job);
        const html = `
            <div class="job-card job-card-interview" data-index="${originalIndex}">
            <h2 class="company-name">${job.companyName}</h2>
            <p class="job-post">${job.position}</p>
            <div class="job-details">${job.location}  •  ${job.type}  •  $${job.salary.from} - $${job.salary.to}</div>
            <button class="status ${job.status === "interview" ? "status-green" : ""} ${job.status === "rejected" ? "status-red" : ""}"> ${(job.status === false) ? "not applied" : job.status} </button>
            <p class="job-description">${job.description}</p>
            <div class="button-container">
                ${
                job.status === "interview"
                ? `<button class="btn btn-hover-red">rejected</button>`
                : job.status === "rejected"
                    ? `<button class="btn btn-hover-green">interview</button>`
                    : `
                    <button class="btn btn-hover-green">interview</button>
                    <button class="btn btn-hover-red">rejected</button>
                    `
                }
            </div>
            <div class="delete-card">
                <img src="./trash.png" alt="">
            </div>
            </div>
    `
        cardSection.innerHTML += html;
    });
}
const renderRejectedJobs = () => {
    menuItem.forEach((menu) => {
        if (menu.getAttribute('id') === "rejected") {
            menu.classList.add('menu-active');
        }
    });
    const rejectedJobCount = jobs.filter(c => c.status === "rejected");
    jobCountOf.innerHTML = `${rejectedJobCount.length} of ${jobs.length} jobs`;
    cardSection.innerHTML = "";
    if (rejectedJobCount.length === 0) {
        jobCountOf.innerHTML = '0 jobs';
        cardSection.innerHTML = `
        <div class="no-job-card">
        <img src="./jobs.png" alt="">
        <h2>No jobs available</h2>
        <p>Check back soon for new job opportunities</p>
        </div>
        `;
        return;
    }
    jobs.filter((job) => job.status === "rejected").forEach((job, i) => {
        const originalIndex = jobs.indexOf(job);
        const html = `
            <div class="job-card job-card-rejected" data-index="${originalIndex}">
            <h2 class="company-name">${job.companyName}</h2>
            <p class="job-post">${job.position}</p>
            <div class="job-details">${job.location}  •  ${job.type}  •  $${job.salary.from} - $${job.salary.to}</div>
            <button class="status ${job.status === "interview" ? "status-green" : ""} ${job.status === "rejected" ? "status-red" : ""}"> ${(job.status === false) ? "not applied" : job.status} </button>
            <p class="job-description">${job.description}</p>
            <div class="button-container">
                ${
                job.status === "interview"
                ? `<button class="btn btn-hover-red">rejected</button>`
                : job.status === "rejected"
                    ? `<button class="btn btn-hover-green">interview</button>`
                    : `
                    <button class="btn btn-hover-green">interview</button>
                    <button class="btn btn-hover-red">rejected</button>
                    `
                }
            </div>
            <div class="delete-card">
                <img src="./trash.png" alt="">
            </div>
            </div>
    `
        cardSection.innerHTML += html;
    });
}

cardSection.addEventListener("click", (e) => {
    const card = e.target.closest(".job-card");
    if (!card) return;

    const i = card.dataset.index;
    const job = jobs[i];

    if (e.target.classList.contains("btn-hover-green")) {
        job.status = "interview";
    }

    if (e.target.classList.contains("btn-hover-red")) {
        job.status = "rejected";
    }

    const activeTab = document.querySelector(".menu-item.menu-active").getAttribute('id');
    if (activeTab === "all") {
        renderJobs();
        renderInterviewJobCount();
        renderRejecedJobCount();
    } else if (activeTab === "interview") {
        renderInterviewJobs();
        renderInterviewJobCount();
        renderRejecedJobCount();
    } else if (activeTab === "rejected") {
        renderRejectedJobs();
        renderInterviewJobCount();
        renderRejecedJobCount();
    }
});
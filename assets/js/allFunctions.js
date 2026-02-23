const totalJobs = document.querySelector("#total-job-count");
const interviewJobs = document.querySelector("#total-interview-count");
const rejectedJobs = document.querySelector("#total-reject-count");
const renderTotalCount = () => {
  totalJobs.innerHTML = jobs.length;
};
const renderInterviewJobCount = () => {
  interviewJobs.innerHTML = jobs.filter((e) => e.status === "interview").length;
};
const renderRejecedJobCount = () => {
  rejectedJobs.innerHTML = jobs.filter((e) => e.status === "rejected").length;
};
renderTotalCount();
renderInterviewJobCount();
renderRejecedJobCount();
const renderJobs = () => {
  menuItem.forEach((menu) => {
    if (menu.getAttribute("id") === "all") {
      menu.classList.add("menu-active");
    }
  });
  jobCountOf.innerHTML = `${jobs.length} jobs`;
  cardSection.innerHTML = "";
  if (jobs.length === 0) {
    cardSection.innerHTML = `
        <div class="no-job-card">
        <img src="./assets/images/jobs.png" alt="">
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
            <div class="job-details">${job.location}&nbsp;&nbsp;•&nbsp;&nbsp;${job.type}&nbsp;&nbsp;•&nbsp;&nbsp;$${job.salary.from.toLocaleString()} - $${job.salary.to.toLocaleString()}</div>
            <button class="status ${job.status === "interview" ? "status-green" : ""} ${job.status === "rejected" ? "status-red" : ""}"> ${job.status === false ? "not applied" : job.status} </button>
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
                <img src="./assets/images/trash.png" alt="">
            </div>
            </div>
    `;
    cardSection.innerHTML += html;
  });
};
const renderInterviewJobs = () => {
  menuItem.forEach((menu) => {
    if (menu.getAttribute("id") === "interview") {
      menu.classList.add("menu-active");
    }
  });
  const interviewJobCount = jobs.filter((c) => c.status === "interview");
  jobCountOf.innerHTML = `${interviewJobCount.length} of ${jobs.length} jobs`;
  cardSection.innerHTML = "";
  if (interviewJobCount.length === 0) {
    jobCountOf.innerHTML = "0 jobs";
    cardSection.innerHTML = `
        <div class="no-job-card">
        <img src="./assets/images/jobs.png" alt="">
        <h2>No jobs available</h2>
        <p>Check back soon for new job opportunities</p>
        </div>
        `;
    return;
  }
  jobs
    .filter((job) => job.status === "interview")
    .forEach((job, i) => {
      const originalIndex = jobs.indexOf(job);
      const html = `
            <div class="job-card job-card-interview" data-index="${originalIndex}">
            <h2 class="company-name">${job.companyName}</h2>
            <p class="job-post">${job.position}</p>
            <div class="job-details">${job.location}&nbsp;&nbsp;•&nbsp;&nbsp;${job.type}&nbsp;&nbsp;•&nbsp;&nbsp;$${job.salary.from.toLocaleString()} - $${job.salary.to.toLocaleString()}</div>
            <button class="status ${job.status === "interview" ? "status-green" : ""} ${job.status === "rejected" ? "status-red" : ""}"> ${job.status === false ? "not applied" : job.status} </button>
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
                <img src="./assets/images/trash.png" alt="">
            </div>
            </div>
    `;
      cardSection.innerHTML += html;
    });
};
const renderRejectedJobs = () => {
  menuItem.forEach((menu) => {
    if (menu.getAttribute("id") === "rejected") {
      menu.classList.add("menu-active");
    }
  });
  const rejectedJobCount = jobs.filter((c) => c.status === "rejected");
  jobCountOf.innerHTML = `${rejectedJobCount.length} of ${jobs.length} jobs`;
  cardSection.innerHTML = "";
  if (rejectedJobCount.length === 0) {
    jobCountOf.innerHTML = "0 jobs";
    cardSection.innerHTML = `
        <div class="no-job-card">
        <img src="./assets/images/jobs.png" alt="">
        <h2>No jobs available</h2>
        <p>Check back soon for new job opportunities</p>
        </div>
        `;
    return;
  }
  jobs
    .filter((job) => job.status === "rejected")
    .forEach((job, i) => {
      const originalIndex = jobs.indexOf(job);
      const html = `
            <div class="job-card job-card-rejected" data-index="${originalIndex}">
            <h2 class="company-name">${job.companyName}</h2>
            <p class="job-post">${job.position}</p>
            <div class="job-details">${job.location}&nbsp;&nbsp;•&nbsp;&nbsp;${job.type}&nbsp;&nbsp;•&nbsp;&nbsp;$${job.salary.from.toLocaleString()} - $${job.salary.to.toLocaleString()}</div>
            <button class="status ${job.status === "interview" ? "status-green" : ""} ${job.status === "rejected" ? "status-red" : ""}"> ${job.status === false ? "not applied" : job.status} </button>
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
                <img src="./assets/images/trash.png" alt="">
            </div>
            </div>
    `;
      cardSection.innerHTML += html;
    });
};

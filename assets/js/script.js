const cardSection = document.querySelector(".card-section");
const jobCountOf = document.querySelector(".jobs-count-of");

const menuContainer = document.querySelector(".menu-items");
const menuItem = menuContainer.querySelectorAll(".menu-item");
menuContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-item")) {
    if (e.target.classList.contains("menu-active")) {
      return;
    } else {
      menuItem.forEach((i) => i.classList.remove("menu-active"));
    }
  } else return;

  if (e.target.getAttribute("id") === "all") {
    renderJobs();
  } else if (e.target.getAttribute("id") === "interview") {
    renderInterviewJobs();
  } else if (e.target.getAttribute("id") === "rejected") {
    renderRejectedJobs();
  }
});

renderJobs();

cardSection.addEventListener("click", (e) => {
  const card = e.target.closest(".job-card");
  if (!card) return;

  const i = card.dataset.index;
  const job = jobs[i];

  let shouldRender = false;

  if (e.target.classList.contains("btn-hover-green")) {
    job.status = "interview";
    shouldRender = true;
  }
  if (e.target.classList.contains("btn-hover-red")) {
    job.status = "rejected";
    shouldRender = true;
  }
  if (
    e.target.classList.contains("delete-card") ||
    e.target.closest(".delete-card")
  ) {
    jobs.splice(i, 1);
    shouldRender = true;
  }
  if (!shouldRender) return;

  const activeTab = document
    .querySelector(".menu-item.menu-active")
    .getAttribute("id");

  if (activeTab === "all") {
    renderJobs();
    renderTotalCount();
    renderInterviewJobCount();
    renderRejecedJobCount();
  } else if (activeTab === "interview") {
    renderInterviewJobs();
    renderTotalCount();
    renderInterviewJobCount();
    renderRejecedJobCount();
  } else if (activeTab === "rejected") {
    renderRejectedJobs();
    renderTotalCount();
    renderInterviewJobCount();
    renderRejecedJobCount();
  }
});

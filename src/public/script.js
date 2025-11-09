async function loadJobs() {
  try {
    const res = await fetch('/api/jobs');
    const jobs = await res.json();

    const container = document.getElementById('job-container');

    if (!jobs.length) {
      container.innerHTML = '<p>No jobs found.</p>';
      return;
    }

    container.innerHTML = jobs.map(job => `
      <div class="job-card">
        <img src="${job.companyLogo || '/default-logo.png'}" alt="logo" class="logo" />
        <h3>${job.title}</h3>
        <p><strong>${job.company}</strong></p>
        <p>${job.description.replace(/\n/g, '<br>')}</p>
        <a href="${job.applyLink}" target="_blank">Apply Now</a>
      </div>
    `).join('');
  } catch (err) {
    console.error(err);
    document.getElementById('job-container').innerHTML = 'Error loading jobs.';
  }
}

loadJobs();

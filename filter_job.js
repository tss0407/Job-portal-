const salary_value=localStorage.getItem("salary_value");
const loc_value=localStorage.getItem("loc_value");
const main_role_value=localStorage.getItem("main_role_value");
const role_value=localStorage.getItem("role_value");
console.log(salary_value)
document.addEventListener('DOMContentLoaded',()=>{
    fetch('fake_job_postings.json')
    .then(response =>response.json())
    .then(data => {
        const jobList=data;
        displayJobs(data);
    })
});

function displayJobs(jobs){
    const card=document.querySelector(".display_filterjobs");
    console.log(card);
    // card.innerHTML="";
    for(let i=0;i<jobs.length;i=i+1) {
        if(jobs[i].salary_range==salary_value || jobs[i].title==role_value || jobs[i].location==loc_value || jobs[i].title==main_role_value){
            const currentjob=jobs[i];
            const cardBody=document.createElement('div');
            cardBody.classList.add("card");
            cardBody.style.width="18rem";
            var current_empl=currentjob.employment_type;
            
            if(current_empl == ""){
                current_empl="NA";
            }
            
            cardBody.innerHTML=`
            
                <div class="filter_card w-100 ">
                    <div class="card-body">
                        <h5 class="card-title">${currentjob.title}</h5>
                        <div class="job-location_svg">
                            <img  src="./svg/location-2955.svg" alt="location-svg">
                            <p class="card-text">${currentjob.location}</p>
                        </div>
                        <div class="job-location_svg">
                            <img src="./svg/suitcase-svgrepo-com.svg" alt="suitcase-svg"/>
                            <p class="card-text">${current_empl}</p>
                        </div>
                        <a href="./jobdetails.html" onclick="send_job(${currentjob.job_id})" target="_blank" class="btn btn-primary">See details</a>
                    </div>
                </div>`
            
        
            ;

            // loc_keywords.add(currentjob.location);
            // loc_keywords.add(nextJob.location);
            // role_keywords.add(currentjob.title);
            // role_keywords.add(nextJob.title);
            // salary_keywords.add(currentjob.salary_range);
            // salary_keywords.add(nextJob.salary_range);
            
            card.appendChild(cardBody);
        };
    
    }
        
}

localStorage.removeItem("salary_value");
localStorage.removeItem("loc_value");
localStorage.removeItem("main_role_value");
localStorage.removeItem("role_value");
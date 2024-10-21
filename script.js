const jobList=[];

document.addEventListener('DOMContentLoaded',()=>{
    fetch('fake_job_postings.json')
    .then(response =>response.json())
    .then(data => {
        
        displayJobs(data);
    })
});

const loc_keywords=new Set();
const role_keywords=new Set();
const salary_keywords=new Set();

function displayJobs(jobs){
    const card=document.querySelector(".display_jobs");
    console.log(card)
    card.innerHTML=""
    for(let i=0;i<jobs.length;i=i+2) {
        const cardBody=document.createElement('div');
        cardBody.classList.add("row");
        cardBody.classList.add("row-cols-1");
        cardBody.classList.add("row-cols-md-2");
        cardBody.classList.add("g-4");
        cardBody.classList.add("super_card");
        const currentjob=jobs[i];
        const nextJob=jobs[i+1];
        
        var current_empl=currentjob.employment_type;
        var nxt_empl=nextJob.employment_type;
        if(current_empl == ""){
            current_empl="NA";
        }
        else if(nxt_empl== ""){
            nxt_empl="NA";
        }
        cardBody.innerHTML=`
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${currentjob.title}</h3>
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
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${nextJob.title}</h3>
                    <div class="job-location_svg">
                        <img  src="./svg/location-2955.svg" alt="location-svg">
                        <p class="card-text">${nextJob.location}</p>
                    </div>
                    <div class="job-location_svg">
                        <img src="./svg/suitcase-svgrepo-com.svg" alt="suitcase-svg"/>
                        <p class="card-text">${nxt_empl}</p>
                    </div> 
                    <a href="./jobdetails.html" onclick="send_job(${nextJob.job_id})" target="_blank" class="btn btn-primary">See details</a>
                </div>
            </div>
        </div>`;

        loc_keywords.add(currentjob.location);
        loc_keywords.add(nextJob.location);
        role_keywords.add(currentjob.title);
        role_keywords.add(nextJob.title);
        salary_keywords.add(currentjob.salary_range);
        salary_keywords.add(nextJob.salary_range);
        
        
        card.appendChild(cardBody);
    };
    
}


const loc_result=document.querySelector(".loc_result");
const loc_inputBox=document.querySelector(".filter-location");
loc_inputBox.onkeyup=function(){
    let result=[]
    var input=loc_inputBox.value;
    if(input.length){
        result=Array.from(loc_keywords).filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    
    display_loc(result)
}
function display_loc(result){
    loc_result.innerHTML = "";
    const ul=document.createElement("ul");
    ul.classList.add("result_ul");
    
    result.forEach(item =>{
        const li = document.createElement('li'); 
        li.textContent = item;  
        ul.appendChild(li); 
        li.addEventListener("click", ()=> {
            loc_inputBox.value = item;
            document.querySelector(".result_ul").style.display="none";
        });
    });
    loc_result.appendChild(ul);
    document.querySelector(".result_ul").style.display="flex";
    loc_result.style.overflow="scroll";
    loc_result.style.maxHeight="100px";
    loc_result.style.height="auto";
}



const role_result=document.querySelector(".salary_result");
const role_inputBox=document.querySelector(".filter-role");
role_inputBox.onkeyup=function(){
    let result=[]
    let input=role_inputBox.value;
    if(input.length){
        result=Array.from(role_keywords).filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display_role(result)
}
function display_role(result){
    role_result.innerHTML = "";
    const ul=document.createElement("ul");
    ul.classList.add("result_ul");
    result.forEach(item =>{
        const li = document.createElement('li'); 
        li.textContent = item; 
        ul.appendChild(li); 
        li.addEventListener("click", ()=> {
            role_inputBox.value = item;
            document.querySelector(".result_ul").style.display="none";
        });
        
    });
    role_result.appendChild(ul);
    document.querySelector(".result_ul").style.display="flex";
    role_result.style.overflow="scroll";
    role_result.style.maxHeight="100px";
    role_result.style.height="auto";
}

const salary_result=document.querySelector(".salary_result");
const salary_inputBox=document.querySelector(".filter-salary");
salary_inputBox.onkeyup=function(){
    let result=[]
    let input=salary_inputBox.value;
    if(input.length){
        result=Array.from(salary_keywords).filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display_salary(result)
}
function display_salary(result){
    salary_result.innerHTML = "";
    const ul=document.createElement("ul");
    ul.classList.add("result_ul");
    result.forEach(item =>{
        const li = document.createElement('li'); 
        li.textContent = item;       
        ul.appendChild(li); 
        li.addEventListener("click", ()=> {
            salary_inputBox.value = item;
            document.querySelector(".result_ul").style.display="none";
        });; 
    });
    salary_result.appendChild(ul);
    document.querySelector(".result_ul").style.display="flex";
    salary_result.style.overflow="scroll";
    salary_result.style.maxHeight="100px";
    salary_result.style.height="auto";
}

function send_job(job_id){
    localStorage.setItem("Job_ID",job_id);
}

////
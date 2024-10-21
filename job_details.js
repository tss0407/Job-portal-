document.addEventListener('DOMContentLoaded',()=>{
    fetch('fake_job_postings.json')
    .then(response =>response.json())
    .then(data => {
        
        displayJobDetails(data);
    })
    
});
const Job_ID=localStorage.getItem("Job_ID");
console.log(Job_ID);
function displayJobDetails(jobs){
    for(let i=0;i<jobs.length;i++){
        if(jobs[i].job_id==Job_ID){
            var currentjob=jobs[i];
            break;
        }
    } 
    const keyName=Object.keys(currentjob);
    
    for(let j=0;j<keyName.length;j++){
        const key=keyName[j];
        if(currentjob[key]==""){
            currentjob[key]="NA"
        }
    }

        

    const basic_details=document.querySelector(".basic_details");
    basic_details.innerHTML=`
        <h2>${currentjob.title}</h2>  
        <p>${currentjob.department}</p>
        <p>${currentjob.location}</p>
        <p>${currentjob.salary_range}</p>
    `
    const Profile_Insights=document.querySelector(".Profile_Insights");
    Profile_Insights.innerHTML=`
        <h2>Profile Insights</h2>
            <div class="pay">
              <div class="pay_logo">
                <img src="./logo/salary.png" alt="salary-png">
                <h4>Pay</h4>
              </div>
              <h5>${currentjob.salary_range}</h5>
            </div>
            <div class="employ_type">
                <div class="job_type">
                    <svg fill="#000000" viewBox="0 0 24 24" id="job" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect id="secondary" x="5" y="5" width="14" height="18" rx="1" transform="translate(26 2) rotate(90)" style="fill: #b2c9cd; stroke-width: 2;"></rect><path id="primary" d="M16,7H8V4A1,1,0,0,1,9,3h6a1,1,0,0,1,1,1Zm1,4H7m8,0v2m6,7V8a1,1,0,0,0-1-1H4A1,1,0,0,0,3,8V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20Z" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>
                    <h4>Job-Type</h4>
                </div>
                <h5>${currentjob.employment_type}</h5>
            </div>
    `
    const loc_description=document.querySelector(".loc_description");
    loc_description.innerHTML=`
        <div class="loc_svg">
            <img src="./svg/location-2955.svg" alt="location_svg">
            <h3>Location</h3>
        </div>
        <h5>${currentjob.location}</h5>
    `

    const Job_description=document.querySelector(".Job-description");
    Job_description.innerHTML=`
        <h2>Job-description</h2>
        <p>${currentjob.description}</p>
    `
    const Qualification=document.querySelector(".Qualification");
    Qualification.innerHTML=`
            <h2>Qualification</h2>
            <p>Education: ${currentjob.required_education}</p>
            <p>Experience: ${currentjob.required_experience}</p>
            <p>Requirements: ${currentjob.requirements}</p>
            
    `
    
    const Benefits=document.querySelector(".Benefits");
    Benefits.innerHTML=`
        <h3>Job-Benefits</h3>
        <p>${currentjob.benefits}</p>
    `






}

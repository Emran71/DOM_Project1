const milestoneData = JSON.parse(data).data;

function loadMilestone(){
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = milestoneData.map(function(milestone){
       return `<div class="milestone border-b" id = "${milestone._id}">
                  <div class="flex">
                        <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${milestone._id})"/></div>
                        <div onclick="openMilestone( this, ${milestone._id})">
                            <p>
                            ${milestone.name}
                            <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>
                   </div>
              <div class="hidden_panel">
                 ${milestone.modules.map(function(module){
                      return `<div class="module border-b">
                    <p>${module.name}</p>
               </div>`;
              }).join("")}
            </div>
          </div>`;
    }).join(" ");
}

function openMilestone(milestoneElement, id){
    const currentpanel = milestoneElement.parentNode.nextElementSibling;
    const shown_panel = document.querySelector(".show");
    const active_pannel = document.querySelector(".active");
    
    if(active_pannel && !milestoneElement.classList.contains("active")){
        active_pannel.classList.remove("active");
    }
    milestoneElement.classList.toggle("active");

    if(!currentpanel.classList.contains("show")&& shown_panel){
        shown_panel.classList.remove("show");
    }
    currentpanel.classList.toggle("show");
    
    imageMileStone(id);
    
}

function imageMileStone(id){
   let image = document.querySelector(".milestoneImage");
   let title = document.querySelector(".title");
   let details = document.querySelector(".details");

   image.style.opacity = "0";
   image.src = milestoneData[id].image;
   title.innerText = milestoneData[id].name;
   details.innerText = milestoneData[id].description;
}
let image = document.querySelector(".milestoneImage");
image.onload = function (){
    this.style.opacity = "1";  
}

function markMileStone(checkbox, id){
    const doneList = document.querySelector(".doneList");
    const milestones = document.querySelector(".milestones");
    const doneItem = document.getElementById(id);

    if(checkbox.checked){
        milestones.removeChild(doneItem);
        doneList.appendChild(doneItem);
    }
    else{
        milestones.appendChild(doneItem);
        doneList.removeChild(doneItem);
        reloadMileStone();
    }
}

function reloadMileStone(){
     
};

loadMilestone();

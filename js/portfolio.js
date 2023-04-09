document.querySelector("#showidea1").addEventListener("click",show_idea);
document.querySelector("#showidea2").addEventListener("click",show_idea);
document.querySelector("#showidea3").addEventListener("click",show_idea);
document.querySelector("#showidea4").addEventListener("click",show_idea);

function show_idea(){

    document.querySelector("#theidea").classList.remove("hidden");
    document.querySelector("#thechallenges").classList.add("hidden");
    document.querySelector("#whatILearned").classList.add("hidden");
}

document.querySelector("#showchallenges1").addEventListener("click",show_challenges);
document.querySelector("#showchallenges2").addEventListener("click",show_challenges);
document.querySelector("#showchallenges3").addEventListener("click",show_challenges);
document.querySelector("#showchallenges4").addEventListener("click",show_challenges);


function show_challenges(){

    document.querySelector("#thechallenges").classList.remove("hidden");
    document.querySelector("#theidea").classList.add("hidden");
    document.querySelector("#whatILearned").classList.add("hidden");
}

document.querySelector("#showwhatilearned1").addEventListener("click",show_whatIlearned);
document.querySelector("#showwhatilearned2").addEventListener("click",show_whatIlearned);
document.querySelector("#showwhatilearned3").addEventListener("click",show_whatIlearned);
document.querySelector("#showwhatilearned4").addEventListener("click",show_whatIlearned);


function show_whatIlearned(){

    document.querySelector("#thechallenges").classList.add("hidden");
    document.querySelector("#theidea").classList.add("hidden");
    document.querySelector("#whatILearned").classList.remove("hidden");

}


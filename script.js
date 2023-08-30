document.querySelector("#like").onclick = function()
{
    document.querySelector("#emptyHeart").classList.toggle("hidden");
    document.querySelector("#fullHeart").classList.toggle("hidden");
};

document.querySelector("#moreInfo").onclick = function() {
    let div = document.querySelector("#close");
    div.classList.toggle("hidden");
    div.animate(
        [
            // keyframes
            { transform: 'translateY(100%)' },
            { transform: 'translateY(-20%)' }, // Ajout d'un rebond
            { transform: 'translateY(0)' }
        ], 
        { 
            // timing options
            duration: 2000,
            iterations: 1
        }
    );
};

document.querySelector("#arrow").onclick = function()
{
    document.querySelector("#close").classList.toggle("hidden");
};


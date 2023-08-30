document.querySelector("#like").onclick = function()
{
    document.querySelector("#emptyHeart").classList.toggle("hidden");
    document.querySelector("#fullHeart").classList.toggle("hidden");
};

document.querySelector("#moreInfo").onclick = function()
{
    document.querySelector("#close").classList.toggle("hidden");
};

document.querySelector("#arrow").onclick = function()
{
    document.querySelector("#close").classList.toggle("hidden");
};


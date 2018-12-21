var banners = ["Os melhores preços do Brasil", "Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBannner(){
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector("#mensagem").textContent = banners[bannerAtual];
}

setInterval(trocaBannner, 2000);
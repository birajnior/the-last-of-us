/* 
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

	- passo 1 - dar um jeito de pegar o elemento HTML dos botões

	- passo 2 - dar um jeito de identificar o clique do usuário no botão

	- passo 3 - desmarcar o botão selecionado anterior

	- passo 4 - marcar o botão clicado como se estivesse selecionada

	- passo 5 - esconder a imagem de fundo anterior

	- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

//   - passo 1 - 
const carouselButtons = document.querySelectorAll(".buttons");
const images = document.querySelectorAll('.image');

// - passo 2 - 
carouselButtons.forEach((button, indice) => {
	button.addEventListener('click', () => {
		// - passo 3 - 
		disableSelectedButton();

		// - passo 4 - 
		selectCarouselButton(button);

		// - passo 5 - 
		hideActiveImage();

		// - passo 6 -
		showBackgroundImage(indice);
	})
})

function disableSelectedButton() {
	const selectedButton = document.querySelector(".selected");
	selectedButton.classList.remove('selected');
}

function hideActiveImage() {
	const activeImage = document.querySelector(".active");
	activeImage.classList.remove('active');
}

function selectCarouselButton(button) {
	button.classList.add('selected');
}

function showBackgroundImage(indice) {
	images[indice].classList.add('active');
}

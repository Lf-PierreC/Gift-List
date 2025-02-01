class Gift {
    constructor(status, foto, nome, valor) {
        this.status = status;
        this.foto = foto;
        this.nome = nome;
        this.valor = valor;
    }

    criarGift() {
        const giftContainer = document.createElement('div');
        giftContainer.className = 'gift';

        const statusGiftContainer = document.createElement('div');
        statusGiftContainer.className = 'statusGiftContainer';

        const statusGift = document.createElement('p');

        if(this.status == 'true'){
            statusGift.className = 'statusGiftTrue';
            statusGift.textContent = 'Presenteado'
            statusGiftContainer.appendChild(statusGift);
        } else {
            statusGift.className = 'statusGiftFalse';
            statusGift.textContent = 'Presenteie'
            statusGiftContainer.appendChild(statusGift);
        }

        const imgGift = document.createElement('div');
        imgGift.className = 'imgGift';

        const imgSrc = document.createElement('img');
        imgSrc.src = this.foto;
        imgSrc.alt = `${this.nome} Imagem`;
        imgSrc.className = 'printGift';
        imgGift.appendChild(imgSrc);

        const giftText = document.createElement('div');
        giftText.className = 'textosGift';

        const nomeGift = document.createElement('h1');
        nomeGift.className = 'nomeGift';
        nomeGift.textContent = this.nome;
        giftText.appendChild(nomeGift)

        const valorGift = document.createElement('p')
        valorGift.className = 'valorGift';
        valorGift.textContent = this.valor;
        giftText.appendChild(valorGift)

        giftContainer.appendChild(statusGiftContainer);
        giftContainer.appendChild(imgGift);
        giftContainer.appendChild(giftText);

        return giftContainer
    }

    addGift() {
        const giftElemento = this.criarGift();
        document.getElementById('list').appendChild(giftElemento);
    }
}

const gift1 = new Gift('true', './Imagens/sofa.jpg', 'Sofá', 'R$300');
gift1.addGift();

const gift2 = new Gift('false', './Imagens/sofa.jpg', 'Sofá', 'R$300');
gift2.addGift();
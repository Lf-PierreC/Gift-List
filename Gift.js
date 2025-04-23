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

        if (this.nome === 'Ferro a vapor') {
            imgGift.classList.add('vaporImage'); 
        }

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

        const linkElement = document.createElement('a');
        linkElement.href = 'https://loja.infinitepay.io/theguicosta?search=';
        linkElement.target = "_blank";
        linkElement.appendChild(giftContainer);

        giftContainer.appendChild(statusGiftContainer);
        giftContainer.appendChild(imgGift);
        giftContainer.appendChild(giftText);

        return linkElement
    }

    addGift() {
        const giftElemento = this.criarGift();
        document.getElementById('list').appendChild(giftElemento);
    }
}

const gift2 = new Gift('false', './Imagens/lava_seca.png', 'Lava e Seca', 'R$2500');
gift2.addGift();

const gift3 = new Gift('true', './Imagens/geladeira.jpg', 'Geladeira', 'R$2800');
gift3.addGift();

const gift4 = new Gift('false', './Imagens/cooktop.jpg', 'Cooktop', 'R$480');
gift4.addGift();

const gift5 = new Gift('false', './Imagens/cama.jpg', 'Cama', 'R$1200');
gift5.addGift();

const gift6 = new Gift('false', './Imagens/tv.jpg', 'TV', 'R$2200');
gift6.addGift();

const gift7 = new Gift('false', './Imagens/aspirador.jpg', 'Aspirador de pó robô', 'R$900');
gift7.addGift();

const gift8 = new Gift('false', './Imagens/ferro.jpg', 'Ferro de passar', 'R$160');
gift8.addGift();

const gift9 = new Gift('false', './Imagens/ferro_vapor.jpg', 'Ferro a vapor', 'R$250');
gift9.addGift();

const gift10 = new Gift('false', './Imagens/liquidificador.jpg', 'Liquidificador', 'R$150');
gift10.addGift();

const gift11 = new Gift('false', './Imagens/grill.jpg', 'Grill', 'R$160');
gift11.addGift();

const gift12 = new Gift('true', './Imagens/microondas.jpg', 'Microondas', 'R$661');
gift12.addGift();

const gift13 = new Gift('false', './Imagens/air_fryer.jpg', 'Air fryer', 'R$380');
gift13.addGift();

const gift14 = new Gift('false', './Imagens/cafeteira.jpg', 'Cafeteira', 'R$400');
gift14.addGift();

const gift15 = new Gift('false', './Imagens/ajuda_lua_mel.jpg', 'Ajuda na lua de mel', 'R$200');
gift15.addGift();

const gift16 = new Gift('false', './Imagens/ajuda_lua_mel_2.jpg', 'Ajuda na lua de mel pfvr kkk', 'R$200');
gift16.addGift();

const gift17 = new Gift('false', './Imagens/noite_nupcias.jpg', 'Noite de núpcias Glória', 'R$300');
gift17.addGift();

const gift18 = new Gift('false', './Imagens/terapia_aline.jpg', 'Terapia que a Aline vai precisar pra aguentar o Gui', 'R$250');
gift18.addGift();

const gift19 = new Gift('false', './Imagens/pc_gamer.jpg', 'Ajuda pra comprar um pc gamer pro Gui não ficar depressivo', 'R$300');
gift19.addGift();

const gift20 = new Gift('false', './Imagens/curso_chef.jpg', 'Curso de chef de cozinha pro casal não passar fome', 'R$150');
gift20.addGift();

const gift21 = new Gift('false', './Imagens/pano_prato.jpg', 'Ajuda pra comprar pano de prato extra porque o Gui vai queimar todos', 'R$85');
gift21.addGift();

const gift22 = new Gift('false', './Imagens/shampoo.jpg', 'Ajuda pra comprar shampoo pro casal (vamos precisar)', 'R$120');
gift22.addGift();

const gift23 = new Gift('false', './Imagens/aromatizador.jpg', 'Aromatizador de ambiente pra Line não desmaiar com os peidos do Gui', 'R$200');
gift23.addGift();

const gift24 = new Gift('false', './Imagens/ferramentas.jpg', 'Ferramentas, Gui vai ter que aprender na marra', 'R$150');
gift24.addGift();

const gift25 = new Gift('false', './Imagens/arena_corinthians.jpeg', 'Ajuda para o Gui e Aline irem na Arena', 'R$125');
gift25.addGift();

const gift26 = new Gift('false', './Imagens/po_cafe.jpg', 'Pó de café pro vício da Aline', 'R$70');
gift26.addGift();

const gift27 = new Gift('false', './Imagens/faqueiro.jpg', 'Faqueiro', 'R$120');
gift27.addGift();

const gift28 = new Gift('false', './Imagens/copos.jpg', 'Jogo de copos', 'R$100');
gift28.addGift();

const gift29 = new Gift('false', './Imagens/tacas.jpg', 'Jogo de taças', 'R$100');
gift29.addGift();

const gift30 = new Gift('false', './Imagens/xicaras.jpg', 'Jogo de xícaras', 'R$150');
gift30.addGift();

const gift31 = new Gift('false', './Imagens/panelas.jpg', 'Jogo de Panelas', 'R$300');
gift31.addGift();

const gift32 = new Gift('false', './Imagens/panela_pressao.jpg', 'Panela de pressão', 'R$250');
gift32.addGift();

const gift33 = new Gift('false', './Imagens/garrafa_cafe.jpg', 'Garrafa de café', 'R$80');
gift33.addGift();

const gift34 = new Gift('false', './Imagens/escorredor.jpg', 'Escorredor de louça', 'R$145');
gift34.addGift();

const gift35 = new Gift('false', './Imagens/bebedouro.jpg', 'Bebedouro D’água', 'R$400');
gift35.addGift();

const gift36 = new Gift('false', './Imagens/potes_travessas.jpg', 'Potes e travessas', 'R$150');
gift36.addGift();

const gift37 = new Gift('false', './Imagens/jogo_cama.jpg', 'Jogo de cama', 'R$400');
gift37.addGift();

const gift38 = new Gift('false', './Imagens/jogo_toalha.jpg', 'Jogo de toalha', 'R$250');
gift38.addGift();

const gift39 = new Gift('false', './Imagens/colcha.jpg', 'Colcha', 'R$200');
gift39.addGift();

const gift40 = new Gift('false', './Imagens/edredom.jpg', 'Edredom', 'R$200');
gift40.addGift();

const gift41 = new Gift('false', './Imagens/travesseiro.jpg', 'Travesseiro', 'R$190');
gift41.addGift();

const gift42 = new Gift('false', './Imagens/cesto_roupa.jpg', 'Cesto de roupa', 'R$80');
gift42.addGift();

const gift43 = new Gift('false', './Imagens/cortina.jpg', 'Cortina', 'R$150');
gift43.addGift();

const gift44 = new Gift('false', './Imagens/almofada.jpg', 'Almofada', 'R$85');
gift44.addGift();

const gift45 = new Gift('false', './Imagens/jogo_toalha_mesa.jpg', 'Jogo de toalha de mesa', 'R$100');
gift45.addGift();

const gift46 = new Gift('false', './Imagens/jogo_americano.jpg', 'Jogo americano', 'R$60');
gift46.addGift();

const gift47 = new Gift('false', './Imagens/tapete.jpg', 'Tapete', 'R$150');
gift47.addGift();

const gift48 = new Gift('false', './Imagens/abajur.jpg', 'Abajur', 'R$130');
gift48.addGift();

const gift49 = new Gift('false', './Imagens/cama_casal.jpg', 'Cama de casal', 'R$970');
gift49.addGift();

const gift50 = new Gift('false', './Imagens/colchao.png', 'Colchão', 'R$630');
gift50.addGift();

const gift51 = new Gift('false', './Imagens/guarda_roupa.jpg', 'Guarda-roupa', 'R$1000');
gift51.addGift();

const gift52 = new Gift('false', './Imagens/sofa.jpg', 'Sofá', 'R$950');
gift52.addGift();

const gift53 = new Gift('false', './Imagens/puffs.jpg', 'Puffs', 'R$110');
gift53.addGift();

const gift54 = new Gift('false', './Imagens/rack_estante.jpg', 'Rack/Estante', 'R$570');
gift54.addGift();

const gift55 = new Gift('false', './Imagens/armario_cozinha.jpg', 'Armário de cozinha', 'R$580');
gift55.addGift();

const gift56 = new Gift('false', './Imagens/mesa_cadeiras.jpg', 'Mesa/Cadeiras', 'R$550');
gift56.addGift();

const gift57 = new Gift('false', './Imagens/quadros_decorativos.jpg', 'Quadros decorativos', 'R$80');
gift57.addGift();

const gift58 = new Gift('false', './Imagens/plantas_decorativas.jpg', 'Plantas decorativas', 'R$90');
gift58.addGift();

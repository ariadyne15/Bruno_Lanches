function enviarPedido(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const descrição = document.getElementById('descrição').value;

    // Montar pedido
    const pedido = [];

    // Lanches
    const lanches = document.getElementById('Lanches');
    if (lanches.value !== 'Escolha...') pedido.push(`Lanche: ${lanches.value}`);
    // Porções
    const porcoes = document.getElementById('Porcoes');
    if (porcoes.value !== 'Escolha...') pedido.push(`Porção: ${porcoes.value}`);


    // Panquecas
    const panquecas = document.getElementById('Panquecas');
    if (panquecas.value !== 'Escolha...') pedido.push(`Panqueca: ${panquecas.value}`);

    // Omeletes
    const omeletes = document.getElementById('Omeletes');
    if (omeletes.value !== 'Escolha...') pedido.push(`Omelete: ${omeletes.value}`);

    // Bebidas
    const bebidas = [];
    if (document.getElementById('refrigerante2L').checked) {
        const refrigerante2L = document.getElementById('refrigerante2LInput').value;
        if (refrigerante2L) bebidas.push(`Refrigerante 2L: ${refrigerante2L}`);
    }
    if (document.getElementById('refrigeranteLata').checked) {
        const refrigeranteLata = document.getElementById('refrigeranteInput').value;
        if (refrigeranteLata) bebidas.push(`Refrigerante Lata: ${refrigeranteLata}`);
    }
    // Adicione as outras bebidas conforme necessário...

    if (bebidas.length) pedido.push(`Bebidas: ${bebidas.join(', ')}`);

    // Forma de pagamento
    const formaPagamento = document.getElementById('formaPagamento').value;

    // Formata a mensagem
    const mensagem = `Olá, quero realizar um pedido:\n\n` +
                     `Nome Completo: ${nome}\n\n` +
                     `Telefone: ${telefone}\n\n` +
                     `Endereço de Entrega: ${endereco}\n\n` +
                     `Descrição sobre o pedido: ${descrição}\n\n` +
                     `Meu Pedido: ${pedido.join(', ')}\n\n` +
                     `Forma de Pagamento: ${formaPagamento}`;

    // Codifica a mensagem para URL
    const mensagemEncoded = encodeURIComponent(mensagem);

    // Número de WhatsApp para onde enviar a mensagem
    const numeroWhatsApp = '5519992850039';  // Exemplo: 5511999999999

    // URL para abrir o WhatsApp com a mensagem
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;

    // Abre o WhatsApp em uma nova janela ou aba
    window.open(urlWhatsApp, '_blank');
}

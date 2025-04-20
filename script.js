const nome = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const rg = document.getElementById('rg')
const nascimento = document.getElementById('nascimento')
const email = document.getElementById('email')
const celular = document.getElementById('celular')
const cidade = document.getElementById('cidade')
const endereço = document.getElementById('endereço')
const complemento = document.getElementById('complemento')
const cep = document.getElementById('cep')
const download = document.getElementById('download')
const upload = document.getElementById('upload')
const mensalidade = document.getElementById('mensalidade')
const numero = document.getElementById('numero')
const data = document.getElementById('data')


const endereçoS = document.getElementById('endereçoS')
const complementoS = document.getElementById('complementoS')
const nomeS = document.getElementById('nomeS')
const cpfS = document.getElementById('cpfS')
const rgS = document.getElementById('rgS')
const nascimentoS = document.getElementById('nascimentoS')
const emailS = document.getElementById('emailS')
const celularS = document.getElementById('celularS')
const downloadS = document.getElementById('downloadS')
const uploadS = document.getElementById('uploadS')
const mensalidadeS = document.getElementById('mensalidadeS')
const numeroS = document.getElementById('numeroS')
const dataS = document.getElementById('dataS')
const cepS = document.getElementById('cepS')
const cidadeS = document.getElementById('cidadeS')
// Função para formatar a data
function formatarData() {
    const hoje = new Date();
    const dia = hoje.getDate();
    const ano = hoje.getFullYear();
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const mes = meses[hoje.getMonth()];
    return `${dia} de ${mes} de ${ano}`;
}

// Atualizar todas as ocorrências de dataS
document.addEventListener('DOMContentLoaded', function() {
    const elementosData = document.querySelectorAll('#dataS');
    const dataFormatada = formatarData();
    
    elementosData.forEach(elemento => {
        elemento.textContent = dataFormatada;
    });
});

// Função para atualizar os spans
function atualizarSpan(inputId, spanId) {
    const input = document.getElementById(inputId);
    const spans = document.querySelectorAll(`[id="${spanId}"]`);
    
    if (input && spans.length > 0) {
        input.addEventListener('input', function() {
            spans.forEach(span => {
                span.textContent = this.value;
            });
        });
    }
}

// Adicionando event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos inputs para seus respectivos spans
    const mapeamento = {
        'nome': 'nomeS',
        'cpf': 'cpfS',
        'rg': 'rgS',
        'nascimento': 'nascimentoS',
        'email': 'emailS',
        'celular': 'celularS',
        'cidade': 'cidadeS',
        'endereço': 'endereçoS',
        'complemento': 'complementoS',
        'cep': 'cepS',
        'download': 'downloadS',
        'upload': 'uploadS',
        'mensalidade': 'mensalidadeS',
        'numero': 'numeroS'
    };

    // Aplicando o mapeamento
    for (const [inputId, spanId] of Object.entries(mapeamento)) {
        atualizarSpan(inputId, spanId);
    }
});

// Função para validar campos obrigatórios
function validarCampos() {
    const camposObrigatorios = [
        'nome',
        'cpf',
        'rg',
        'email',
        'endereço',
        'download',
        'upload',
        'mensalidade',
        'numero'
    ];

    for (const campo of camposObrigatorios) {
        const input = document.getElementById(campo);
        if (!input || !input.value.trim()) {
            alert(`Por favor, preencha o campo ${campo.toUpperCase()}`);
            input.focus();
            return false;
        }
    }
    return true;
}

// Função para imprimir os documentos
function imprimirDocumentos() {
    if (!validarCampos()) {
        return;
    }

    // Esconder o formulário durante a impressão
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'none';

    // Selecionar os documentos a serem impressos
    const documentos = [
        document.getElementById('documento2'),
        document.getElementById('documento3'),
        document.getElementById('documento1')
    ];

    // Criar uma nova janela para impressão
    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write('<html><head><title>Impressão de Documentos</title>');
    janelaImpressao.document.write('<link rel="stylesheet" href="styles.css">');
    janelaImpressao.document.write('<style>@media print { .page-break { page-break-after: always; } }</style>');
    janelaImpressao.document.write('</head><body>');

    // Adicionar cada documento à janela de impressão com quebra de página
    documentos.forEach((doc, index) => {
        if (doc) {
            janelaImpressao.document.write(doc.outerHTML);
            // Adicionar quebra de página após cada documento, exceto o último
            if (index < documentos.length - 1) {
                janelaImpressao.document.write('<div class="page-break"></div>');
            }
        }
    });

    janelaImpressao.document.write('</body></html>');
    janelaImpressao.document.close();

    // Aguardar o carregamento dos estilos
    janelaImpressao.onload = function() {
        janelaImpressao.print();
        janelaImpressao.close();
    };

    // Restaurar a visibilidade do formulário
    formContainer.style.display = 'block';
}

// Função para gerar PDF
function gerarPDF() {
    if (!validarCampos()) {
        return;
    }

    // Esconder o formulário durante a geração do PDF
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'none';

    // Selecionar os documentos
    const documentos = [
        document.getElementById('documento2'),
        document.getElementById('documento3'),
        document.getElementById('documento1')
    ];

    // Criar uma nova janela para o PDF
    const janelaPDF = window.open('', '_blank');
    janelaPDF.document.write('<html><head><title>Documentos PDF</title>');
    janelaPDF.document.write('<link rel="stylesheet" href="styles.css">');
    janelaPDF.document.write('<style>@media print { .page-break { page-break-after: always; } }</style>');
    janelaPDF.document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>');
    janelaPDF.document.write('</head><body>');

    // Adicionar cada documento à janela do PDF com quebra de página
    documentos.forEach((doc, index) => {
        if (doc) {
            janelaPDF.document.write(doc.outerHTML);
            // Adicionar quebra de página após cada documento, exceto o último
            if (index < documentos.length - 1) {
                janelaPDF.document.write('<div class="page-break"></div>');
            }
        }
    });

    janelaPDF.document.write('</body></html>');
    janelaPDF.document.close();

    // Aguardar o carregamento dos estilos e biblioteca
    janelaPDF.onload = function() {
        const element = janelaPDF.document.body;
        const opt = {
            margin: 1,
            filename: 'documentos.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Gerar o PDF
        html2pdf().set(opt).from(element).save().then(() => {
            janelaPDF.close();
        });
    };

    // Restaurar a visibilidade do formulário
    formContainer.style.display = 'block';
}

// Adicionar event listeners aos botões quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar os botões pelos IDs
    const btnImprimir = document.getElementById('btnImprimir');
    const btnPDF = document.getElementById('btnPDF');

    // Adicionar event listeners
    if (btnImprimir) {
        btnImprimir.addEventListener('click', function(e) {
            e.preventDefault();
            imprimirDocumentos();
        });
    }

    if (btnPDF) {
        btnPDF.addEventListener('click', function(e) {
            e.preventDefault();
            gerarPDF();
        });
    }
});




import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import logo from "../assets/img/brand/logo-smtt.png"

function getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.setAttribute("crossOrigin", "anonymous");

        img.onload = () => {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            var dataURL = canvas.toDataURL("image/png");

            resolve(dataURL);
        };

        img.onerror = (error) => {
            reject(error);
        };

        img.src = url;
    });
}


export async function generatePDF(occurrence) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const details = [
        {
            image: await getBase64ImageFromURL(logo),
            width: 50,
            height: 50,
            alignment: "center",
        },
        {
            text: "Boletim de Acidente de Trânsito",
            bold: true,
            fontSize: 14,
            alignment: "center",
            margin: [0, 15, 0, 20],
        },
        {
            text: [
                {text: "Status da ocorrência: ", bold: true},
                {text: `${occurrence.status}`, bold: true, color: occurrence.status === "Aprovado" ? "green" : "red" }
            ],
            margin: [0,0,0,20]
        },
        //Dados pessoais
        {
            text: "Dados pessoais:",
            bold: true,
            fontSize: 13
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Nome: ${occurrence.name}`,
                },
                {
                    text: `Sexo: ${occurrence.sex}`,
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Data de Nascimento: ${new Date(occurrence.birth_date).toLocaleDateString()}`,
                },
                {
                    text: `RG: ${occurrence.rg}`,
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `CPF: ${occurrence.cpf}`,
                },
                {
                    text: `CNH: ${occurrence.cnh}`,
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Endereço: ${occurrence.address}, ${occurrence.number_address}, ${occurrence.district},  ${occurrence.city}-${occurrence.uf} `,
                },
            ],
        },
        {
            alignment: "justify",
            margin: [0, 0, 0, 20],
            columns: [
                {
                    text: `Email: ${occurrence.email}`,
                },
                {
                    text: `Telefone: ${occurrence.phone}`,
                },
            ],
        },
        //Dados do veículo
        {
            text: "Dados do veículo:",
            bold: true,
            fontSize: 13,
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Tipo do veículo: ${occurrence.type_vehicle}`,
                },
                {
                    text: `Número de ocupantes: ${occurrence.number_occupants}`,
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Placa: ${occurrence.plate}`,
                },
                {
                    text: `Renavam: ${occurrence.renavam}`,
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Veículo no momento do ato: ${occurrence.state_vehicle}`,
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Categoria: ${occurrence.category_vehicle}`,
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Possui seguro: ${occurrence.safe_vehicle}`,
                },
                {
                    text: `Posssui película: ${occurrence.pellicle}`,
                },
            ],
        },
        {
            alignment: "justify",
            margin: [0, 0, 0, 20],
            columns: [
                {
                    text: `Acionou o Airbag: ${occurrence.airbag}`,
                },
            ],
        },
        //Dados da ocorrencia
        {
            text: "Dados da ocorrencia:",
            bold: true,
            fontSize: 13
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Cidade: ${occurrence.city}`,
                },
                {
                    text: `Tipo de acidente: ${occurrence.type_accident}`,
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: `Zona: ${occurrence.zone}`,
                },
                {
                    text: `Feriado: ${occurrence.feriado}`,
                },
            ],
        },
        //Informações adicinais
    ];

    const docDefinition = {
        pageSize: "A4",
        defaultStyle: {
            fontSize: 12,
        },
        pageMargins: [80, 20, 80, 30],
        content: [details],
        footer: (currentPage, pageCount) => {
            return {
                text:
                    "E-mail: atendimento@smtt.maceio.al.gov.br\n" +
                    "Endereço: Av. Durval de Góes Monteiro, 829 - Tabuleiro do Martins, Maceió/AL - CEP: 57061-000",
                margin: [80, 0, 0, 0],
                fontSize: 8,
            };
        },
    };



    pdfMake.createPdf(docDefinition).open();
}

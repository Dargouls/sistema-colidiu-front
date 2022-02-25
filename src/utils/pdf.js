import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import logo from "../assets/img/brand/logo-smtt.png"
import logo_alagoas from "../assets/img/brand/logo-alagoas.png"

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
    console.log("occurrence", occurrence)

    const details = [
        //Header
        {
            table: {
                widths: ['auto', '*', "auto"],
                body: [
                    [
                        {
                            image: await getBase64ImageFromURL(logo),
                            width: 40,
                            height: 40,
                            alignment: "center",
                        },
                        {
                            alignment: "center",
                            fontSize: 12,
                            text: [
                                {
                                    text: "SMTT\n",
                                    bold: true
                                },
                                {
                                    text: "Superintendência Municipal de Transportes e Trânsito"
                                },
                            ]
                        },
                        {
                            image: await getBase64ImageFromURL(logo_alagoas),
                            width: 40,
                            height: 40,
                            alignment: "center",
                        },
                    ],
                ]
            }
        },
        //Title
        {
            columns: [
                { width: '*', text: '' },
                {
                    width: 'auto',
                    table: {
                        // headerRows: 1,
                        widths: ["auto"],
                        body: [
                            [
                                {
                                    text: "BOLETIM DE ACIDENTE DE TRÂNSITO",
                                    bold: true,
                                    fontSize: 16,
                                },
                            ],
                            [''],
                        ],
                    },
                    margin: [0, 20, 0, 10],
                    layout: 'headerLineOnly'
                },
                { width: '*', text: '' },
            ]
        },
        //Status
        {
            table: {
                headerRows: 1,
                widths: ["*"],
                body: [
                    [
                        {
                            text: "BOLETIM",
                            bold: true,
                        },
                    ],
                    [''],
                ],
            },
            alignment: "left",
            layout: 'headerLineOnly'
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: `Status: `, bold: true },
                        { text: `${occurrence.status}`, color: "green", bold: true }
                    ],
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: `Data de impressão: `, bold: true },
                        { text: `${new Date().toLocaleDateString()}` }
                    ],
                }
            ],
        },
        {
            table: {
                headerRows: 1,
                widths: ["*"],
                body: [
                    [
                        {
                            text: "NOTICIANTE",
                            bold: true,
                        },
                    ],
                    [''],
                ],
            },
            alignment: "left",
            margin: [0, 10, 0, 0],
            layout: 'headerLineOnly'
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: "Nome: ", bold: true },
                        `${occurrence.name}`
                    ]

                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: "Data de nascimento: ", bold: true },
                        `${new Date(String(occurrence.birth_date)).toLocaleDateString()}`
                    ]
                },
                {
                    text: [
                        { text: "Sexo: ", bold: true },
                        `${occurrence.sex}`
                    ]
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: "CPF: ", bold: true },
                        `${occurrence.cpf}`
                    ]
                },
                {
                    text: [
                        { text: "RG: ", bold: true },
                        `${occurrence.rg}`
                    ]
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        {
                            text: `Endereço: `,
                            bold: true
                        },
                        `${occurrence.address}, ${occurrence.number_address}, ${occurrence.district},  ${occurrence.municipality}-${occurrence.uf}`
                    ]
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: "CNH: ", bold: true },
                        `${occurrence.cnh}`,
                    ]
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: "Email: ", bold: true },
                        `${occurrence.email}`,
                    ]
                },

                {
                    text: [

                        { text: "Telefone: ", bold: true },
                        `${occurrence.phone}`,
                    ]
                },
            ],
        },
        //Dados do veículo
        {
            table: {
                headerRows: 1,
                widths: ["*"],
                body: [
                    [
                        {
                            text: "VEÍCULO",
                            bold: true,
                        },
                    ],
                    [''],
                ],
            },
            alignment: "left",
            margin: [0, 10, 0, 0],
            layout: 'headerLineOnly'
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [

                        { text: "Tipo do veículo: ", bold: true },
                        `${occurrence.type_vehicle}`,
                    ]
                },
                {
                    text: [

                        { text: "Número de ocupantes:", bold: true },
                        `${occurrence.number_occupants}`,
                    ]
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [

                        { text: "Placa: ", bold: true },
                        `${occurrence.plate}`,
                    ],
                },
                {
                    text: [

                        { text: "Renavam: ", bold: true },
                        `${occurrence.renavam}`,
                    ],
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: "Veículo no momento do ato: ", bold: true },
                        `${occurrence.state_vehicle}`,
                    ],
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: "Categoria: ", bold: true },
                        `${occurrence.category_vehicle}`,
                    ],
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: "Possui seguro: ", bold: true },
                        `${occurrence.safe_vehicle}`,
                    ],
                },

                {
                    text: [
                        { text: "Posssui película: ", bold: true },
                        `${occurrence.pellicle}`,
                    ],
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        { text: "Acionou o Airbag: ", bold: true },
                        `${occurrence.airbag}`,
                    ],
                },

            ],
        },
        //Dados da ocorrencia
        {
            table: {
                headerRows: 1,
                widths: ["*"],
                body: [
                    [
                        {
                            text: "OCORRÊNCIA",
                            bold: true,
                        },
                    ],
                    [''],
                ],
            },
            alignment: "left",
            margin: [0, 10, 0, 0],
            layout: 'headerLineOnly'
        },
        
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        {text: "Cidade: ", bold: true},
                        `Maceió`
                    ],
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        {text: "Tipo de acidente: ", bold: true},
                        `${occurrence.type_accident}`
                    ],
                },
            ],
        },
        {
            alignment: "justify",
            columns: [
                {
                    text: [
                        {text: "Zona: ", bold: true},
                        `${occurrence.zone}`
                    ],
                },
                {
                    text: [
                        {text: "Feriado: ", bold: true},
                        `${occurrence.feriado}`
                    ],
                },
            ],
        },
        //Informações adicinais
    ];

    const docDefinition = {
        pageSize: "A4",
        defaultStyle: {
            fontSize: 11,
        },
        pageMargins: [45, 20, 45, 30],
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

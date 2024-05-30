
/* Ecopontos são locais odnasdphiasbdlashdvaskljdbashfajhvashvasd atendimento padrão de 
segunda a sexta das 8h as 16h, unidades abertas aos sábados atendimento 8h 13h em 
Diadema e 8h 16h em São Bernardo do Campo. */

const ecopontosDJA = [
    {
        "nome": "Ecoponto Arco-Íris",
        "endereço": "Rua Mozart, s/nº",
        "bairro": "Jardim Arco-Íris",
        "cidade": "Diadema",
        "cep": "09960-590",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Ecoponto Arraia",
        "endereço": "Rua Arraia, 50",
        "bairro": "Eldorado",
        "cidade": "Diadema",
        "cep": "09972-070",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Ecoponto Marginal “Z”",
        "endereço": "Avenida Daniel José de Carvalho, 330",
        "bairro": "Parque Real",
        "cidade": "Diadema",
        "cep": "09992-110",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Ecoponto Nações",
        "endereço": "Rua Espanha c/ Avenida Dom João VI",
        "bairro": "Taboão",
        "cidade": "Diadema",
        "cep": "09941-010",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Ecoponto Naval",
        "endereço": "Rua Idealópolis c/ Avenida Corredor ABD, s/nº",
        "bairro": "Vila São José",
        "cidade": "Diadema",
        "cep": "09950-580",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Ecoponto Rufino",
        "endereço": "Estrada do Rufino, 1.059",
        "bairro": "Serraria",
        "cidade": "Diadema",
        "cep": "09980-280",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Ecoponto Yamagata",
        "endereço": "Rua Yamagata c/ Rua Osaka, s/nº",
        "bairro": "Jardim Canhema",
        "cidade": "Diadema",
        "cep": "09940-220",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Ecoponto João Batista (Vila Nogueira)",
        "endereço": "Rua João Batista Alves do Nascimento, 546",
        "bairro": "Vila Nogueira",
        "cidade": "Diadema",
        "cep": "04905-020",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Ecoponto DLU",
        "endereço": "Avenida Pirâmide, 844",
        "bairro": "Jardim Inamar",
        "cidade": "Diadema",
        "cep": "09970-330",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Ecoponto Caracas",
        "endereço": "Rua Caracas, 120",
        "bairro": "Vila Mulford",
        "cidade": "Diadema",
        "cep": "09921-000",
    },
    {
        "nome": "Ecoponto Nova Conquista",
        "endereço": "Travessa ETCD, 210 – Vila Nova Conquista",
        "bairro": "Piraporinha",
        "cidade": "Diadema",
        "cep": "09950690",
    },
    {
        "nome": "Ecoponto Okavango – Casa Grande",
        "endereço": "Avenida Casa Grande, 1810",
        "bairro": "Jardim Casa Grande",
        "cidade": "Diadema",
        "cep": "09960-590",
    },
    {
        "nome": "Ecoponto Maria Leonor – Parque Reid / Campanário",
        "endereço": "Avenida Maria Leonor",
        "bairro": "Campanário",
        "cidade": "Diadema",
        "cep": "09920-080"
    }

]

const ecopontosSBC = [
    {
        "nome": "Areião",
        "endereço": "Rua do Cruzeiro, s/nº",
        "bairro": "Montanhão",
        "cidade": "São Bernardo do Campo",
        "cep": "09792-400",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Bairro dos Casa",
        "endereço": "Avenida Capitão Casa, 687",
        "bairro": "Demarchi",
        "cidade": "São Bernardo do Campo",
        "cep": "09811-251",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Batistini",
        "endereço": "Rua das Flores, 950",
        "bairro": "Batistini",
        "cidade": "São Bernardo do Campo",
        "cep": "09842-070",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Der",
        "endereço": "Rua Ernesto Bezerra, 60",
        "bairro": "Jardim Olavo Bilac",
        "cidade": "São Bernardo do Campo",
        "cep": "09725-820",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Divinéia",
        "endereço": "Rua Mathilde Ferrari Marçon, 30",
        "bairro": "Bairro dos Casa",
        "cidade": "São Bernardo do Campo",
        "cep": "09840-360",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Jardim Regina",
        "endereço": "Rua João de Barro, 207",
        "bairro": "Ferrazópolis",
        "cidade": "São Bernardo do Campo",
        "cep": "09781-230",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Montanhão",
        "endereço": "Estrada do Montanhão, 152",
        "bairro": "Montanhão",
        "cidade": "São Bernardo do Campo",
        "cep": "09791-200",
        "sabado": "* Aberto aos Sábados"        
    },
    {
        "nome": "Parque dos Pássaros",
        "endereço": "Rua dos Tangarás, 867",
        "bairro": "Parque dos Pássaros",
        "cidade": "São Bernardo do Campo",
        "cep": "SP, 09861-040",
        "sabado": "* Aberto aos Sábados"        
    },
    {
        "nome": "Parque São Bernardo",
        "endereço": "Rua Almeida Leme s/nº",
        "bairro": "Parque São Bernardo",
        "cidade": "São Bernardo do Campo",
        "cep": "09761-170",
        "sabado": "* Aberto aos Sábados"        
    },
    {
        "nome": "Riacho Grande",
        "endereço": "Rua Marcílio Conrado, 600",
        "bairro": "Rio Grande",
        "cidade": "São Bernardo do Campo",
        "cep": "09830-290",
        "sabado": "* Aberto aos Sábados"        
    },
    {
        "nome": "Rudge Ramos",
        "endereço": "Rua Guilherme de Almeida, 86",
        "bairro": "Jardim Orlandina",
        "cidade": "São Bernardo do Campo",
        "cep": "09632-050",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Taboão",
        "endereço": "Rua Pedro Ivo, 110",
        "bairro": "Vila Florida",
        "cidade": "São Bernardo do Campo",
        "cep": "09660-090",
        "sabado": "* Aberto aos Sábados"
    },
    {
        "nome": "Três Marias",
        "endereço": "Estrada Eiji Kikuti, 1982",
        "bairro": "Três Marias",
        "cidade": "São Bernardo do Campo",
        "cep": "09852-040",
        "sabado": "* Aberto aos Sábados"
    }
];
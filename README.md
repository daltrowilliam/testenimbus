## Teste técnico para Backend da Nimbus

### Cenário

A Nimbus foi contratada para gerir alertas baseados na previsão climática de uma região. O alerta deve informar o evento (quantidade de chuva ou velocidade do vento, por exemplo) e o nível do impacto do evento na operação da contratante nessa região.

Abaixo será descrito um dos casos de uso da aplicação que devemos desenvolver.

### Descrição do Caso de Uso `GetDamageSummaryByDate`

A cada quinzena, a contratante fará um relatório com um resumo diário de impactos na região. Nesse resumo deve constar, para cada dia:
- Média de impacto na operação
- Evento de maior impacto
- Evento de menor impacto

Sendo assim, deve-se disponibilizar um endpoint na nossa aplicação que retorne essas informações baseadas em todos os eventos ocorridos dentro de um período estipulado. Esse resultado deve ser ordenado por data em ordem decrescente.

Exemplo da requisição:

`GET /damage-summary-by-date?dateStart=dateStart=2023-12-22&dateEnd=2024-01-05`

Resposta:

```json
{
    "data": [
        {
            "date": "2024-01-05",
            "avgDamage": 68,
            "maxDamageEvent": {
                "event": "Pancada de chuva",
                "damage": 82
            },
            "minDamageEvent": {
                "event": "Chuva 12 mm",
                "damage": 59
            }
        },
        {
            "date": "2024-01-04",
            "avgDamage": 58,
            "maxDamageEvent": {
                "event": "Vento 9 m/s",
                "damage": 73
            },
            "minDamageEvent": {
                "event": "Ocorrência de raios a 17 km",
                "damage": 48
            }
        },
        {
            "date": "2024-01-03",
            "avgDamage": 0,
            "maxDamageEvent": null,
            "minDamageEvent": null
        },
        ...
    ]
}

```

### Instruções

Uma pessoa na equipe criou a regra de negócio para o caso de uso. Porém, há bugs na implementação.

Sua função é:
- Implementar o endpoint para o caso de uso
- Corrigir os bugs na regra de negócio

Na pasta do projeto estão disponíveis arquivos de base para a implementação. O arquivo `src/get-damage-summary-by-date/controller.js` possui o código da regra de negócio, e o arquivo `src/get-damage-summary-by-date/controller.test.js` deve ser utilizado para criar os testes unitários da regra.

Não há obrigatoriedade de uso de ferramentas específicas, mas você deve utilizar ferramentas (à sua escolha) para os seguintes módulos:
- Tratamento de requisições http
- Acesso e criação do banco de dados
- Testes unitários

No arquivo `data/alerts.json` está uma lista de alertas para utilizar como teste. Crie a tabela de alertas, de acordo com o formato das entidades presentes no arquivo, e preencha com esses alertas. Deve-se disponibilizar, junto à solução, todos os arquivos e códigos necessários para o setup do banco de dados.

O arquivo `src/get-damage-summary-by-date/request.http` possui um exemplo de requisição que será feita para o endpoint que será implementado.

### Atenção!

Quem vai revisar a solução deve rodar, no MÁXIMO, 3 comandos para testar a solução em um primeiro momento:
- Setup do banco de dados
- Rodar a aplicação (npm install && npm start)
- Executar a requisição para o endpoint
  
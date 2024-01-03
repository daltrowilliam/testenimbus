const controller = require('./controller');

test('should return average, maximum, and minimum events daily in date range', async () => {
    const dateStart = '2013-12-29';
    const dateEnd = '2013-12-30';

    const result = await controller.execute(dateStart, dateEnd);

    result.forEach(summary => {
        summary.date = new Date(summary.date).toISOString();
    });

    expect(result).toEqual([
        {
            "date": "2013-12-30T02:00:00.000Z",
            "avgDamage": 42,
            "maxDamageEvent": {
                "event": "Ocorrência de raios a 12 km",
                "damage": 42
            },
            "minDamageEvent": {
                "event": "Ocorrência de raios a 12 km",
                "damage": 42
            }
        },
        {
            "date": "2013-12-30T02:00:00.000Z",
            "avgDamage": 90,
            "maxDamageEvent": {
                "event": "Pancada de chuva forte",
                "damage": 90
            },
            "minDamageEvent": {
                "event": "Pancada de chuva forte",
                "damage": 90
            }
        },
        {
            "date": "2013-12-29T02:00:00.000Z",
            "avgDamage": 56,
            "maxDamageEvent": {
                "event": "Vento 6 m/s",
                "damage": 56
            },
            "minDamageEvent": {
                "event": "Vento 6 m/s",
                "damage": 56
            }
        }
    ]);
});

test('should return a empty array of events daily in date range', async () => {
    const dateStart = '2023-12-29';
    const dateEnd = '2023-12-30';

    const result = await controller.execute(dateStart, dateEnd);

    expect(result).toEqual([]);
});

test('should return a message about date format', async () => {
    const dateStart = 'invalidInput';
    const dateEnd = '2023-12-30';

    const result = await controller.execute(dateStart, dateEnd);

    expect(result).toEqual({ Message: 'Data inválida. Forneça datas no formato YYYY-MM-DD e válidas no calendário.' });
});


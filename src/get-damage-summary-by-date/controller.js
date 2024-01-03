const repository = require('./repository');

module.exports = {
    async execute(dateStart, dateEnd) {
        const isValidDate = (dateString) => {
            const regex = /^\d{4}-\d{2}-\d{2}$/;
            return regex.test(dateString);
        };

        const isDateValid = (dateString) => {
            const date = new Date(dateString);
            return !isNaN(date.getTime());
        };

        if (!isValidDate(dateStart) || !isValidDate(dateEnd) || !isDateValid(dateStart) || !isDateValid(dateEnd)) {
            console.error('Data inválida. Forneça datas no formato YYYY-MM-DD e válidas no calendário.');
            return { Message: 'Data inválida. Forneça datas no formato YYYY-MM-DD e válidas no calendário.' };
        }

        const dbAlerts = await repository.execute(dateStart, dateEnd);

        return dbAlerts
            .reduce((result, alert) => {
                const dateAlreadySummarized = result.find(({ date }) => date === alert.date);

                const {
                    damages: oldDamages = [],
                    maxDamageEvent: oldMaxDamageEvent,
                    minDamageEvent: oldMinDamageEvent,
                } = dateAlreadySummarized || {};

                const date = alert.date;
                const damages = oldDamages.concat([alert.damage]);
                let maxDamageEvent = alert;
                if (oldMaxDamageEvent && oldMaxDamageEvent.damage > alert.damage) {
                    maxDamageEvent = oldMaxDamageEvent;
                }
                let minDamageEvent = alert;
                if (oldMinDamageEvent && oldMinDamageEvent.damage < alert.damage) {
                    minDamageEvent = oldMinDamageEvent;
                }

                if (dateAlreadySummarized) {
                    dateAlreadySummarized.damages = damages;
                    dateAlreadySummarized.maxDamageEvent = maxDamageEvent;
                    dateAlreadySummarized.minDamageEvent = minDamageEvent;
                } else {
                    result.push({
                        date,
                        damages,
                        maxDamageEvent,
                        minDamageEvent,
                    });
                }

                return result;
            }, [])
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(summary => {
                summary.avgDamage = summary.damages.reduce((result, damage) => result + damage, 0) / summary.damages.length;
                delete summary.damages;

                return {
                    date: summary.date,
                    avgDamage: summary.avgDamage,
                    maxDamageEvent: {
                        event: summary.maxDamageEvent.event,
                        damage: summary.maxDamageEvent.damage,
                    },
                    minDamageEvent: {
                        event: summary.minDamageEvent.event,
                        damage: summary.minDamageEvent.damage,
                    },
                };
            });
    },
};
-- queries.sql

-- Criar tabela
CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    event VARCHAR(255) NOT NULL,
    damage INT NOT NULL
);

-- Inserir dados
INSERT INTO alerts (date, event, damage)
VALUES
	('2013-12-17', 'Vento 12 m/s', 87),    
	('2013-12-17', 'Ocorrência de raios a 20 km', 51),    
	('2013-12-18', 'Temperatura acima de 40°C', 72),    
	('2013-12-18', 'Pancada de chuva forte', 93),    
	('2013-12-19', 'Chuva 6 mm', 23),    
	('2013-12-19', 'Vento 6 m/s', 53),    
	('2013-12-20', 'Rajada acima de 30 m/s', 65),    
	('2013-12-21', 'Pancada de chuva', 71),    
	('2013-12-21', 'Temperatura acima de 35°C', 62),    
	('2013-12-22', 'Chuva 12 mm', 63),    
	('2013-12-22', 'Vento 8 m/s', 68),    
	('2013-12-24', 'Rajada acima de 25 m/s', 52),    
	('2013-12-24', 'Ocorrência de raios a 5 km', 96),    
	('2013-12-24', 'Temperatura acima de 42°C', 85),    
	('2013-12-26', 'Chuva 3 mm', 15),    
	('2013-12-26', 'Vento 10 m/s', 73),    
	('2013-12-27', 'Pancada de chuva forte', 91),    
	('2013-12-27', 'Rajada acima de 32 m/s', 82),    
	('2013-12-28', 'Temperatura acima de 37°C', 65),    
	('2013-12-28', 'Chuva 3 mm', 13),    
	('2013-12-29', 'Vento 6 m/s', 56),    
	('2013-12-30', 'Ocorrência de raios a 12 km', 42),    
	('2013-12-30', 'Pancada de chuva forte', 90),    
	('2013-12-31', 'Temperatura acima de 39°C', 69),    
	('2013-12-31', 'Chuva 11 mm', 42),    
	('2014-01-04', 'Vento 9 m/s', 73),    
	('2014-01-04', 'Ocorrência de raios a 17 km', 48),    
	('2014-01-04', 'Rajada acima de 23 m/s', 51),    
	('2014-01-05', 'Temperatura acima de 36°C', 63),    
	('2014-01-05', 'Chuva 12 mm', 59),    
	('2014-01-05', 'Vento 8 m/s', 68),    
	('2014-01-05', 'Pancada de chuva', 82),    
	('2014-01-07', 'Rajada acima de 29 m/s', 61),    
	('2014-01-08', 'Ocorrência de raios a 30 km', 32),    
	('2014-01-08', 'Chuva 5 mm', 23),    
	('2014-01-09', 'Vento 10 m/s', 75);

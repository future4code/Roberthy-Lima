EXERCÍCIO 1

a - ALTER TABLE Actor DROP COLUMN salary; Irá remover a coluna 'salary'.;
b - ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Irá mudar a coluna 'gender' para 'sex';
c - ALTER TABLE Actor CHANGE gender gender VARCHAR(255); Irá mudar a quantidade de caracteres aceitos.;
d - ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

EXERCÍCIO 2

a - UPDATE Actor (SET name = "Moacyr Franco" AND SET birt_date = "10/10/2010") WHERE id = "003";
b - UPDATE Actor SET name = "JULIANA PAES"  WHERE name = "Juliana Paes" ; UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
c - UPDATE Actor SET * = 'undefined' WHERE id = '005';
d - 

EXERCICIO 3

a - DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b - DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

EXERCICIO 4

a - SELECT MAX(salary) FROM Actor;
b - SELECT MIN(salary) FROM Actor WHERE gender = "female";
c - SELECT COUNT(*) FROM Actor WHERE gender = "female";
d - SELECT SUM(salary) FROM Actor;

EXERCICIO 5

a - Irá retornar a quantidade de atores de cada sexo;
b - SELECT id, name FROM Actor ORDER BY name DESC;
c - SELECT * FROM Actor ORDER BY salary;
d - SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e - SELECT AVG(salary), gender FROM Actor GROUP BY gender;

EXERCICIO 6

a - ALTER TABLE Movie ADD playing_limit_date DATE;
b - ALTER TABLE Movie CHANGE rating rating FLOAT;
c - UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";
d - DELETE FROM Movie WHERE id = "001";

EXERCICIO 7

a - SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
b - SELECT AVG(rating) FROM Movie;
c - SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
d - SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
e - SELECT MAX(rating) FROM Movie;
f - SELECT MIN(rating) FROM Movie;

EXERCICIO 8

a - SELECT * FROM Movie ORDER BY title;
b - SELECT * FROM Movie ORDER BY title LIMIT 5;
c - SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
d - SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;

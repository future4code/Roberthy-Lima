EXERCICIO 1

a - É uma chave que conecta um banco ao outro.
b - INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Goste muito n!",
    3,
	"004"
);

c - ALTER TABLE Movie DROP COLUMN rating;

EXERCICIO 2

a - INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
)

EXERCICIO 3

a - Retorna a informação do filme com suas respectivas avaliações.
b - SELECT movie_id, rate FROM Movie
INNER JOIN Rating ON movie_id = movie_id;

EXERCICIO 4

a - SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;

b - SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

c - SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);

EXERCICIO 5

a - Porque faz o processo de junção de tabelas 2 vezes.
b - SELECT name, m.id,m.title  FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

EXERCICIO 6

a - 
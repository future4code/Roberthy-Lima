EXERCÍCIO 1 

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

A - VARCHAR define uma string, PRIMARY KEY define uma chave única, NOT NULL não permite que o campo fique vazio
DATE permite datas.
B - Exibe os bancos salvos e show tables exibe as tabelas.
C - Vai retornar as colunas da tabela.


EXERCÍCIO 2

INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

a - VALUES (
    "002",
    "Gloria Pires",
    1200000,
    "1963-08-23",
    "female"
);

b - Não é permitido o uso da mesma primary key em diferentes elementos.

EXERCÍCIO 3

a - SELECT * FROM Actor
b - SELECT salary FROM Actor WHERE Tony Ramos
d - SELECT salary from Actor WHERE salary <= 500
e - Erro pois "Nome" nao existe, só alterar para "name"

EXERCÌCIO 4

a - SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000 (Fiz query pensando q era pra fazer kk)
b - SELECT * FROM Actor WHERE name like "A%" AND salary > 350000 AND salary < 900000
c - SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%"
d - SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

EXERCÍCIO 5 

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    sinopse VARCHAR (255) NOT NULL,
    date DATE NOT NULL,
	rating INT NOT NULL
);

INSERT INTO Filmes (id, title, sinopse, date, rating)
VALUES(
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-06-01",
7
);

INSERT INTO Filmes (id, title, sinopse, date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Filmes (id, title, sinopse, date, rating)
VALUES(
"003",
"Doce Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

INSERT INTO Filmes (id, title, sinopse, date, rating)
VALUES(
"004",
"Minha mãe é uma peça",
"Germínia Amaral (Paulo Gustavo) é uma dona de casa de meia idade, divorciada do marido (Herson Capri) que a trocou por uma mulher mais jovem, Soraya (Ingrid Guimarães). Hiperativa, não larga o pé de seus filhos Marcelina (Mariana Xavier) e Juliano (Rodrigo Pandolfo), sem dar-se conta de que já estão bem grandinhos..",
"2012-10-20",
8
);

EXERCÍCIO 6

a - SELECT id, title, rating FROM Filmes WHERE id = 001
b - SELECT * FROM Filmes WHERE name = "Minha mãe é uma peça"
c - SELECT id, title, sinopse FROM Filmes WHERE rating > 7

EXERCICIO 7

a - SELECT * FROM Filmes WHERE name LIKE "%vida%"
b - SELECT title LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%"
c - SELECT * FROM Filmes WHERE date < "2020-05-04"
d - SELECT * FROM Filmes WHERE date < "2020-05-04" AND  (title LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%") AND rating > 7;

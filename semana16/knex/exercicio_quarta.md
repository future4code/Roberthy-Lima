EXERCICIO 1 

a - Irá retornar 2 arrays, o principal e um contendo metadados.
b - const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

c - const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
  `);
  return result[0]
};

EXERCICIO 2

a - const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

b - const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 

c - const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({gender});

  return result[0].average;
};

EXERCICIO 3 

b - app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

EXERCICIO 4

a - app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

b - app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

EXERCICIO 5

a - const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date
) => {
  await connection
    .insert({
      id: id,
    title: title,
    synopsis: synopsis,
    releas_date: releaseDate
    })
    .into("Movie");
};

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate
    );

    res.status(200).send({
      message: "Success"
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

EXERCICIO 6

const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);

  return result[0];
};

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

EXERCICIO 7

const searchMovie = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM movie WHERE name LIKE “%${search}%” OR synopsis LIKE “%${search}%” ORDER BY date DESC
    `);
    
    return result[0]
}

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
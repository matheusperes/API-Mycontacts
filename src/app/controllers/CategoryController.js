const CategoriesRepository = require("../repositories/CategoriesRepository");

class CategoryController {
  async index(request, response) {
    // Index serve para listar vários registros
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    // Show serve para listar UM registro
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: "Category not found" });
    }

    response.json(category);
  }
  async store(request, response) {
    // Index serve para criar um registro
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const categoryExist = await CategoriesRepository.findCategoryByName(name);

    if (categoryExist) {
      return response
        .status(400)
        .json({ error: "This category is already created" });
    }

    const category = await CategoriesRepository.create({
      name,
    });

    response.json(category);
  }

  async update(request, response) {
    // Update serve para atualizar UM registro
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: "Contact not found" });
    }

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const category = await CategoriesRepository.update(id, {
      name,
    });

    response.json(category);
  }

  async delete(request, response) {
    // delete serve para deletar UM registro
    const { id } = request.params;

    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();

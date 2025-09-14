const CategoriesRepository = require("../repositories/CategoriesRepository");

class CategoryController {
  async index(request, response) {
    // Index serve para listar vários registros
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);

    response.json(categories);
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
}

module.exports = new CategoryController();

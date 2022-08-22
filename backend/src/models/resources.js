const DatabaseConnection = require("../database/databaseConnection");
const dbConnection = new DatabaseConnection();
const db = dbConnection.knex;

const table = `${dbConnection.dataBaseSchemas().data}.resource`;
const supplierTable = `${dbConnection.dataBaseSchemas().data}.supplier`;
const subcontractorTable = `${dbConnection.dataBaseSchemas().data}.subcontractor`;

// Get all.
const findAll = () => {
  return db
    .select(
      "resource.id",
      "resource.resource_last_name as Last Name",
      "resource.resource_first_name as First Name",
      "supplier.supplier_name as Supplier",
      "subcontractor.subcontractor_name as Subcontractor",
      db.raw("TO_CHAR(resource.created_date :: DATE, 'dd-MON-yyyy') as created_date")
    )
    .from(table)
    .leftJoin(supplierTable, { "resource.supplier_id": `${supplierTable}.id` })
    .leftJoin(subcontractorTable, { "resource.subcontractor_id": `${subcontractorTable}.id` });
};

// Get specific one by id.
const findById = (id) => {
  return db
    .select(
      "resource.id",
      "resource.resource_last_name",
      "resource.resource_first_name",
      db.raw(
        "(SELECT json_build_object('value', COALESCE(resource.supplier_id,0), 'label', COALESCE(supplier.supplier_name,''))) AS supplier_id"
      ),
      db.raw(
        "(SELECT json_build_object('value', COALESCE(resource.subcontractor_id,0), 'label', COALESCE(subcontractor.subcontractor_name,''))) AS subcontractor_id"
      ),
      db.raw("TO_CHAR(resource.created_date :: DATE, 'dd-MON-yyyy') as created_date_formatted"),
      "resource.created_date"
    )
    .from(table)
    .leftJoin(supplierTable, { "resource.supplier_id": `${supplierTable}.id` })
    .leftJoin(subcontractorTable, { "resource.subcontractor_id": `${subcontractorTable}.id` })
    .where("resource.id", id);
};

// Update one.
const updateOne = (body, id) => {
  return db(table).where("id", id).update(body);
};

module.exports = {
  findAll,
  findById,
  updateOne,
};

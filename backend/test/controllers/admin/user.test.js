const { getAll, getOne, addOne, updateOne, deleteOne } = require("@controllers/admin/users.js");
const userModel = require("@models/admin/users");
// Mock user DB methods.
jest.mock("@models/admin/users");

describe("Testing user controllers", () => {
  it("Gets an array of all users", async () => {
    userModel.findAll.mockResolvedValue([{ id: 1, name: "Jimbo" }]);
    const sampleRequest = {
      user: {
        capabilities: ["users_read_all"],
      },
    };
    const result = await getAll(sampleRequest);

    expect(Array.isArray(result)).toBe(true);
    result.forEach((userObject) => expect("id" in userObject).toBe(true));
  });

  it("Gets an individual user by ID.", async () => {
    userModel.findById.mockResolvedValue({ id: 2, name: "Jimbo" });
    const sampleRequest = {
      params: { id: 2 },
      user: {
        capabilities: ["users_read_all"],
      },
    };
    const result = await getOne(sampleRequest);

    expect("id" in result).toBe(true);
    expect("name" in result).toBe(true);
  });

  it("Adds a user", async () => {
    userModel.addOne.mockResolvedValue({ id: 2, name: "Jimbo Jones" });
    const sampleRequest = {
      body: { name: "Jimbo Jones" },
      user: {
        capabilities: ["users_create_all"],
      },
    };
    const result = await addOne(sampleRequest);

    expect("id" in result).toBe(true);
    expect("name" in result).toBe(true);
    expect(result.name).toBe("Jimbo Jones");
  });

  it("Modifies a user", async () => {
    userModel.updateOne.mockResolvedValue({ id: 2, name: "Delroy Lindo" });
    const sampleRequest = {
      params: {
        id: 2,
      },
      body: {
        name: "Delroy Lindo",
      },
      user: {
        capabilities: ["users_update_all"],
      },
    };
    const result = await updateOne(sampleRequest);

    expect(result.name).toBe("Delroy Lindo");
  });

  it("Deletes a user", async () => {
    userModel.removeOne.mockResolvedValue({ id: 2, name: "Delroy Lindo" });
    const sampleRequest = {
      params: {
        id: 2,
      },
      user: {
        capabilities: ["users_delete_all"],
      },
    };
    const result = await deleteOne(sampleRequest);
    expect("name" in result).toBe(true);
    expect(result.name).toBe("Delroy Lindo");
  });
});
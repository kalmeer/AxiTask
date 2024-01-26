import instance from ".";

const GetAllPets = () => instance.get("/pets");
// const res = instance.get("pets");
// return res.data;
// instance.get("pets");

const GetPetByID = (id) => instance.get("/pets/" + id);

// const res = await instance.get("/pets/" + id);
// return res.data;

const AddPet = (pet) => instance.post("/pets", pet);
const DeletePet = (id) => instance.delete("/pets/" + id);
const UpdatePetByID = (id) => instance.put("/pets/" + id);
// const GetPetByID = async () => await instance.get("/pets/:id");
// const CreatePet = async () => await instance.post("/pets");
// const DeletePet = async () => await instance.delete("/pets/:id");

export { GetPetByID, AddPet, UpdatePetByID, DeletePet, GetAllPets };

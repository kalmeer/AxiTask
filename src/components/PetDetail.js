import React, { useEffect, useState } from "react";
import petsData from "../petsData";
import { useParams } from "react-router-dom";
import { GetPetByID, DeletePet } from "../api/pets";
import { useMutation, useQuery } from "@tanstack/react-query";

const PetDetail = () => {
  // const [pet, setPet] = useState(null);
  const [pett, setPett] = useState("");
  const { id } = useParams();
  const pet = petsData[0];
  const reponse = useQuery({
    queryKey: ["test"],
    queryFn: () => GetPetByID(id),
  });

  const deletePet = useMutation({
    mutationFn: (id) => DeletePet(id),
    onSuccess: () => {
      alert("deleted");
    },
  });

  const handleDelete = () => {
    deletePet.mutate(id);
  };
  useEffect(() => {
    reponse.refetch();
    console.log(id);

    setPett(reponse.data?.data?.filter((pettt) => pettt.id == id));
    console.log(reponse.data?.data);
  }, []);

  const handleAdopt = () => {
    setPett((pett[0].adopted = true));
  };
  useEffect(() => {
    console.log(pett[0]);
  }, [pett[0]]);
  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pett[0]?.image}
            alt={pett[0]?.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pett[0]?.name}</h1>
          <h1>Type: {pett[0]?.type}</h1>
          <h1>adopted: {pett[0]?.adopted}</h1>

          <button
            onClick={handleAdopt}
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            Adobt
          </button>

          <button
            onClick={handleDelete}
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;

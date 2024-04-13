"use server";

import React from "react";
import Newsletters from "./ui/Newsletters";
import { Header } from "./ui/Header";

const title = "Newsletters";
const content = `Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez
  découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos
  newsletters.`;

const page = () => {
  return (
    <main className="py-[30px] flex flex-col lg:w-[1000px]">
      <Header title={title} content={content} />
      <Newsletters />
    </main>
  );
};

export default page;

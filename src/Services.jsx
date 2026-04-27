export const users = [
    {
      name: "Daffa",
      email: "daffa@gmail.com",
      street: "Jl. Indraprasta",
      city: "Semarang",
      age: 25,
      job: "Web Developer"
    },
    {
      name: "Tri",
      email: "tri@gmail.com",
      street: "Jl. Imam Bonjol",
      city: "Ungaran",
      age: 30,
      job: "Software Engineer"
    },
    {
      name: "Putranto",
      email: "putranto@gmail.com",
      street: "Jl. Pemuda",
      city: "Kendal",
      age: 35,
      job: "Data Analyst"
    }
  ];

  export const newUsers = [
    {
      name: "Daffa",
      email: "daffa@gmail.com",
      street: "Jl. Indraprasta",
      city: "Semarang",
      age: 25,
      job: "Web Developer"
    },
    {
      name: "Tri",
      email: "tri@gmail.com",
      street: "Jl. Imam Bonjol",
      city: "Ungaran",
      age: 30,
      job: "Software Engineer"
    },
    {
      name: "Putranto",
      email: "putranto@gmail.com",
      street: "Jl. Pemuda",
      city: "Kendal",
      age: 35,
      job: "Data Analyst"
    }
  ];
  const city = "Semarang";
  const street = "Jl. Indraprasta";

 export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city: city,
      street: street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};
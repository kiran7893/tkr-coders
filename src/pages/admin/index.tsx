import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";

type AdminIndexProps = {};

const AdminPage: React.FC<AdminIndexProps> = () => {
  const [inputs, setInputs] = useState({
    category: "",
    difficulty: "",
    id: "",
    likes: 0,
    link: "",
    order: 0,
    title: "",
    videoId: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProblem = {
      ...inputs,
      order: Number(inputs.order),
    };
    await setDoc(doc(firestore, "problems", inputs.id), newProblem);
    alert("Saved to Database");
  };

  return (
    <main className="bg-gray-600 min-h-screen flex items-center justify-center p-4">
      <form
        className="space-y-6 px-6 pb-4 bg-gray-800 rounded-lg shadow-md max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-medium text-white pt-6">Add New Problem</h3>
        {[
          "category",
          "difficulty",
          "id",
          "link",
          "order",
          "title",
          "videoId",
        ].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="text-sm font-medium block mb-2 text-gray-300"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              id={field}
              onChange={handleInputChange}
              type="text"
              placeholder={`Enter ${field}`}
              name={field}
              className="
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder-gray-400 text-white
              "
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
                "
        >
          Save to Database
        </button>
      </form>
    </main>
  );
};

export default AdminPage;

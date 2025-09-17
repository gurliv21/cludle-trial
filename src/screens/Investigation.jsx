import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Investigation() {
  const [who, setWho] = useState("");
  const [where, setWhere] = useState("");
  const [what, setWhat] = useState("");

    const navigate = useNavigate()
  

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">🕵️ Puzzle Board</h1>

      {/* Clues */}
      <div className="bg-white shadow rounded-lg p-4 w-full max-w-2xl mb-6">
        <h2 className="font-semibold mb-2">📜 Clues</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Crime did not happen in the Kitchen</li>
          <li>Knife was not used</li>
        </ul>
      </div>

      {/* Suspect Statements */}
      <div className="bg-white shadow rounded-lg p-4 w-full max-w-2xl mb-6">
        <h2 className="font-semibold mb-2">🗣️ Suspect Statements</h2>
        <div className="space-y-2 text-gray-700">
          <p>👤 <b>Alice:</b> "The crime happened in the Park."</p>
          <p>👤 <b>Bob:</b> "Charlie used the Rope."</p>
          <p>👤 <b>Charlie:</b> "I wasn’t even in the Park."</p>
        </div>
      </div>

     

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow" onClick={()=>{navigate('/grid')}}>
          solve grid
        </button>
        <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow">
          Back
        </button>
      </div>
    </div>
  );
}

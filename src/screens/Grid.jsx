import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Grid() {
  const [who, setWho] = useState("");
  const [where, setWhere] = useState("");
  const [what, setWhat] = useState("");

   const navigate = useNavigate()
  const handleSubmit = () => {
    // alert(`Submitted: ${who || "—"}, ${where || "—"}, ${what || "—"}`);
    navigate('/leader')
  };

  const handleBack = () => {
    alert("Back button clicked!");
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-2xl mb-6">
      <h2 className="font-semibold mb-2">🕵️ Your Answer</h2>

      {/* Grid for WHO / WHERE / WHAT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* WHO */}
        <div>
          <label className="block text-sm mb-1">WHO</label>
          <select
            value={who}
            onChange={(e) => setWho(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
            <option value="Charlie">Charlie</option>
          </select>
        </div>

        {/* WHERE */}
        <div>
          <label className="block text-sm mb-1">WHERE</label>
          <select
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Library">Library</option>
            <option value="Park">Park</option>
            <option value="Kitchen">Kitchen</option>
          </select>
        </div>

        {/* WHAT */}
        <div>
          <label className="block text-sm mb-1">WHAT</label>
          <select
            value={what}
            onChange={(e) => setWhat(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Knife">Knife</option>
            <option value="Rope">Rope</option>
            <option value="Poison">Poison</option>
          </select>
        </div>
      </div>

      {/* Current Selection */}
      <div className="mt-4 text-gray-700">
        <p><b>Who:</b> {who || "—"}</p>
        <p><b>Where:</b> {where || "—"}</p>
        <p><b>What:</b> {what || "—"}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          ⬅️ Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ✅ Submit Answer
        </button>
      </div>
    </div>
  );
}

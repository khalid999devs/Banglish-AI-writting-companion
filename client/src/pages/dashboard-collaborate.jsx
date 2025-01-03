import { useState } from "react";

export default function DashboardCollaborate() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInvite = () => {
    // Logic to send the invite
    setMessage(`Invitation sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="p-8 rounded-lg shadow-lg text-white">
      <h1 className="text-3xl font-bold mb-6">Collaborate</h1>
      <div className="mb-4">
        <label className="block text-lg mb-2" htmlFor="email">Invite a User</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter user's email"
          className="w-full p-2 rounded-lg border border-gray-300 bg-slate-700 text-white"
        />
      </div>
      <button
        onClick={handleInvite}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Send Invite
      </button>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
}
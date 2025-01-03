import { useState } from "react";

export default function DashboardSettings() {
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    // Apply the theme change logic here
  };

  return (
    <div className="p-8 rounded-lg shadow-lg text-white w-2/4">
      <h1 className="text-3xl font-bold mb-6">Choose Theme</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`p-4 rounded-lg shadow-lg cursor-pointer ${selectedTheme === "light" ? "bg-blue-600" : "bg-gray-800"}`}
          onClick={() => handleThemeChange("light")}
        >
          <h2 className="text-xl font-bold mb-2">Light Theme</h2>
          <p className="text-lg">A bright and light theme for better visibility during the day.</p>
        </div>
        <div
          className={`p-4 rounded-lg shadow-lg cursor-pointer ${selectedTheme === "dark" ? "bg-blue-600" : "bg-gray-800"}`}
          onClick={() => handleThemeChange("dark")}
        >
          <h2 className="text-xl font-bold mb-2">Dark Theme</h2>
          <p className="text-lg">A dark and soothing theme for better visibility during the night.</p>
        </div>
      </div>
    </div>
  );
}
function GradientObjects() {
  return (
    <div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-[40rem] h-32 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full opacity-20 blur-3xl transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[40rem] h-32 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full opacity-20 blur-3xl transform rotate-45"></div>
        <div className="absolute top-1/4 right-1/5 w-[30rem] h-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-full opacity-20 blur-3xl transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/5 w-[50rem] h-40 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-full opacity-20 blur-3xl transform rotate-45"></div>
      </div>
    </div>
  );
}

export default GradientObjects;
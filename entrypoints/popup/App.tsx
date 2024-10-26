import "../../assets/index.css";

function App() {
  return (
    <div
      className="bg-white shadow-lg rounded-md p-6 w-80 text-gray-800 font-medium"
      style={{
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">LinkedIn AI Reply</h2>
        <img
          src="https://via.placeholder.com/40x40"
          alt="Extension Logo"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <p className="text-gray-600 mb-6">
        Enhance your LinkedIn messaging experience with our AI-powered reply
        assistant.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
        Get Started
      </button>
    </div>
  );
}

export default App;

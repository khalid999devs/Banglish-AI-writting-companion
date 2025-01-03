export default function FedbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Feedback
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="institute">
              Institute
            </label>
            <input
              type="text"
              id="institute"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Institute"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
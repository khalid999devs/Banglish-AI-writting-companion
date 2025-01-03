export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Documentation
        </h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-2xl font-semibold mb-2">Introduction</h3>
            <p className="text-gray-300">
              Welcome to the Banglish documentation. This guide will help you understand how to use our application effectively.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-semibold mb-2">Getting Started</h3>
            <p className="text-gray-300">
              To get started, first sign up for an account. Once you have an account, you can log in and start using our features.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Feature 1: Description of feature 1.</li>
              <li>Feature 2: Description of feature 2.</li>
              <li>Feature 3: Description of feature 3.</li>
            </ul>
          </section>
          <section>
            <h3 className="text-2xl font-semibold mb-2">FAQ</h3>
            <p className="text-gray-300">
              If you have any questions, please refer to our FAQ section or contact support.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
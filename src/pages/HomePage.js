import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-8">
      <h1 className="text-5xl font-bold text-blue-700">Welcome to Llano Kid Books</h1>
      <p className="mt-4 text-xl text-gray-700">
        Discover the latest books and adventures. Explore novels, stories, and more!
      </p>
      <a
        href="/books"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Browse Our Collection
      </a>
    </div>
  );
};

export default HomePage;

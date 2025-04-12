import React from 'react'
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
        <h1 className="text-4xl font-bold text-red-800 mb-4">Stand with Gaza</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Join us in raising awareness about the struggles and resilience of the people of Gaza, Palestine. 
          Learn their stories, amplify their voices, and take action for justice and peace.
        </p>
      </div>
    </div>
  );
}

export default Home;

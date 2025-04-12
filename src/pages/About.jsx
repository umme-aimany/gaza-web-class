import React from 'react';

const About = () => {
  return (
    <>
      <div className='aboutsec grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-10'>
        <div>
          <img src="./aboutimg.jpg" alt="A powerful image depicting the situation in Gaza" className="w-full h-auto rounded-xl shadow-md" />
        </div>
        <div className='about-text'>
          <h2 className='font-bold text-3xl mb-4'>About Gaza Awareness</h2>
          <p className='mb-4'>
            Gaza has faced decades of humanitarian crises, ongoing conflict, and severe restrictions. Our mission is to spread awareness, share stories, and promote global solidarity with the people of Gaza.
          </p>
          <p className='mb-4'>
            Through this platform, we aim to educate individuals about the history, culture, and current struggles of Gaza. It is essential to understand the challenges faced by civilians, especially children and families who are disproportionately affected.
          </p>
          <p className='mb-4'>
            We believe in amplifying voices that are often unheard and providing a space for advocacy and education. Join us in raising awareness and standing for justice and peace in Gaza.
          </p>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row flex-wrap gap-4 p-4 bg-gray-100">
        <div className="bg-white rounded shadow p-4 w-full md:w-[32%]">
          <div className="mb-2">
            <img src="/about1.jpg" alt="Service 1" className="w-full h-40 object-cover rounded" />
          </div>
          <p className="text-gray-700 text-1xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor hic est dolores doloremque iure. Vitae sit id nostrum!
          </p>
        </div>

     
        <div className="bg-white rounded shadow p-4 w-full md:w-[32%]">
          <div className="mb-2">
            <img src="/about2.jpg" alt="Service 2" className="w-full h-40 object-cover rounded" />
          </div>
          <p className="text-gray-700 text-1xl">
            Ask the United Istamic Army,lead by Gen Retd Raheel Sharif, to step in an act.
          </p>
        </div>

        <div className="bg-white rounded shadow p-4 w-full md:w-[32%]">
          <div className="mb-2">
            <img src="/about3.jpg" alt="Service 3" className="w-full h-40 object-cover rounded" />
          </div>
          <p className="text-gray-700 text-1xl">
            Learn how you can contribute to humanitarian aid efforts and support organizations working directly on the ground.
          </p>
        </div>


        <div className="bg-white rounded shadow p-4 w-full md:w-[32%]">
          <div className="mb-2">
            <img src="/baycot2.png" alt="Service 3" className="w-full h-40 object-cover rounded" />
          </div>
          <p className="text-gray-700 text-1xl">
            Rate all israeli apps with one star and leave the resons as "Absolute Bias towards Israeil".This will cause significant losses and may lead to these apps being removed from the Play Store.
          </p>
        </div>

        <div className="bg-white rounded shadow p-4 w-full md:w-[32%]">
          <div className="mb-2">
            <img src="/about4.png" alt="Service 3" className="w-full h-40 object-cover rounded" />
          </div>
          <p className="text-gray-700 text-1xl">
           Avoid distractions like PSL and concerts, and focus on supporting Gaza And Palestine.
          </p>
        </div>

          <div className="bg-white rounded shadow p-4 w-full md:w-[32%]">
          <div className="mb-2">
            <img src="/about5.jpg" alt="Service 3" className="w-full h-40 object-cover rounded" />
          </div>
          <p className="text-gray-700 text-1xl">
           Let's raise awareness and make sure everyone understand the importance of standing up for palestine.
          </p>
        </div>

        
      </div>
      









    </>
  );
};

export default About;

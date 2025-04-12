import React from 'react'

const storiesData = [
  {
    id: 1,
    title: 'A Voice from Gaza',
    author: 'Fatima, 16',
    content: 'I wake up every day hoping for peace. My school was destroyed last month, but I still dream of becoming a doctor.'
  },
  {
    id: 2,
    title: 'Living with Courage',
    author: 'Ahmad, 22',
    content: 'Life here is uncertain. But we are strong. We help each other, share food, and stay hopeful.'
  },
  {
    id: 3,
    title: 'Hope in the Rubble',
    author: 'Layla, 29',
    content: 'Even though I lost my home, I didn’t lose my faith in humanity. We rebuild with our hearts.'
  },
]

const Stories = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-800">Voices of Gaza</h1>
      {storiesData.map(story => (
        <div key={story.id} className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{story.title}</h2>
          <p className="text-sm text-gray-500 mb-2">By {story.author}</p>
          <p className="text-gray-700">{story.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Stories;

import React from 'react'

const seller = () => {

  const addHandler = (e) => {
    e.preventDefault()
    console.log('Product Added')
    fetch('http://localhost:5173/about', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target[0].value,
        description: e.target[1].value,
        price: e.target[2].value,
        image: e.target[3].value
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
      })
  }
  return (
    <div className="min-h-screen bg-gray-100  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">ADD PRODUCT</h1>
        <form method='POST' onSubmit={addHandler} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <input 
              type="text" 
              placeholder="Product Name"
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            />
            <input 
              type="text" 
              placeholder="Product Description"
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            />
            <input 
              type="text" 
              placeholder="Product Price"
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            />
            <input 
              type="text" 
              placeholder="Product Image"
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            />
          </div>
          <button 
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default seller;
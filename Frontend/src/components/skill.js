import React from 'react'

function skill() {
  return (
    <div className='m-3'>
       <h3 className='text-center mb-1'>Skill</h3>
       <hr className="featurette-divider mb-4"></hr>
       <div className='coding-skill'>
       <label for="vol" className='mb-3 fs-4'>HTML:</label>
       <input type="range" className='w-100' id="vol" name="vol" min="0" max="100" value={85}/>
       <label for="vol" className='mb-3 fs-4'>CSS:</label>
       <input type="range" className='w-100' id="vol" name="vol" min="0" max="100" value={80}/>
       <label for="vol" className='mb-3 fs-4'>JAVASCRIPT:</label>
       <input type="range" className='w-100' id="vol" name="vol" min="0" max="100" value={70}/>
       <label for="vol" className='mb-3 fs-4'>BOOTSTRAP:</label>
       <input type="range" className='w-100' id="vol" name="vol" min="0" max="100" value={65}/>
       <label for="vol" className='mb-3 fs-4'>REACT:</label>
       <input type="range" className='w-100' id="vol" name="vol" min="0" max="100" value={72}/>
       <label for="vol" className='mb-3 fs-4'>C:</label>
       <input type="range" className='w-100' id="vol" name="vol" min="0" max="100" value={85}/>
       <label for="vol" className='mb-3 fs-4'>C++:</label>
       <input type="range" className='w-100' id="vol" name="vol" min="0" max="100" value={80}/>
       <label for="vol" className='mb-3 fs-4'>JAVA:</label>
       <input type="range" className='w-100' id="vol" name="vol" min="0" max="100" value={75}/>
       </div>
    </div>
  )
}

export default skill
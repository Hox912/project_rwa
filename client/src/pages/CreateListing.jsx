import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Objavite oglas</h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type="text" placeholder='Ime' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='5' required />
                <textarea type="text" placeholder='Opis' className='border p-3 rounded-lg' id='description' required />
                <input type="text" placeholder='Adresa (mjesto pokupa)' className='border p-3 rounded-lg' id='address' required />

                <div className='flex gap-6 flex-wrap'>
                   <div className='flex gap-2'>
                        <input type='checkbox' id='sale' className='w-5' />
                        <span>Na prodaju</span>
                   </div>
                   <div className='flex gap-2'>
                        <input type='checkbox' id='sale' className='w-5' />
                        <span>Za iznajmljivanje</span>
                   </div>
                   <div className='flex items-center gap-2'>
                        <input type="number" id='regularPrice' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg' /> 
                        <div className='flex flex-col items-center'>
                            <p>Normalna cijena</p>  
                            <span className='text-xs'>(€ / dnevno)</span> 
                        </div> 
                   </div> 
                   <div className='flex items-center gap-2'>
                        <input type="number" id='discountPrice' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg' /> 
                        <div className='flex flex-col items-center'>
                            <p>Cijena s popustom</p>  
                            <span className='text-xs'>(€ / dnevno)</span> 
                        </div> 
                   </div>   
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Slike: 
                <span className='font-normal text-gray-600 ml-2'> Prva slika će biti naslovna (max. 6 slika)</span>
                </p>
                <div className='flex gap-4'>
                    <input className='p-3 border border-gray-300 rounded w-full' type="file" id='images' accept='image/*' multiple />
                    <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Ucitaj slike</button>
                </div>
                <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Objavite oglas</button>
            </div>
        </form>
    </main>
  )
}

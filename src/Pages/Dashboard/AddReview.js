import React from 'react'
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
export const AddReview = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey='4295ac4d47b569312bea67b440cdbdbb';

    

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const review = {
                    name: data.name,
                    details: data.details,
                    ratings: data.ratings,
                    img: img
                }
                // send to your database 
                fetch('http://localhost:5000/reviews', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(review)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Review added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the review');
                    }
                })

            }
            
        })
    }
  return (
    <div>
            <h2 className="text-2xl">Add a New Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                

                

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea
                        type="text"
                        className="input input-bordered w-full max-w-xs h-32"
                        {...register("details", {
                            required: {
                                value: true,
                                message: 'details is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.text.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <textarea
                        type="text"
                        className="input input-bordered w-full max-w-xs h-16"
                        {...register("ratings", {
                            required: {
                                value: true,
                                message: 'Ratings is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
           </form>
        </div>
  )
}

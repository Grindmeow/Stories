import React from 'react'
import { useGetPostsQuery } from '../features/BlogApi';
import { useNavigate } from 'react-router';
import { baseUrl } from '../features/constant';


export const Post = () => {
  const { data, isLoading } = useGetPostsQuery();
  const nav = useNavigate();


  console.log("data", data);




  return (

    <div className='w-9/12 '>

      <div className='grid grid-cols-2 md:grid-cols-1'>



        {data && data.map(detail => (
          <div className='w-[385px] mt-[35px] mr-[25px] mb-[40px] ml-[25px] '>

            <img className='w-full h-[280px] object-cover rounded-[7px] ' src={`${baseUrl}${detail.photo}`} alt="" />

            <div className='flex flex-col items-center'>
              <div className='text-[11px] text-amber-400 leading-5  cursor-pointer mt-[15px]  ' >

                {/* ERROR */}

                {detail.categories.map(category =>

                (<span className='mr-[10px]'>{category}</span>
                )
                )}

              </div>
              <span onClick={() => nav(`/posts/${detail._id}`)} className='text-[24px] font-bold mt-[15px] cursor-pointer'>{data && detail.title} </span>
              <hr />
              <span className='italic text-[13px] text-gray-400 mt-15px'>1 hour ago</span>


              <p className='text-[14px] text-gray-700 leading-6 mt-[10px] text-ellipsis line-clamp-4  '>

                {data && detail.desc}

              </p></div>
          </div>
        ))}


      </div>


    </div>

  )
};
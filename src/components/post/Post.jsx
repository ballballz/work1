import React, { useState } from 'react'
import {Items} from './items/Items'
import './post.css'
import CreatePost from './action/create/CreatePost'
import ProfilePost from './profilepost/ProfilePost'
import people from '../../data'


export const Post = () => {
  const [isModal,setIsModal] = useState(false)
  const [posts,setPosts] = useState(people)

  return (
    <div className='post-all'>
      <ProfilePost setIsModal={setIsModal}/>
      {isModal && 
      <div className='modal'>
        <div className='control-modal'>
          <div className='close' onClick={()=>setIsModal(false)}>&#x2716;</div>
          <CreatePost />
        </div>
      </div>
      }
      {posts.map((post,index)=>{
        return <Items key={index} {...post}/>
      })}
    </div>
  )
}

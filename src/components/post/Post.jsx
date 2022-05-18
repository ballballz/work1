import React, { useEffect, useState } from 'react'
import {Items} from './items/Items'
import './post.css'
import CreatePost from './action/create/CreatePost'
import ProfilePost from './profilepost/ProfilePost'
import people from '../../data'


export const Post = () => {
  const [isModal,setIsModal] = useState(false)
  const [posts,setPosts] = useState(people)

  const addPost = (newPost) =>{
    setPosts((post)=>{
      return [newPost,...post]
    })
    setIsModal(false)
  }

  const editPostItem = (newQuote,id) => {
    const newEdit = posts.filter((item)=>{
      if(item.id === id){
        item.quote = newQuote
      }
      return item
    })
    setPosts(newEdit)
  }

  const deletePostItem = (id) => {
    const newDelete = posts.filter((item)=>item.id !== id)
    setPosts(newDelete)
  }


  return (

    <div className='post-all'>
      <ProfilePost setIsModal={setIsModal}/>
      {isModal && 
      <div className='modal'>
        <div className='control-modal'>
          <div className='close' onClick={()=>setIsModal(false)}>&#x2716;</div>
          <CreatePost addPost={addPost} id={posts.length}/>
        </div>
      </div>
      }
      {posts.map((post,index)=>{
        return <Items 
        key={index} 
        {...post} 
        index={index} 
        editPostItem={editPostItem} 
        deletePostItem={deletePostItem}
        />
      })}
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import {  Navbar } from "flowbite-react";
import {api,api_key} from "../api/api"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchmovie } from '../redux/actions/movie';

function Header() {
  const [search, setsearch] = useState("")
  const dispatch =useDispatch()
  const handle =async (e) => {
    e.preventDefault();
    if(search !== ""){
      const res = await api.get(`/search/movie?query="${search}"&api_key=${api_key}`)
      dispatch(fetchmovie(res.data.results))
    }else{
      const res=await api.get(`/tv/popular?language=en-US&page=1?api_key=${api_key}`)
      dispatch(fetchmovie(res.data.results))
    }
  }

  return (
    <Navbar fluid rounded className=' sticky top-0'>
        <Link to='/' className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Testing Blog</Link>
       <div className="flex md:order-2">
        <form onSubmit={handle}>
          <input type="text"  onChange={ e => setsearch(e.target.value)} className=" border-1 border-slate-700 rounded ring-transparent	 " placeholder='Search Movie...'></input>
          <button type='submit'>Search</button>
        </form>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}

export default Header

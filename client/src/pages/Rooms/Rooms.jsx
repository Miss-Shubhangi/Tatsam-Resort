import React from 'react'
import RoomCard from '../../components/RoomCard/RoomCard'
import Data from '../../assets/data'

function Rooms() {
    const rooms = Data.resort.rooms; 
  return (
    <>
    <section className="py-10">
    <div className="text-center mb-10">
      <h2 className="md:text-4xl  text-xl heading">HOTEL & SPA ADINA</h2>
      <h1 className="md:text-2xl text-lg subheading">Rooms & Suites</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 max-w-6xl mx-auto">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  </section>
    </>
  )
}

export default Rooms;
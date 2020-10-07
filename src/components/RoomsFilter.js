import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // Get all unique values
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };
  // Get Unique Types
  let types = getUnique(rooms, "type");
  // Add All
  types = ["All", ...types];
  // Map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // Get Unique Capacity
  let people = getUnique(rooms, "capacity");
  // Map to jsx
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End of select type */}
        {/* Guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* End of Guests */}
        {/* Room Price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/* End of Room Price */}
        {/* Room Size */}
        <div className="form-group">
            <label htmlFor="size">Room Size</label>
            <div className="size-inputs">
              <input 
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              className="size-input"
              onChange={handleChange}
              />
              <input 
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              className="size-input"
              onChange={handleChange}
              />
            </div>
        </div>
        {/* End of Room Size */}
        {/* Extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
            type="checkbox"
            name="breakfast"
            id="breakfast"
            checked={breakfast}
            onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
            type="checkbox"
            name="pets"
            id="pets"
            checked={pets}
            onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}

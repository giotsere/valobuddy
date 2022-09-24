import React, { useState } from 'react';

function CreatePost() {
  const [name, setName] = useState('');
  const [rank, setRank] = useState('Iron 1');
  const [region, setRegion] = useState('NA');
  const [microphone, setMicrophone] = useState('No');
  const [roles, setRoles] = useState([]);
  const [description, setDescription] = useState('');
  const [lookingFrom, setLookingFrom] = useState('Iron 1');
  const [lookingTo, setLooknigTo] = useState('Iron 1');
  const [lookingRegion, setLookingRegion] = useState('NA');
  const [discord, setDiscord] = useState('');
  const [riot, setRiot] = useState('');

  const handleCheckbox = (e) => {
    const checkedState = e.target.checked;
    const checkedValue = e.target.value;

    if (checkedState) {
      setRoles((prev) => [...prev, checkedValue]);
    }

    if (!checkedState) {
      setRoles(roles.filter((role) => role !== checkedValue));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl mb-8 text-white">Create New Post</h2>
      <div className="w-4/5 lg:w-1/2">
        <div className="py-8 pl-10 mb-20 rounded-md bg-white">
          <div className="mb-4">
            <label className="pr-4 font-bold">Name:</label>
            <input
              className="p-2 border-solid border border-gray-500 rounded pl-2"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required="true"
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <label className="pr-4 font-bold">Rank:</label>
            <select
              className="p-2 cursor-pointer rounded"
              name="rank"
              id=""
              type="select"
              required="true"
            >
              <option value="Iron 1">Iron 1</option>
              <option value="Iron 2">Iron 2</option>
              <option value="Iron 3">Iron 3</option>
              <option value="Silver 1">Silver 1</option>
              <option value="Silver 2">Silver 2</option>
              <option value="Silver 3">Silver 3</option>
              <option value="Gold 1">Gold 1</option>
              <option value="Gold 2">Gold 2</option>
              <option value="Gold 3">Gold 3</option>
              <option value="Platinum 1">Platinum 1</option>
              <option value="Platinum 2">Platinum 2</option>
              <option value="Platinum 3">Platinum 3</option>
              <option value="Diamond 1">Diamond 1</option>
              <option value="Diamond 2">Diamond 2</option>
              <option value="Diamond 3">Diamond 3</option>
              <option value="Ascendant 1">Ascendant 1</option>
              <option value="Ascendant 2">Ascendant 2</option>
              <option value="Ascendant 3">Ascendant 3</option>
              <option value="Immortal 1">Immortal 1</option>
              <option value="Immortal 2">Immortal 2</option>
              <option value="Immortal 3">Immortal 3</option>
              <option value="Radiant">Radiant</option>
            </select>
          </div>

          <div className="mb-4 flex">
            <div className="pr-4">
              <label className="pr-4 font-bold">Region:</label>
              <select
                className="p-2 cursor-pointer rounded"
                name="region"
                id=""
                type="select"
                onChange={(e) => {
                  setRegion(e.target.value);
                }}
              >
                <option value="NA">NA</option>
                <option value="EU">EU</option>
                <option value="TR">TR</option>
                <option value="MENA">MENA</option>
                <option value="CIS">CIS</option>
                <option value="KR">KR</option>
                <option value="JP">JP</option>
                <option value="OCE">OCE</option>
                <option value="SEA">SEA</option>
                <option value="LATAM">LATAM</option>
                <option value="BR">BR</option>
              </select>
            </div>

            <div>
              <label className="pr-4 font-bold">Microphone:</label>
              <select
                className="p-2 cursor-pointer rounded"
                name="microphone"
                id=""
                type="select"
                onChange={(e) => {
                  setMicrophone(e.target.value);
                }}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="font-bold">Roles:</label>
          </div>
          <div className="mb-4">
            <label className="pr-4">Sentinel</label>
            <input
              className="cursor-pointer"
              type="checkbox"
              name="sentinel"
              id=""
              value="Sentinel"
              onChange={(e) => {
                handleCheckbox(e);
              }}
            />
            <label className="pl-4 pr-2">Controller</label>
            <input
              className="cursor-pointer"
              type="checkbox"
              name="controller"
              id=""
              value="Controller"
              onChange={(e) => {
                handleCheckbox(e);
              }}
            />
            <label className="pl-4 pr-2">Initiator</label>
            <input
              className="cursor-pointer"
              type="checkbox"
              name="initiator"
              id=""
              value="Initiator"
              onChange={(e) => {
                handleCheckbox(e);
              }}
            />
            <label className="pl-4 pr-2">Duelist</label>
            <input
              className="cursor-pointer"
              type="checkbox"
              name="duelist"
              id=""
              value="Duelist"
              placeholder="Duelist"
              onChange={(e) => {
                handleCheckbox(e);
              }}
            />
          </div>

          <div>
            <div className="mb-4">
              <label className="font-bold">Description:</label>
            </div>
            <div>
              <textarea
                className="border-solid border border-gray-500 rounded resize-none mb-4 p-2 w-4/5 lg:w-3/5"
                name="description"
                id=""
                cols="30"
                rows="10"
                required="true"
                placeholder="About you"
                type="textarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>
          </div>

          <div className="mb-4">
            <label className="pr-2 font-bold">Looking for Ranks From:</label>
            <select
              className="p-2 cursor-pointer rounded-md"
              name="lookingFrom"
              id=""
              type="select"
              onChange={(e) => {
                setLookingFrom(e.target.value);
              }}
            >
              <option value="Iron 1">Iron 1</option>
              <option value="Iron 2">Iron 2</option>
              <option value="Iron 3">Iron 3</option>
              <option value="Silver 1">Silver 1</option>
              <option value="Silver 2">Silver 2</option>
              <option value="Silver 3">Silver 3</option>
              <option value="Gold 1">Gold 1</option>
              <option value="Gold 2">Gold 2</option>
              <option value="Gold 3">Gold 3</option>
              <option value="Platinum 1">Platinum 1</option>
              <option value="Platinum 2">Platinum 2</option>
              <option value="Platinum 3">Platinum 3</option>
              <option value="Diamond 1">Diamond 1</option>
              <option value="Diamond 2">Diamond 2</option>
              <option value="Diamond 3">Diamond 3</option>
              <option value="Ascendant 1">Ascendant 1</option>
              <option value="Ascendant 2">Ascendant 2</option>
              <option value="Ascendant 3">Ascendant 3</option>
              <option value="Immortal 1">Immortal 1</option>
              <option value="Immortal 2">Immortal 2</option>
              <option value="Immortal 3">Immortal 3</option>
              <option value="Radiant">Radiant</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="pr-2 font-bold">Looking for Ranks To:</label>
            <select
              className="p-2 cursor-pointer rounded-md"
              name="lookingTo"
              id=""
              type="select"
              onChange={(e) => {
                setLooknigTo(e.target.value);
              }}
            >
              <option value="Iron 1">Iron 1</option>
              <option value="Iron 2">Iron 2</option>
              <option value="Iron 3">Iron 3</option>
              <option value="Silver 1">Silver 1</option>
              <option value="Silver 2">Silver 2</option>
              <option value="Silver 3">Silver 3</option>
              <option value="Gold 1">Gold 1</option>
              <option value="Gold 2">Gold 2</option>
              <option value="Gold 3">Gold 3</option>
              <option value="Platinum 1">Platinum 1</option>
              <option value="Platinum 2">Platinum 2</option>
              <option value="Platinum 3">Platinum 3</option>
              <option value="Diamond 1">Diamond 1</option>
              <option value="Diamond 2">Diamond 2</option>
              <option value="Diamond 3">Diamond 3</option>
              <option value="Ascendant 1">Ascendant 1</option>
              <option value="Ascendant 2">Ascendant 2</option>
              <option value="Ascendant 3">Ascendant 3</option>
              <option value="Immortal 1">Immortal 1</option>
              <option value="Immortal 2">Immortal 2</option>
              <option value="Immortal 3">Immortal 3</option>
              <option value="Radiant">Radiant</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="pr-2 font-bold">Looking for Region:</label>
            <select
              className="p-2 cursor-pointer rounded-md"
              name="lookingRegion"
              id=""
              type="select"
              placehold="select region"
              onChange={(e) => {
                setLookingRegion(e.target.value);
              }}
            >
              <option value="NA">NA</option>
              <option value="EU">EU</option>
              <option value="TR">TR</option>
              <option value="MENA">MENA</option>
              <option value="CIS">CIS</option>
              <option value="KR">KR</option>
              <option value="JP">JP</option>
              <option value="OCE">OCE</option>
              <option value="SEA">SEA</option>
              <option value="LATAM">LATAM</option>
              <option value="BR">BR</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="pr-2 font-bold">Discord:</label>
            <input
              className="p-2 border-solid border border-gray-500 rounded pl-2"
              type="text"
              name="discord"
              onChange={(e) => setDiscord(e.target.value)}
              value={discord}
              required="true"
              placeholder="Discord Username"
            />
          </div>
          <div className="mb-8">
            <label className="pr-2 font-bold">Riot:</label>
            <input
              className="p-2 border-solid border border-gray-500 rounded pl-2"
              type="text"
              name="riot"
              onChange={(e) => setRiot(e.target.value)}
              value={riot}
              required="true"
              placeholder="Riot Username"
            />
          </div>

          <button className="px-6 py-4 border-solid border rounded-md border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

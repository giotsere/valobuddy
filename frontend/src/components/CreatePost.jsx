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
    <div>
      <h3>Create New Post</h3>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required="true"
          placeholder="Username"
        />

        <label>Rank:</label>
        <select name="rank" id="" type="select" required="true">
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

        <div>
          <label>Region:</label>
          <select
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

          <label>Microphone:</label>
          <select
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

        <label>Roles:</label>
        <label>Sentinel</label>
        <input
          type="checkbox"
          name="sentinel"
          id=""
          value="Sentinel"
          onChange={(e) => {
            handleCheckbox(e);
          }}
        />
        <label>Controller</label>
        <input
          type="checkbox"
          name="controller"
          id=""
          value="Controller"
          onChange={(e) => {
            handleCheckbox(e);
          }}
        />
        <label>Initiator</label>
        <input
          type="checkbox"
          name="initiator"
          id=""
          value="Initiator"
          onChange={(e) => {
            handleCheckbox(e);
          }}
        />
        <label>Duelist</label>
        <input
          type="checkbox"
          name="duelist"
          id=""
          value="Duelist"
          placeholder="Duelist"
          onChange={(e) => {
            handleCheckbox(e);
          }}
        />

        <div>
          <label>Description:</label>
          <div>
            <textarea
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

        <div>
          <label>Looking for Ranks From:</label>
          <select
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

          <label>Looking for Ranks To:</label>
          <select
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

        <label>Looking for Region:</label>
        <select
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

        <div>
          <label>Discord:</label>
          <input
            type="text"
            name="discord"
            onChange={(e) => setDiscord(e.target.value)}
            value={discord}
            required="true"
            placeholder="Discord Username"
          />

          <label>Riot:</label>
          <input
            type="text"
            name="riot"
            onChange={(e) => setRiot(e.target.value)}
            value={riot}
            required="true"
            placeholder="Riot Username"
          />
        </div>
      </form>
    </div>
  );
}

export default CreatePost;

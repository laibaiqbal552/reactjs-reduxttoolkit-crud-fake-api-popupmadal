import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";
import Modal from "react-modal";

import { FaWindowClose } from "react-icons/fa";
const Update = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [dispatch, id, users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));

    setShowUpdateModal(true);
  };
  const closeModal = () => {
    setShowUpdateModal(false);
    navigate("/read");
  };
  return (
    <div className="bg-gray-900  min-h-screen flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="max-w-4xl w-full mx-auto px-5 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            create new entry
          </h2>
        </div>

        <div className="mt-10 ">
          <form className="space-y-6" onSubmit={handleUpdate}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={updateData && updateData.name}
                  onChange={newData}
                  className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={updateData && updateData.email}
                  onChange={newData}
                  className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-white"
              >
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={updateData && updateData.age}
                  onChange={newData}
                  className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex gap-20">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-white"
              >
                Gender
              </label>
              <div className="flex gap-10">
                <div className="mt-2">
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
                    checked={updateData && updateData.gender === "Male"}
                    onChange={newData}
                    className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  <label className="text-white">Male</label>
                </div>
                <div className="mt-2">
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    value="female"
                    checked={updateData && updateData.gender === "Female"}
                    onChange={newData}
                    className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  <label className="text-white">Female</label>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleUpdate}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                UPDATE
              </button>
              <PopupModal2 isOpen={showUpdateModal} onClose={closeModal} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
const PopupModal2 = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Data Popup"
      className="max-w-[500px] w-full bg-white relative m-auto h-[400px] mt-28 p-6 rounded-md"
    >
      <button onClick={onClose} className="absolute right-6">
        <FaWindowClose className="text-2xl" />
      </button>

      <h2 className="flex text-indigo-900 text-2xl font-bold justify-center items-center h-full">
        Data updated Successfully!
      </h2>
    </Modal>
  );
};

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
import Form from "./Form";

const Update = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading } = useSelector((state) => state.app);
  const singleUser = users.find((item) => item.id == id);
  console.log(singleUser, "single");
  const handleUpdate = (values) => {
    dispatch(updateUser({ ...values, id }));
    if (!loading) {
      setTimeout(() => {
        navigate("/read");
      }, 3000);
    }
  };
  const closeModal = () => {
    setShowUpdateModal(false);
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

        <div className="mt-10">
          <Form
            onSubmit={handleUpdate}
            initialSTATE={singleUser}
            loading={loading}
          />
          <PopupModal2 isOpen={showUpdateModal} onClose={closeModal} />
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

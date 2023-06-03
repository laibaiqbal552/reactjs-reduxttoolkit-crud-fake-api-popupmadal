import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "./../features/userDetailSlice";
import { deleteUser } from "./../features/userDetailSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import { FaWindowClose } from "react-icons/fa";
const Read = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.app);
  const { users, loading } = useSelector((state) => state.app);

  const HandleDelete = (r) => {
    dispatch(deleteUser(r));
    setShowDeleteModal(true);
  };
  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);
  if (loading) {
    return <h2>Loading</h2>;
  }
  const closeDeleteModal = () => setShowDeleteModal(false);
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl min-h-screen">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">
                  Users
                </h1>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <Link
                  to="/"
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Add user
                </Link>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-3xl font-semibold text-white sm:pl-0"
                        >
                          name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          age
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">delete</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {users &&
                        users.map((e) => (
                          <tr key={e.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {e.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {e.age}
                            </td>

                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <div className="text-indigo-400 hover:text-indigo-300">
                                <Link
                                  to={`/edit/${e.id}`}
                                  className="card-link"
                                >
                                  Edit
                                </Link>
                              </div>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <Link
                                onClick={() => HandleDelete(e.id)}
                                className="text-indigo-400 hover:text-indigo-300"
                              >
                                Delete
                              </Link>
                              <DeleteConfirmationModal
                                isOpen={showDeleteModal}
                                onCancel={closeDeleteModal}
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Read;
const DeleteConfirmationModal = ({ isOpen, onCancel }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Delete Confirmation Popup"
      className="max-w-[500px] w-full bg-white relative border-gray-500 border rounded-md m-auto h-[400px] mt-28 p-6 rounded-md"
    >
      <button onClick={onCancel} className="absolute right-6">
        <FaWindowClose className="text-2xl" />
      </button>
      <h2 className="flex text-red-900 text-2xl font-bold justify-center items-center h-full">
        one item deleted?
      </h2>
    </Modal>
  );
};

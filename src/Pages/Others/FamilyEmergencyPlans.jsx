import React from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import Banner from "../../assets/FamilyEmergancyPlan/FamilyBanner.jpg";
import { Button, Table } from "flowbite-react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import CreateOrEditPlan from "../../Components/FamilyEmergencyPlans/CreataAndEditPlans";

const FamilyEmergencyPlans = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/CreateAndEditPlans");
  };
  return (
    <>
      <MainNav />
      <div className="pt-40 mt-6 mb-2">
        <div className="relative mb-5">
          <img
            src={Banner}
            className="h-[35vh] w-full object-cover object-center"
          />
          <div className=" absolute inset-0 py-10 bg-black bg-opacity-45 flex-row items-center justify-center text-center px-5 md:px-20">
            <p className="text-white  font-extrabold  text-2xl md:text-4xl p-4 ">
              Family Emergency Plans
            </p>
            <p className="text-white font-semibold text-xs md:text-sm">
              Create a comprehensive plan to ensure your family’s safety during
              emergencies. Store essential information and guidelines to stay
              prepared for unexpected situations.
            </p>
          </div>
        </div>
        <div className="p-3">
          <div className="border border-gray-300 rounded-xl p-2">
            <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-2">
              <div className="w-full md:w-1/2">
                <CreateOrEditPlan />
              </div>

              <div className="hidden md:block border-l border-black h-full mx-2"></div>
              <div className="w-full md:w-1/2">
                <h1 className="text-center md:text-center text-primary text-3xl my-5 font-bold">
                  My Plans
                </h1>
                <div className="p-2">
                  <div className="overflow-x-auto py-5 px-1">
                    <Table striped>
                      <Table.Head>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>
                          <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Apple MacBook Pro 17"'}
                          </Table.Cell>
                          <Table.Cell>Sliver</Table.Cell>
                          <Table.Cell className="flex items-center justify-center gap-2">
                            <a
                              href="#"
                              className="font-medium p-1 border-green-500 border-2 rounded-lg bg-green-500 text-white"
                            >
                              <CiEdit className="w-6 h-6 hover:scale-110" />
                            </a>
                            <a
                              href="#"
                              className="font-medium p-1 border-blue-500 border-2 rounded-lg bg-blue-500 text-white"
                            >
                              <MdOutlineRemoveRedEye className="w-6 h-6 hover:scale-110" />
                            </a>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                          </Table.Cell>
                          <Table.Cell>White</Table.Cell>
                          <Table.Cell className="flex items-center justify-center gap-5">
                            <a
                              href="#"
                              className="font-medium text-cyan-600 hover:underline"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </a>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                          </Table.Cell>
                          <Table.Cell>White</Table.Cell>
                          <Table.Cell className="flex items-center justify-center gap-5">
                            <a
                              href="#"
                              className="font-medium text-cyan-600 hover:underline"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </a>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                          </Table.Cell>
                          <Table.Cell>White</Table.Cell>
                          <Table.Cell className="flex items-center justify-center gap-5">
                            <a
                              href="#"
                              className="font-medium text-cyan-600 hover:underline"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </a>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                          </Table.Cell>
                          <Table.Cell>White</Table.Cell>
                          <Table.Cell className="flex items-center justify-center gap-5">
                            <a
                              href="#"
                              className="font-medium text-cyan-600 hover:underline"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </a>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                          </Table.Cell>
                          <Table.Cell>White</Table.Cell>
                          <Table.Cell className="flex items-center justify-center gap-5">
                            <a
                              href="#"
                              className="font-medium text-cyan-600 hover:underline"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </a>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                          </Table.Cell>
                          <Table.Cell>White</Table.Cell>
                          <Table.Cell className="flex items-center justify-center gap-5">
                            <a
                              href="#"
                              className="font-medium text-cyan-600 hover:underline"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </a>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                          </Table.Cell>
                          <Table.Cell>White</Table.Cell>
                          <Table.Cell className="flex items-center justify-center gap-5">
                            <a
                              href="#"
                              className="font-medium text-cyan-600 hover:underline"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </a>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Magic Mouse 2
                          </Table.Cell>
                          <Table.Cell>Black</Table.Cell>
                          <Table.Cell className="flex items-center justify-center gap-2">
                            <a
                              href="#"
                              className="font-medium text-cyan-600 hover:underline"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </a>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FamilyEmergencyPlans;

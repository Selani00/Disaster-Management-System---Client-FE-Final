import React from "react";
import { Table } from "flowbite-react";

const AllPlans = () => {
  return (
    <div className="overflow-x-auto py-5 px-2">
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

            <Table.Cell className="flex items-center justify-center gap-5">
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline "
              >
                Edit
              </a>
              <a
                href="#"
                className="font-medium text-red-600 hover:underline "
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
                className="font-medium text-cyan-600 hover:underline "
              >
                Edit
              </a>
              <a
                href="#"
                className="font-medium text-red-600 hover:underline "
              >
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white ">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>

            <Table.Cell className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline "
              >
                Edit
              </a>
              <a
                href="#"
                className="font-medium text-red-600 hover:underline "
              >
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
          
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllPlans;

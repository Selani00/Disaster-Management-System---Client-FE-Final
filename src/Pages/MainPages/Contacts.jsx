import React, { useEffect, useState } from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import { TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { Spinner } from "flowbite-react";

const Contacts = () => {
  const [contacts, setContacts] = useState({});
  const [departmentColors, setDepartmentColors] = useState({});
  const [hotlines, setHotlines] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const tableHeadings = [
    "Name",
    "Title",
    "Location",
    "Direct Dial",
    "Mobile",
    "Email",
  ];

  const colors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-red-100",
    "bg-purple-100",
    "bg-pink-100",
    // Add more colors if needed
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/api/contacts/getAll");
      const groupedContacts = res.data.reduce((acc, contact) => {
        const { department } = contact;
        if (!acc[department]) acc[department] = [];
        acc[department].push(contact);
        return acc;
      }, {});
      setContacts(groupedContacts);

      // Extract hotlines
      const departmentHotlines = res.data.reduce((acc, contact) => {
        const { department, hotline } = contact;
        if (!acc[department]) acc[department] = hotline;
        return acc;
      }, {});
      setHotlines(departmentHotlines);

      // Shuffle colors and assign to departments
      const shuffledColors = shuffleArray([...colors]);
      const colorsForDepartments = Object.keys(groupedContacts).reduce(
        (acc, department, index) => {
          acc[department] = shuffledColors[index % shuffledColors.length];
          return acc;
        },
        {}
      );
      setDepartmentColors(colorsForDepartments);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filterContacts = (contacts) => {
    if (!searchQuery) return contacts;

    const filtered = {};
    Object.keys(contacts).forEach((department) => {
      const matchingContacts = contacts[department].filter((contact) => {
        return (
          contact.contactName.toLowerCase().includes(searchQuery) ||
          contact.title.toLowerCase().includes(searchQuery) ||
          contact.address.toLowerCase().includes(searchQuery) ||
          contact.directDial.toLowerCase().includes(searchQuery) ||
          contact.mobile.toLowerCase().includes(searchQuery) ||
          contact.email.toLowerCase().includes(searchQuery)
        );
      });

      if (matchingContacts.length > 0) {
        filtered[department] = matchingContacts;
      }
    });

    return filtered;
  };

  const filteredContacts = filterContacts(contacts);

  return (
    <>
      <MainNav />
      <div className="pt-40 mt-6">
        <form className="px-5 md:px-20 mt-20 hidden sm:block">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            value={searchQuery}
            onChange={handleSearch}
          />
        </form>

        <>
          {loading ? (
            <div className="flex flex-col items-center justify-center h-screen">
              <Spinner aria-label="Extra large spinner example" size="xl" />
              <p className="mt-4 text-lg font-semibold">Please wait...</p>
            </div>
          ) : (
            <div>
              {Object.keys(filteredContacts).length === 0 ? (
                <p className="text-center m-5">Sorry, no contacts like this</p>
              ) : (
                Object.keys(filteredContacts).map((department) => (
                  <div
                    key={department}
                    className={`p-5 m-10 ${
                      departmentColors[department] || "bg-gray-100"
                    }`}
                  >
                    <h1 className="text-base md:text-3xl font-bold text-center">
                      {department}
                    </h1>

                    <div className="w-full bg-white p-2 md:p-5 mt-5 shadow-lg flex items-center justify-between">
                      <h1 className="text-red-600 font-semibold text-base md:text-2xl">
                        Hotline:-
                      </h1>

                      <div className="bg-red-600 text-white font-bold text-base md:text-2xl p-2 rounded-md">
                        {hotlines[department]}
                      </div>
                    </div>
                    <div className="overflow-auto rounded-lg shadow mt-5">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                          <tr className="text-sm font-semibold tracking-wide text-left">
                            {tableHeadings.map((heading) => (
                              <th key={heading} className="p-3">
                                {heading}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {filteredContacts[department].map(
                            (contact, index) => (
                              <tr
                                key={index}
                                className={
                                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }
                              >
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                  {contact.contactName}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                  {contact.title}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                  {contact.address}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                  {contact.directDial}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                  {contact.mobile}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                  <a
                                    className="font-bold hover:underline"
                                    href={`mailto:${contact.email}`}
                                  >
                                    {contact.email}
                                  </a>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </>
        <Footer />
      </div>
    </>
  );
};

export default Contacts;

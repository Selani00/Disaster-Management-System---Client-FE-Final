import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import Banner from "../../assets/FamilyEmergancyPlan/FamilyBanner.jpg";
import { Table, Spinner } from "flowbite-react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import CreateOrEditPlan from "../../Components/FamilyEmergencyPlans/CreataAndEditPlans";
import Model from "../../Components/Commen/Model_1";
import parse from "html-react-parser";
import Swal from "sweetalert2";

const FamilyEmergencyPlans = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/familyPlans/getPlans/${currentUser.email}`
      );
      setPlans(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleView = (plan) => {
    setSelectedPlan(plan);
    setShowModel(true);
  };

  const handleEdit = (plan) => {
    setSelectedPlan(plan);
    setIsEdit(true);
  };

  const handleDelete = async (planId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this plan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(
            `http://localhost:5000/api/familyPlans/deletePlan/${planId}`
          );
          if (res.status === 200) {
            fetchPlans();
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
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
                    {loading ? (
                      <div className="flex flex-col items-center justify-center h-screen">
                        <Spinner
                          aria-label="Extra large spinner example"
                          size="xl"
                        />
                      </div>
                    ) : (
                      <Table striped>
                        <Table.Head>
                          <Table.HeadCell>Title</Table.HeadCell>
                          <Table.HeadCell>Category</Table.HeadCell>
                          <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                          </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          {plans.map((plan) => (
                            <Table.Row className="bg-white" key={plan.planId}>
                              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white overflow-hidden">
                                {plan.title}
                              </Table.Cell>
                              <Table.Cell>{plan.category}</Table.Cell>
                              <Table.Cell className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => handleEdit(plan)}
                                  className="font-medium p-1 border-green-500 border-2 rounded-lg bg-green-500 text-white"
                                >
                                  <CiEdit className="w-6 h-6 hover:scale-110" />
                                </button>
                                <button
                                  onClick={() => handleView(plan)}
                                  className="font-medium p-1 border-blue-500 border-2 rounded-lg bg-blue-500 text-white"
                                >
                                  <MdOutlineRemoveRedEye className="w-6 h-6 hover:scale-110" />
                                </button>
                                <button
                                  onClick={() => handleDelete(plan.planId)}
                                  className="bg-red-500 rounded-lg text-white p-1"
                                >
                                  <MdDelete className="w-6 h-6 hover:scale-110" />
                                </button>
                              </Table.Cell>
                            </Table.Row>
                          ))}
                        </Table.Body>
                      </Table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Model isVisible={showModel} onClose={() => setShowModel(false)}>
        {selectedPlan && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center tracking-tight text-primary pt-5 uppercase">
              {selectedPlan.title}
            </h1>
            <p className="text-center font-semibold mt-0">
              {selectedPlan.category}
            </p>
            <div className="overflow-y-auto max-h-2/3 p-5 text-justify">
              <p className="font-normal text-gray-700">
                {parse(selectedPlan.content)}
              </p>
            </div>
          </div>
        )}
      </Model>

      <Footer />
    </>
  );
};

export default FamilyEmergencyPlans;

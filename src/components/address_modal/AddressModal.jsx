import { useState } from "react";
import { editUser } from "../../api/apicall";
import { useAuthContext } from "../../context/AuthContext";
import "./AddressModal.css";
import { v4 as uuid } from "uuid";

const indianStates = ["Maharashtra", "Karnataka", "Kerala", "Delhi"];
const austrilianStates = [
  "New South Wales",
  "QueenSold",
  "Victoria",
  "South Australia",
];

const AddressModal = ({ setOpenAddressModal }) => {
  const [stateOptions, setStateOptions] = useState(indianStates);
  const { authState, authDispatch } = useAuthContext();
  const [address, setAddress] = useState({
    name: "",
    country: "",
    state: "",
    addressLine1: "",
    city: "",
    pincode: "",
    mobileno: "",
  });
  const handleCountryChange = (country) => {
    setAddress((prev) => ({ ...prev, country: country }));
    if (country === "India") {
      setStateOptions(indianStates);
    } else {
      setStateOptions(austrilianStates);
    }
  };
  //   constz
  const addAddress = async (e) => {
    e.preventDefault();
    setAddress((prev) => ({ ...prev, _id: uuid() }));
    const updatedUser = {
      ...authState.user,
      address: [...authState.user.address, address],
    };
    const response = await editUser({ user: updatedUser });
    if (response.success) {
      authDispatch({
        type: "SET_LOGGED_USER",
        payload: {
          user: response.user,
          token: response.token,
        },
      });
    } else {
      alert("Something went wrong. Check console");
    }
    setOpenAddressModal(false);
  };
  const fillDummyAddress = () => {
    setAddress((prev) => ({
      ...prev,
      _id: uuid(),
      name: "Johnraw Doekar",
      country: "India",
      state: "Maharashtra",
      addressLine1: "house no 23/123, Ruikar Colony",
      city: "Kolhapur",
      pincode: "416112",
      mobileno: "9999999999",
    }));
  };

  const closeModal = () => {
    setOpenAddressModal(false);
  };
  return (
    <div className="address-modal">
      <div className="modal-heading">
        <p className="typo-title">New Address</p>
        {/* <button className="btn btn-icon" onclick={closeModal}>
          <i className="fa fa-times fa-lg" aria-hidden="true"></i>
        </button> */}
      </div>
      <form className="flex-vt g-1" onSubmit={addAddress}>
        <div className="modal-body flex-vt g-1">
          <input
            className="input input-outlined full-width "
            placeholder="Enter Name"
            value={address.name}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <select
            name="country"
            className="input input-outlined full-width "
            value={address.country}
            onChange={(event) => handleCountryChange(event.target.value)}
          >
            <option id="0">India</option>
            <option id="1">Australia</option>
          </select>
          <select
            name="state"
            className="input input-outlined full-width "
            value={address.state}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, state: e.target.value }))
            }
          >
            {stateOptions.map((opt, index) => (
              <option key={index}>{opt}</option>
            ))}
          </select>
          <input
            className="input input-outlined full-width "
            placeholder="Enter house no., street, colony"
            value={address.addressLine1}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, addressLine1: e.target.value }))
            }
          />
          <input
            className="input input-outlined full-width "
            placeholder="Enter city"
            value={address.city}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, city: e.target.value }))
            }
          />
          <input
            className="input input-outlined full-width "
            placeholder="Enter Pin Code"
            value={address.pincode}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, pincode: e.target.value }))
            }
          />
          <input
            className="input input-outlined full-width "
            placeholder="Enter Mobile No"
            value={address.mobileno}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, mobileno: e.target.value }))
            }
          />
        </div>
        <div className="modal-footer">
          <button className="btn btn-outlined" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="btn btn-outlined"
            type="submit"
            onClick={fillDummyAddress}
          >
            Fill With Dummy Address
          </button>
          <button
            className="btn btn-primary"
            onClick={addAddress}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export { AddressModal };

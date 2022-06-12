import { useAuthContext } from "../../context/AuthContext";
import { AddressModal } from "../address_modal/AddressModal";
import { useState } from "react";
import "./Address.css";
import { editUser } from "../../api/apicall";
const Address = () => {
  const { authState, authDispatch } = useAuthContext();
  const { address } = authState.user;
  const [openAddressModal, setOpenAddressModal] = useState(false);

  const removeAddress = async ({ _id }) => {
    const uodatedAddress = address.filter((add) => add._id !== _id);
    const updatedUser = {
      ...authState.user,
      address: uodatedAddress,
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
  };
  return (
    <div className="flex-vt g-1">
      <p className="typo-label"> Your Address ({address.length})</p>
      {address.map((address) => (
        <div className="address-card" key={address._id}>
          <div className="flex-hz-space-bw">
            <p className="typo-subtext text-bold">{address.name}</p>
            <button
              className="btn btn-secondary"
              onClick={() => removeAddress({ _id: address._id })}
            >
              Remove
            </button>
          </div>
          <p className="subtext-gray">{address.addressLine1}</p>
          <p className="subtext-gray">
            {address.city + " , " + address.pincode}
          </p>
          <p className="subtext-gray">
            {address.state + " , " + address.country}
          </p>
          <p className="subtext-gray">{address.mobileno}</p>
        </div>
      ))}
      {openAddressModal && (
        <AddressModal setOpenAddressModal={setOpenAddressModal} />
      )}
      <button
        className="btn btn-text"
        onClick={() => setOpenAddressModal(true)}
      >
        Add New
      </button>
    </div>
  );
};
export { Address };

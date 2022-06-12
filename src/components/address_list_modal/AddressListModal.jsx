import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import "./AddressListModal.css";
import { AddressModal } from "../address_modal/AddressModal";

const AddressListModal = ({
  setOpenAddressList,
  setSelectedAddress,
  selectedAddress,
}) => {
  const closeModal = () => {
    setOpenAddressList(false);
  };
  const [openAddressModal, setOpenAddressModal] = useState(false);

  const { authState } = useAuthContext();
  const { address } = authState.user;
  const setAddress = (address) => {
    setSelectedAddress(address);
    closeModal();
  };
  const checkSelectedAddress = (id) => {
    if (selectedAddress === null) return false;
    return id === selectedAddress._id;
  };
  return (
    <div className="address-list-modal">
      <div className="modal-heading">
        <p className="typo-title">Select Address</p>
      </div>
      <div className="modal-body flex-vt g-1">
        {address.map((address) => (
          <div
            className="address-card"
            key={address._id}
            onClick={() => setAddress(address)}
          >
            <input type="radio" checked={checkSelectedAddress(address._id)} />
            <div className="flex-hz-space-bw">
              <p className="typo-subtext text-bold">{address.name}</p>
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
      </div>
      {openAddressModal && (
        <AddressModal setOpenAddressModal={setOpenAddressModal} />
      )}
      <div className="modal-footer">
        <button className="btn btn-outlined" onClick={closeModal}>
          Cancel
        </button>
        <button
          className="btn btn-outlined"
          onClick={() => setOpenAddressModal(true)}
        >
          Add New Address
        </button>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </div>
  );
};
export { AddressListModal };
